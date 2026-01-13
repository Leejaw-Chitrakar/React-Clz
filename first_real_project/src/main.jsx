import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './home.jsx'
import {Component3} from './home.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Home />
    <Component3 />
  </StrictMode>,
)
