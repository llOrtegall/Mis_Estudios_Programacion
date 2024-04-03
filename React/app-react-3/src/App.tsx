import { useState } from "react"

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
    id: 1,
    nombre: 'Bodega B',
    direccion: 'Calle 2',
    telefono: '51231451',
    items: [{ id: 4, nombre: 'item 4', precio: 1000 }, { id: 5, nombre: 'item 5', precio: 2000 }, { id: 6, nombre: 'item 6', precio: 3000 }]
  })

  return (
    <section className="flex h-screen items-center justify-center gap-4">
      <RenderBodega {...bodega} />
      <RenderBodega {...bodega2} />
    </section>
  )
}

function RenderBodega(bodg: Bodega) {
  return (
    <div className="bg-slate-900 p-12 rounded-lg flex flex-col gap-2">
      <h2 className="text-lg font-bold text-center pb-1 border-b-2">{bodg.nombre}</h2>
      <article className="flex gap-2 p-2 border rounded-md">
        <p><span className="font-bold">Dirreción: </span> {bodg.direccion}</p>
        <p><span className="font-bold">Telefono: </span>{bodg.telefono}</p>
      </article>
      <article>
        {bodg.items.map(i => <RenderItem key={i.id} item={i} />)}
      </article>
    </div>
  )
}

function RenderItem({ item }: { item: Item }) {
  return (
    <section className="flex justify-around my-4 py-2 border rounded-lg bg-sky-200 text-black">
      <p><span className="font-bold">Nombre: </span>{item.nombre}</p>
      <p><span className="font-bold">Precio: </span>{item.precio}</p>
    </section>
  )
}
