import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { Id, IntColumn, Task } from "../types/types";
import TrashIcon from "./icons/TrashIcons";
import { CSS } from "@dnd-kit/utilities";
import { useMemo, useState } from "react";
import PlusIcon from "./icons/PlusIcon";
import TaskCard from "./TaskCards";

interface Props {
  column: IntColumn
  deleteColumn: (id: Id) => void
  updateColumn: (id: Id, title: string) => void
  createTask: (columnId: Id) => void
  updateTask: (id: Id, content: string) => void
  deleteTask: (id: Id) => void
  tasks: Task[]
}

function ColumnContainer(props: Props) {
  const { column, deleteColumn, updateColumn, createTask, tasks, deleteTask, updateTask } = props;
  const tasksIds = useMemo(() => { return tasks.map((task) => task.id) }, [tasks])
  const [editMode, setEditMode] = useState(false)

  const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({ id: column.id, data: { type: "Column", column }, disabled: editMode })

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  }

  if (isDragging) {
    return (
      <div ref={setNodeRef} style={style} className="bg-slate-900 w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col p-2 opacity-40 border-2 border-rose-500">

      </div>
    )
  }



  return (
    <section ref={setNodeRef} style={style} className="bg-slate-900 w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col p-2">
      <div {...attributes} {...listeners} onClick={() => setEditMode(true)}
        className="flex items-center justify-between text-base h-[60px] cursor-grab rounded-md rounded-b-none p-3 font-semibold bg-slate-700">
        <article className="flex justify-center items-center bg-slate-950 px-2 py-1 text-sm rounded-lg">0</article>
        {!editMode && column.title}
        {editMode && <input className="bg-black focus:border-rose-500 border rounded outline-none px-2" value={column.title} autoFocus
          onChange={(e) => updateColumn(column.id, e.target.value)}
          onBlur={() => setEditMode(false)}
          onKeyDown={(e) => { if (e.key !== "Enter") return; setEditMode(false) }} />}
        <button className="hover:text-red-500" onClick={() => deleteColumn(column.id)}><TrashIcon /></button>
      </div>

      <article className="flex flex-col flex-grow overflow-x-hidden overflow-y-auto">
        <SortableContext items={tasksIds}>
          {tasks.map(task => {
            return <TaskCard key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask} />
          })}
        </SortableContext>
          {/* {tasks.map(task => {
            <TaskCard key={task.id} task={task}
              deleteTask={deleteTask} updateTask={updateTask} />
          })} */}
      </article>

      <button className="flex gap-2 items-center mt-1 rounded-md p-4 hover:bg-slate-800 hover:text-rose-500 active:bg-black"
        onClick={() => createTask(column.id)}>
        <PlusIcon />
        Add Task
      </button>
    </section>
  )
}

export default ColumnContainer;