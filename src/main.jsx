import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'


const router = createHashRouter([{path: "/*", element: <App />}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

//https://www.youtube.com/watch?v=2YYuuA7kwz8
