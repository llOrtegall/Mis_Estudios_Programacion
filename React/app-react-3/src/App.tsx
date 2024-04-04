import { DndContext, DragEndEvent, DragOverlay, DragStartEvent, PointerSensor, useSensor, useSensors } from "@dnd-kit/core"
import { SortableContext } from "@dnd-kit/sortable"
import RenderBodega from "./components/Bodega"
import { Bodega, Item } from "./types/types"
import RenderItem from "./components/Items"
import { createPortal } from "react-dom"
import { useState } from "react"

export default function App() {
  const [bodega, setBodega] = useState<Bodega>({
    id: '73123n123bb41ub4i1bi1241i24ub',
    nombre: 'Bodega A',
    direccion: 'Calle 1',
    telefono: '123456789',
    items: [{ id: 1, nombre: 'item 1', precio: 1000 }, { id: 2, nombre: 'item 2', precio: 2000 }, { id: 3, nombre: 'item 3', precio: 3000 }]
  })

  const [bodega2, setBodega2] = useState<Bodega>({
    id: 'angr98h9fh34h7934rh3984r9348rh',
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

  const [ItemActivoId, setItemActivoId] = useState<Item | null>(null)

  function handleDragStart(ev: DragStartEvent) {
    if (ev.active.data.current?.type === 'item') {
      setItemActivoId(ev.active.data.current?.item)
      return
    }
  }

  function handleDragEnd(ev: DragEndEvent) {
    const {active, over} = ev

    const ItemActivoId = active.data.current?.bodegaOrigen
    const BodegaOverId = over?.data.current?.bodega.id

    if(ItemActivoId === BodegaOverId){
      console.log('Mismo lugar');
      return
    }

    const itemIdMov = active.id


    const itemInBodega1 = bodega.items.find(i => i.id == itemIdMov)    
    if (itemInBodega1) {
      setBodega(prev => {
        const items = prev.items.filter(i => i.id != itemIdMov)
        return { ...prev, items }
      })

      setBodega2(prev => {
        const items = [...prev.items, itemInBodega1]
        return { ...prev, items }
      })
    }

    // Si el item activo está en la bodega 2
    const itemInBodega2 = bodega2.items.find(i => i.id == itemIdMov)
    if (itemInBodega2) {
      setBodega2(prev => {
        const items = prev.items.filter(i => i.id != itemIdMov)
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
          <RenderBodega bodega={bodega} />
          <RenderBodega bodega={bodega2} />
        </SortableContext>
        {
          createPortal(
            <DragOverlay>
              {
                ItemActivoId && (
                  <RenderItem item={ItemActivoId} />
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
