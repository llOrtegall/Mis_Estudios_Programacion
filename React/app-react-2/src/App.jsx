import { SortableContext, useSortable, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable'
import { DndContext, closestCenter } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import { useState } from 'react'

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', list: 'items' },
    { id: 2, name: 'Item 2', list: 'items' },
    { id: 3, name: 'Item 3', list: 'items' }
  ])

  const [items2] = useState([
    { id: 4, name: 'Item 4', list: 'items2' },
    { id: 5, name: 'Item 5', list: 'items2' },
    { id: 6, name: 'Item 6', list: 'items2' }
  ])

  const handleDragEnd = (ev) => {
    const { active, over } = ev

    setItems((items) => {
      const oldIndex = items.findIndex(item => item.id === active.id)
      const newIndex = items.findIndex(item => item.id === over.id)

      return arrayMove(items, oldIndex, newIndex)
    })
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>

      <section className='flex w-full gap-2 px-2'>

        <div className='w-full flex flex-col'>
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            {items.map(item => (<Item key={item.id} item={item} />))}
          </SortableContext>
        </div>

        <div className='w-full flex flex-col'>
          <SortableContext items={items2} strategy={verticalListSortingStrategy}>
            {items2.map(item => (<Item key={item.id} item={item} />))}
          </SortableContext>
        </div>

      </section>

    </DndContext>
  )
}

export default App

function Item({ item }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: item.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div {...attributes} {...listeners} ref={setNodeRef} style={style}
      className='bg-slate-300 my-2 rounded-md p-4'>
      {item.name}
    </div>
  )
}