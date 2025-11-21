 import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, restAll } from './utility/counterSlice'

function App() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.counter)
  console.log(data)
  function handleInc()  {
    dispatch(increment("Nilesh"))
  }

  function handleDec(){
    dispatch(decrement("Nilesh"))
  }
  function handleRestAll(){
    dispatch(restAll("Nilesh"))
  }

  return (
    <div>
      <h1>Hello</h1>
      <h2>{data.value}</h2>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
      <button onClick={handleRestAll}>Reset</button>
    </div>
  )
}

export default App
