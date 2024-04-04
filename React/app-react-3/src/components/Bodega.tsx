import { useDroppable } from "@dnd-kit/core";
import { Bodega } from "../types/types"
import RenderItem from "./Items"

function RenderBodega({ bodega }: { bodega: Bodega }) {

  const { isOver, setNodeRef } = useDroppable({
    id: bodega.id, data: { type: 'bodega', bodega }
  });

  return (
    <div className="bg-slate-900 p-12 rounded-lg flex flex-col gap-2">
      <h2 className="text-lg font-bold text-center pb-1 border-b-2">{bodega.nombre}</h2>
      <article className="flex gap-2 p-2 border rounded-md">
        <p><span className="font-bold">Dirreción: </span> {bodega.direccion}</p>
        <p><span className="font-bold">Telefono: </span>{bodega.telefono}</p>
      </article>
      <article className="max-h-[300px] min-h-[300px] overflow-y-auto">
        {bodega.items.map(i => <RenderItem key={i.id} item={i} bodegaId={bodega.id} />)}
      </article>

      <section className={`text-black w-full py-4 px-2 rounded-md ${isOver ? 'bg-green-400' : 'bg-green-600'}`} ref={setNodeRef}>
        <p className="text-white flex justify-center opacity-80 gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <span>Agregar Item</span>
        </p>
      </section>
    </div>
  )
}

export default RenderBodega