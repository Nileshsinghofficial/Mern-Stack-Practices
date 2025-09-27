import { useRef } from "react";

function Uncontrolled(){

let emailref = useRef()
let passRef = useRef()


function preventFun(e){
    console.log(e.target)
    e.preventDefault();
    console.log({email : emailref.current.value, password : passRef.current.value});
 
  }

  return (
    <>
        <h1 >Uncondroled</h1>

        <form action="">
        <input type="text" placeholder='Enter a Email' ref={emailref}   />
        <br />
        <br />
        <input type="password" placeholder='password' ref={passRef} />
        <br />
        <br /> 
        <button onClick={preventFun}>Login</button>
        
        </form>
    </>
    
       
  )
}
export default Uncontrolled