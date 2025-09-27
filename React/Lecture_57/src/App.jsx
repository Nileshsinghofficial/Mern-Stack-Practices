import { useState } from 'react'
import './App.css'
import Products from './product';


 

function App() {
const [data, setData] = useState(0);

    function handleIncrease(){
      setData(count => count + 1)
    }
  return (

    <div>
        <p>Count:- {data}</p>
        <button onClick={handleIncrease}>Increase</button>
        <Products />
    </div>
  )
}

export function Talls(){
  return <h1 style={{backgroundColor:'red',marginTop:"60px"}}>Hellow world</h1>;
}

export default App
