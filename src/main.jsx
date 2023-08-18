import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <div className='content'>
      <h1 className='header'>To-Do List</h1>
      <App />
    </div>
  </React.StrictMode>,
)
