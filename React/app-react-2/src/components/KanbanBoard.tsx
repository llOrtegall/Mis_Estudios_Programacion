import { DndContext, DragEndEvent, DragOverEvent, DragOverlay, DragStartEvent, PointerSensor, useSensor, useSensors } from "@dnd-kit/core"
import { SortableContext, arrayMove } from "@dnd-kit/sortable"
import ColumnContainer from "./ColumnContainer"
import { Id, IntColumn, Task } from "../types/types"
import { useMemo, useState } from "react"
import { createPortal } from "react-dom"
import PlusIcon from "./icons/PlusIcon"
import TaskCard from "./TaskCards"

function KanbanBoard() {
  const [columns, setColumns] = useState<IntColumn[]>([])
  const columnsId = useMemo(() => columns.map(column => column.id), [columns])
  const [tasks, setTasks] = useState<Task[]>([])

  const [activeColumn, setActiveColumn] = useState<IntColumn | null>(null)

  const [activeTask, setActiveTask] = useState<Task | null>(null)

  const sensors = useSensors(useSensor(PointerSensor, {
    activationConstraint: {
      distance: 3,
    }
  })
  )

  function createNewColumn() {
    const columnToAdd: IntColumn = {
      id: generateId(),
      title: `Column ${columns.length + 1}`
    }

    setColumns([...columns, columnToAdd])
  }

  function generateId(): number {
    return Math.floor(Math.random() * 10001)
  }

  function deleteColumn(id: Id) {
    setColumns(columns.filter(column => column.id !== id))
    setTasks(tasks.filter(task => task.columnId !== id))
  }

  function updateColumn(id: Id, title: string) {
    setColumns(columns.map(column => column.id === id ? { ...column, title } : column))
  }

  function handleDragStart(event: DragStartEvent) {
    if (event.active.data.current?.type === "Column") {
      setActiveColumn(event.active.data.current.column)
      return
    }

    if (event.active.data.current?.type === "Task") {
      setActiveTask(event.active.data.current.task)
      return
    }
  }

  function handleDragEnd(event: DragEndEvent) {
    setActiveColumn(null)
    setActiveTask(null)
    const { active, over } = event
    if (!over) return

    const activeColumnId = active.id;
    const overColumnId = over.id;

    if (activeColumnId === overColumnId) return

    setColumns(columns => {
      const activeColumnIndex = columns.findIndex(column => column.id === activeColumnId)
      const overColumnIndex = columns.findIndex(column => column.id === overColumnId)

      return arrayMove(columns, activeColumnIndex, overColumnIndex)
    })
  }

  function handleDragOver(event: DragOverEvent){
    const { active, over } = event
    if (!over) return

    const activeColumnId = active.id;
    const overColumnId = over.id;

    if (activeColumnId === overColumnId) return

    const isActiveTask = active.data.current?.type === "Task"
    const isOverTask = over.data.current?.type === "Task"

    if (!isActiveTask) return;

    // Im dropping a Task a another Task
    if( isActiveTask && isOverTask){
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex(t => t.id === activeColumnId)
        const overIndex = tasks.findIndex(t => t.id === overColumnId)

        tasks[activeIndex].columnId = tasks[overIndex].columnId

        return arrayMove(tasks, activeIndex, overIndex)
      })
    }

    const isOverColumn = over.data.current?.type === "Column";
    // Iam dropping a Task to a Column
    if(isActiveTask && isOverColumn){
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex(t => t.id === activeColumnId)

        tasks[activeIndex].columnId = overColumnId

        return arrayMove(tasks, activeIndex, activeIndex)
      })
    }


  }

  function createTask(columnId: Id) {
    const newTask: Task = {
      id: generateId(),
      columnId,
      content: `Task ${tasks.length + 1}`
    }

    setTasks([...tasks, newTask])
  }

  function updateTask(id: Id, content: string) {
    setTasks(tasks.map((task) => {
      if (task.id !== id) return task
      return { ...task, content }
    }))
  }

  function deleteTask(id: Id) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <section className="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-[40px]">

      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd} 
        sensors={sensors} onDragOver={handleDragOver}>
        <article className="m-auto flex gap-4">
          <header className="flex gap-4">
            <SortableContext items={columnsId}>
              {columns.map(column => <ColumnContainer key={column.id} column={column} deleteColumn={deleteColumn} updateColumn={updateColumn} createTask={createTask} tasks={tasks.filter((task) => task.columnId === column.id)} deleteTask={deleteTask} updateTask={updateTask} />)}
            </SortableContext>
          </header>
          <button className="flex items-center justify-center gap-4 h-[60px] w-[350px] min-w-[350px] cursor-pointer rounded-lg bg-slate-800 border-2 border-slate-900 ring-rose-500 hover:ring-2" onClick={() => createNewColumn()}>
            <PlusIcon />
            <span>Add Colum</span>
          </button>
        </article>

        {
          createPortal(
            <DragOverlay>
              {activeColumn && (
                <ColumnContainer
                  updateColumn={updateColumn}
                  deleteColumn={deleteColumn}
                  createTask={createTask}
                  updateTask={updateTask}
                  deleteTask={deleteTask}
                  tasks={tasks.filter(task => task.columnId === activeColumn.id)}
                  column={activeColumn}
                />
              )}
              {
                activeTask && (
                  <TaskCard
                    task={activeTask}
                    deleteTask={deleteTask}
                    updateTask={updateTask}
                  />
                )
              }
            </DragOverlay>,
            document.body
          )}

      </DndContext>

    </section>
  )
}

export default KanbanBoard