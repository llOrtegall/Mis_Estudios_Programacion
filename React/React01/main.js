import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"
import React from "https://esm.sh/react@18.2.0"

const AppDomElement = document.getElementById('App')

const root = ReactDOM.createRoot(AppDomElement)
const button = React.createElement('button', null, 'Me Gusta')
root.render(button)