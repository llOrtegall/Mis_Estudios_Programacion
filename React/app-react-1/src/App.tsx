import { DndContext, closestCenter } from '@dnd-kit/core';
import { useState } from 'react';

function App() {
  const [people, setPeople] = useState([
    { id: '1', name: 'John' },
    { id: '2', name: 'Paul' },
    { id: '3', name: 'George' },
    { id: '4', name: 'Ringo' },
    { id: '5', name: 'Brian' },
    { id: '6', name: 'George Martin' },
  ]);

  const handleDragEnd = (e) => { }

  return (
    <DndContext collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}>
      <h1 className='text-center'>User List</h1>
    

    </DndContext>
  )
}

export default App;