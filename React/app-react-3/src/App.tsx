import { useMemo, useState } from "react"
import { Bodega, Item } from "./types/Bodega"
import { DndContext } from "@dnd-kit/core"
import { SortableContext } from "@dnd-kit/sortable"
import BodegaContainer from "./components/BodegaContainer"

function App() {
  const [bodega] = useState<Bodega[]>([
    { id: 1, name: "Bodega 1", items: [{ id: 1, nombre: "Item 1" }, { id: 2, nombre: "Item 2" }] },
    { id: 2, name: "Bodega 2", items: [{ id: 3, nombre: "Item 3" }, { id: 4, nombre: "Item 4" }] },
  ])
  const InitialItems = bodega.map(b => b.items).flat();

  const bodegaIds = useMemo(() => bodega.map((b) => b.id), [bodega])

  const [items] = useState<Item[]>(InitialItems)
  
  return (
    <section className="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-[40px]">
      <DndContext>
        <article className="m-auto flex gap-4">
          <SortableContext items={bodegaIds}>
            {
              bodega.map( b => <BodegaContainer key={b.id} bodega={b} items={items}/> )
            }
          </SortableContext>
        </article>
      </DndContext>
    </section>
  )
}

export default App
