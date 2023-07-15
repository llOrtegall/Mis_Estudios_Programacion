import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";
import React from "https://esm.sh/react@18.2.0";

const appDomElement = document.getElementById('app');

const root = ReactDOM.createRoot(appDomElement);

const h = React.createElement

const button = h('button', { "data-id": 123 }, 'Me Gusta 1')
const button1 = h('button', { "data-id": 456 }, 'Me Gusta 2')
const button2 = h('button', { "data-id": 789 }, 'Me Gusta 3')

const div = React.createElement(React.Fragment, null, [button, button1, button2])

root.render(div /* button1, button2 */)

/* const suma = (a, b) => 2 + 2
suma(2, 3, 5) */