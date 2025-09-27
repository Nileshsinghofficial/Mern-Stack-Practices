import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// console.log(App)

let shoeData = [
  { id: 1, title: 'Addidas', price: 799 },
  { id: 2, title: 'Lakhani', price: 199 },
  { id: 3, title: 'Goldstar', price: 499 },
  { id: 4, title: 'Bahadur', price: 149 }
]


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App shoeDat={shoeData}/>
  </StrictMode>,
)

