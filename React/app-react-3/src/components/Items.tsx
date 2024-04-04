import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities" 
import { Item } from "../types/types"

function RenderItem({ item }: { item: Item }) {

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: item.id, data: { type: 'item', item } })

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  }

  if (isDragging) {
    return (
      <div ref={setNodeRef} style={style}
        className="flex w-[300px] h-[42px] justify-around my-4 py-2 border rounded-lg bg-sky-200 text-black cursor-grab opacity-30" />
    )
  }

  return (
    <section ref={setNodeRef} {...attributes} {...listeners} style={style}
      className="flex w-[300px] h-[42px] justify-around my-4 py-2 border rounded-lg bg-sky-200 text-black">
      <p><span className="font-bold">Nombre: </span>{item.nombre}</p>
      <p><span className="font-bold">Precio: </span>{item.precio}</p>
    </section>
  )
}

export default RenderItem