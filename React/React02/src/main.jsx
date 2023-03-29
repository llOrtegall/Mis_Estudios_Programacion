import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const Buttom = ({ text }) => {
  return (
    <button>{text}</button>
  )
}

root.render(
  <React.Fragment>
    <Buttom text='button 1' />
    <Buttom text='button 2' />
    <Buttom text='button 3' />
  </React.Fragment>
)
