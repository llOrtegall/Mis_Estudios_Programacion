import { useSortable } from "@dnd-kit/sortable";
import { Id, IntColumn } from "../types/types";
import TrashIcon from "./icons/TrashIcons";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  column: IntColumn
  deleteColumn: (id: Id) => void
}

function ColumnContainer(props: Props) {
  const { column, deleteColumn } = props;

  const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({ id: column.id, data: { type: "Column", column } })

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
      <div {...attributes} {...listeners}
        className="flex items-center justify-between text-base h-[60px] cursor-grab rounded-md rounded-b-none p-3 font-semibold bg-slate-700">
        <article className="flex justify-center items-center bg-slate-950 px-2 py-1 text-sm rounded-lg">0</article>
        <h3>{column.title}</h3>
        <button className="hover:text-red-500" onClick={() => deleteColumn(column.id)}><TrashIcon /></button>
      </div>
      <article className="flex flex-grow">Content</article>
      <footer>Footer</footer>
    </section>
  )
}

export default ColumnContainer;