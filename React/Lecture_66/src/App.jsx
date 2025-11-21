
import { useMemo, useState } from 'react'
import './App.css'
import React from 'react';

function App() {
  const [count, setCount] = useState(0);

  const CalsumEven = useMemo(function () {
    console.log("inside fun")
    let c = 0;
    for (let i = 0; i <= 10; i = i + 2){
      c += i;
    }
    return c;

  }, []);

  console.log(CalsumEven)
 

  return (
    <div>
      <h1>App - hello</h1>
      <p>{count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Count</button>
      <Child   />
    </div>
  )
}
const Child = React.memo(() => {
  console.log("child")
  return <h3>Child is App </h3>
});

export default App
