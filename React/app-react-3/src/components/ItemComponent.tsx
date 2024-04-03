import { Item } from "../types/Bodega";

interface Props {
  item: Item
}

function ItemComponent({ item }: Props): JSX.Element {
  return (
    <article>
      <h1 className="gap-4 p-2 bg-slate-800 my-2 rounded-md h-[50px] min-h-[50px] items-center flex text-left hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab relative">
        {item.id}
        {item.nombre}
      </h1>
    </article>
  )
}

export default ItemComponent;