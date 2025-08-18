import { useEffect, useState } from "react"

function FollowMouse() {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handlePointerMove = (ev: MouseEvent) => {
      const { clientX, clientY } = ev
      setPosition({ x: clientX, y: clientY })
    }

    if (enable) {
      window.addEventListener('mousemove', handlePointerMove)
    }

    return () => {
      window.removeEventListener('mousemove', handlePointerMove)
    } // cuando se ejecuta esto
  }, [enable])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        border: '2px solid #000',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`

      }}></div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600"
        onClick={() => setEnable(!enable)}>
        {enable ? 'Desactivar' : 'Activar'}
        Seguir puntero
      </button>
    </>
  )
}

function App() {
  const [showComponent, setShowComponent] = useState(true)

  return (
    <main className="w-full h-screen relative overflow-hidden flex flex-col items-center justify-center gap-4">
      {showComponent && <FollowMouse />}
      <button
        className="px-4 py-2 bg-yellow-500 text-black rounded cursor-pointer hover:bg-yellow-600"
        onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? 'Ocultar' : 'Mostrar'}
        Componente
      </button>
    </main>
  )
}

export default App
