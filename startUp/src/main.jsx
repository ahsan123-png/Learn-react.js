import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

let root =createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>)