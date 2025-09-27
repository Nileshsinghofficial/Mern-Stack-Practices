
import { useState } from 'react';
import './App.css'

function App() {
  const [data, setdata] = useState({email: "", password : ""})
  

  function preventFun(e){
  
    e.preventDefault();
    console.log(data);
    
  }

  function handleForm(e){
    const {name, value} = e.target
    setdata((prevData) => ({...prevData, [name]:  value}))
  }
    
 
  

  return (
    <form action="">
      <input name='email' type="text" placeholder='Enter a Email' onChange={handleForm} value={data.email}/>
      <br />
      <br />
      <input name='password' type="password" placeholder='password' onChange={handleForm} value={data.password}/>
      <br />
      <br /> 
      <button onClick={preventFun}>Login</button>
       
    </form>
       
  )
}

export default App
