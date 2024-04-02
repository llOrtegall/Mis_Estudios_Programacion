import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface ItemProps {
  item: { id: number, name: string }
}

function Item({ item }: ItemProps): JSX.Element {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: item.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <section
      {...attributes} {...listeners} ref={setNodeRef} style={style}
      className="flex gap-2 p-2 border rounded-md justify-around mb-2 bg-gray-500 mx-2">
      <p>{item.id}</p>
      <h1>{item.name}</h1>
    </section>
  )
}

export default Item;