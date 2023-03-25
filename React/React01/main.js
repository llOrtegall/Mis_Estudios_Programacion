import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"
import React from "https://esm.sh/react@18.2.0"

const AppDomElement = document.getElementById('App')

const root = ReactDOM.createRoot(AppDomElement)

const h = React.createElement

const button1 = h('button', { "data-id": 123 }, 'Me Gusta')
const button2 = h('button', { "data-id": 456 }, 'Me Gusta')
const button3 = h('button', { "data-id": 789 }, 'Me Gusta')

const app = React.createElement(React.Fragment, null, [button1, button2, button3])

/* JSX
  < React.Fragment >
    <button data-id="123">Button</button>
    <button data-id="456">Button</button>
    <button data-id="789">Button</button>
  </ React.Fragment >
*/
root.render(app)