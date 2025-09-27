import { useEffect, useState, useContext } from 'react'
import './App.css'
import userContext from './utils/Context'

function App() {

  let [username, setUsername] = useState('')

  useEffect(() => {
    let data = "Nilesh Singh"
    setUsername(data)
  }, [])
  
  return (
    <div style={{border:"2px solid red", padding: "20px"}}>
    <h1>App</h1>
    <GrandParent name={username} />
    </div>
  )
} 

export default App 


function GrandParent({name}){
  return (
    <div style={{border:"2px solid green", padding: "20px"}}> 
      <h1>GrandParent</h1>
      <Parent username={name} />
    </div>
  )
}

function Parent({username}){
  return (
    <div style={{border:"2px solid black", padding: "20px"}}>
      <h1>Parent</h1>
      <Child name={username} />
    </div>
  )
}


function Child({name}){
  let na = useContext(userContext)
  console.log(na)
  return (
    <div style={{border:"2px solid blue", padding: "20px"}}>
      <h1>Child</h1>
      <p>Name: {name}</p>
      
    </div>
  )
}
