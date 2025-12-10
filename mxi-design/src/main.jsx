import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Products from './assets/components/Products/Products.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App />
  </StrictMode>,
)
