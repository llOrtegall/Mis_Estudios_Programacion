import { Bodega, Item } from "../types/Bodega";
import ItemComponent from "./ItemComponent";

interface Props {
  bodega: Bodega
  items: Item[]
}

function BodegaContainer({ bodega, items }: Props) {

  return (
    <section className="bg-slate-900 w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col p-2">
      <div className="flex items-center justify-between text-base h-[60px] cursor-grab rounded-md rounded-b-none p-3 font-semibold bg-slate-700">
        <p>{bodega.name}</p>
      </div>
      <div className="flex flex-col flex-grow overflow-x-hidden overflow-y-auto">
        {
          items.map( i => {
            return <ItemComponent key={i.id} item={i} />
          })
        }
      </div>
    </section>
  )
}

export default BodegaContainer;