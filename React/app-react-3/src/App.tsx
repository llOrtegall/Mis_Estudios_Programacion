import { DndContext, DragEndEvent, DragOverlay, DragStartEvent, PointerSensor, useSensor, useSensors } from "@dnd-kit/core"
import { SortableContext } from "@dnd-kit/sortable"
import { useState } from "react"
import { createPortal } from "react-dom"
import { Bodega, Item } from "./types/types"
import RenderBodega from "./components/Bodega"
import RenderItem from "./components/Items"



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

  const sensors = useSensors(useSensor(PointerSensor, {
    activationConstraint: {
      distance: 10,
    }
  })
  )

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
  
    // Si el item activo está en la bodega 1
    const itemInBodega1 = bodega.items.find(i => i.id === activeItem)
    if (itemInBodega1) {
      setBodega(prev => {
        const items = prev.items.filter(i => i.id !== activeItem)
        return { ...prev, items }
      })
  
      setBodega2(prev => {
        const items = [...prev.items, itemInBodega1]
        return { ...prev, items }
      })
    }
  
    // Si el item activo está en la bodega 2
    const itemInBodega2 = bodega2.items.find(i => i.id === activeItem)
    if (itemInBodega2) {
      setBodega2(prev => {
        const items = prev.items.filter(i => i.id !== activeItem)
        return { ...prev, items }
      })
  
      setBodega(prev => {
        const items = [...prev.items, itemInBodega2]
        return { ...prev, items }
      })
    }
  }

  return (
    <section className="flex h-screen items-center justify-center gap-4">
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd} sensors={sensors}>
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
