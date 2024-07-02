import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Contador } from './Contador/Contador.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Contador limit={10} />
  </React.StrictMode>,
)
