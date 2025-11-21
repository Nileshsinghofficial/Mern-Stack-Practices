import { useState } from 'react'
 
import './App.css'

function App() {
  const [userData, setUserData] = useState({name:'', email: '', password: ''});

  async function handleSubmit(){
    // alert(JSON.stringify(userData))
    let data = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData),
    });

    let res = await data.json();
    // console.log(res)
    alert(res.message)
  }

  return (
    <div>
      <h1>Sign up</h1>
      <div>
        <input onChange={(e) => setUserData((prev) => ({...prev, name: e.target.value}))} type="text" placeholder='name' name='' id='' />
        <br /> <br />
        <input onChange={(e) => setUserData((prev) => ({...prev, email: e.target.value}))} type="email" placeholder='email' name='' id='' />
        <br /> <br />
        <input onChange={(e) => setUserData((prev) => ({...prev, password: e.target.value}))} type="text" placeholder='password' name='' id='' />
      </div>
      <br /><br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default App
