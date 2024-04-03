import { useSortable } from "@dnd-kit/sortable";
import { Id, IntColumn } from "../types/types";
import TrashIcon from "./icons/TrashIcons";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

interface Props {
  column: IntColumn
  deleteColumn: (id: Id) => void
  updateColumn: (id: Id, title: string) => void
}

function ColumnContainer(props: Props) {
  const [editMode, setEditMode] = useState(false)
  const { column, deleteColumn, updateColumn } = props;

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
    <section ref={setNodeRef} style={style}
      className="bg-slate-900 w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col p-2">
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
      <article className="flex flex-grow">Content</article>
      <footer>Footer</footer>
    </section>
  )
}

export default ColumnContainer;