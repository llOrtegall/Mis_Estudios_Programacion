import { useDroppable } from "@dnd-kit/core";
import { Bodega } from "../types/types"
import RenderItem from "./Items"

function RenderBodega({ bodega }: { bodega: Bodega }) {

  const {isOver, setNodeRef} = useDroppable({
    id: bodega.id, data : {type: 'bodega', bodega}
  });

  const style = {
    backgroundColor: isOver ? 'lightgreen' : 'green',
  };

  return (
    <div className="bg-slate-900 p-12 rounded-lg flex flex-col gap-2">
      <h2 className="text-lg font-bold text-center pb-1 border-b-2">{bodega.nombre}</h2>
      <article className="flex gap-2 p-2 border rounded-md">
        <p><span className="font-bold">Dirreción: </span> {bodega.direccion}</p>
        <p><span className="font-bold">Telefono: </span>{bodega.telefono}</p>
      </article>
      <article >
        {bodega.items.map(i => <RenderItem key={i.id} item={i} bodegaId={bodega.id}/>)}
      </article>

      <section ref={setNodeRef} style={style} className="bg-green-300 text-black p-4 rounded-md">
        <p className="opacity-70 text-center text-xs">Arratre Aquí El Item Que Se Desea Agregar</p>
      </section>
    </div>
  )
}

export default RenderBodega