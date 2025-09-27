import { useState } from 'react';
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  const increse = () => {
    setCount(count + 1)
  }

  const decrease = () => (count !== 0 ? setCount(count - 1):setCount(0))
  

 
 return (
  <div>
      <h1>Counter</h1>
      <button onClick={increse}>Increase</button>
      <h2>Count :- {count}</h2>
      <button onClick={decrease}>Decrease</button>
  </div>
 )
}

export default App
