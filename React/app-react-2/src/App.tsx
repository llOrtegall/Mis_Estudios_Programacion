import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { useState } from "react";
import Item from "./Item";

const App = () => {
  const [items, setItems] = useState([
    { name: 'Item 1', id: 1 },
    { name: 'Item 2', id: 2 },
    { name: 'Item 3', id: 3 },
  ])

  // TODO: Similar al onChange
  const handleDragEnd = (ev) => {
    const {active, over} = ev

    // console.log('active', active.id)
    // console.log('over', over.id)

    const oldIndex = items.findIndex(item => item.id === active.id)
    const newIndex = items.findIndex(item => item.id === over.id)

    // console.log('oldIndex', oldIndex);
    // console.log('newIndex', newIndex);

    const newOrder = arrayMove(items, oldIndex, newIndex)
    // console.log('newOrder', newOrder)
    setItems(newOrder)
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <h1 className="text-2xl font-semibold"> Items List</h1>
      <SortableContext items={items}
        strategy={verticalListSortingStrategy}>
          <div className="flex justify-around"><h1>ID:</h1><p>Nombre:</p></div>
          {
            items.map(item => <Item item={item} key={item.id}/>)
          }
      </SortableContext>
    </DndContext>
  )
}

export default App;