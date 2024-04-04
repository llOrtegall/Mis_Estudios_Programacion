import { SortableContext } from "@dnd-kit/sortable"
import { Bodega } from "../types/types"
import { useMemo } from "react"
import RenderItem from "./Items"

function RenderBodega({ bodg }: { bodg: Bodega }) {
  const itemsIds = useMemo(() => bodg.items.map(i => i.id), [bodg.items])

  return (
    <div className="bg-slate-900 p-12 rounded-lg flex flex-col gap-2">
      <h2 className="text-lg font-bold text-center pb-1 border-b-2">{bodg.nombre}</h2>
      <article className="flex gap-2 p-2 border rounded-md">
        <p><span className="font-bold">Dirreción: </span> {bodg.direccion}</p>
        <p><span className="font-bold">Telefono: </span>{bodg.telefono}</p>
      </article>
      <article >
        <SortableContext items={itemsIds}>
          {bodg.items.map(i => <RenderItem key={i.id} item={i} />)}
        </SortableContext>
      </article>
    </div>
  )
}

export default RenderBodega