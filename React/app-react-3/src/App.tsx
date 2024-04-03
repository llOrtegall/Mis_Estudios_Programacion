import { DndContext, DragEndEvent, DragOverlay, DragStartEvent } from "@dnd-kit/core"
import { SortableContext, arrayMove, useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { useMemo, useState } from "react"
import { createPortal } from "react-dom"

interface Item {
  id: number
  nombre: string
  precio: number
}

interface Bodega {
  id: number
  nombre: string
  direccion: string
  telefono: string
  items: Item[]
}

export default function App() {
  const [bodega, setBodega] = useState<Bodega>({
    id: 1,
    nombre: 'Bodega A',
    direccion: 'Calle 1',
    telefono: '123456789',
    items: [{ id: 1, nombre: 'item 1', precio: 1000 }, { id: 2, nombre: 'item 2', precio: 2000 }, { id: 3, nombre: 'item 3', precio: 3000 }]
  })

  const [bodega2, setBodega2] = useState<Bodega>({
    id: 2,
    nombre: 'Bodega B',
    direccion: 'Calle 2',
    telefono: '51231451',
    items: [{ id: 4, nombre: 'item 4', precio: 1000 }, { id: 5, nombre: 'item 5', precio: 2000 }, { id: 6, nombre: 'item 6', precio: 3000 }]
  })

  const bodegasIds = [bodega.id, bodega2.id]

  const [activeItem, setActiveItem] = useState<Item | null>(null)

  function handleDragStart(ev: DragStartEvent) {
    if (ev.active.data.current?.type === 'item') {
      setActiveItem(ev.active.data.current?.item)
      return
    }
  }

  function handleDragEnd(ev: DragEndEvent) {
    setActiveItem(null)
    const { active, over } = ev

    if (!over) return

    const activeItem = active.id
    const overItem = over?.id

    if (activeItem === overItem) return

    if (activeItem === bodega.items.find(i => i.id === activeItem)?.id) {
      setBodega(prev => {
        const activeIndex = prev.items.findIndex(i => i.id === activeItem)
        const overIndex = prev.items.findIndex(i => i.id === overItem)
        const items = arrayMove(prev.items, activeIndex, overIndex)
        return { ...prev, items }
      })
    }

    if (activeItem === bodega2.items.find(i => i.id === activeItem)?.id) {
      setBodega2(prev => {
        const activeIndex = prev.items.findIndex(i => i.id === activeItem)
        const overIndex = prev.items.findIndex(i => i.id === overItem)
        const items = arrayMove(prev.items, activeIndex, overIndex)
        return { ...prev, items }
      })
    }
  }


  return (
    <section className="flex h-screen items-center justify-center gap-4">
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <SortableContext items={bodegasIds}>
          <RenderBodega bodg={bodega} />
          <RenderBodega bodg={bodega2} />
        </SortableContext>
        {
          createPortal(
            <DragOverlay>
              {
                activeItem && (
                  <RenderItem item={activeItem} />
                )
              }
            </DragOverlay>,
            document.body
          )
        }
      </DndContext>
    </section>
  )
}

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
