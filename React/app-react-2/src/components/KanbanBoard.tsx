import { IntColumn } from "../types/types"
import PlusIcon from "./icons/PlusIcon"
import { useState } from "react"

function KanbanBoard() {
  const [columns, setColumns] = useState<IntColumn[]>([])

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

  return (
    <section className="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-[40px]">

      <div className="m-auto flex gap-4">
        <div className="flex gap-4">
          {columns.map((column) => {
            return (
              <section key={column.id} className="">
                <article>{column.title}</article>
              </section>
            )

          })}
        </div>
        <button className="flex items-center justify-center gap-4 h-[60px] w-[350px] min-w-[350px] cursor-pointer rounded-lg bg-slate-800 border-2 border-slate-900 ring-rose-500 hover:ring-2" onClick={() => createNewColumn()}>
          <PlusIcon />
          <span>Add Colum</span>
        </button>
      </div>

    </section>
  )
}

export default KanbanBoard