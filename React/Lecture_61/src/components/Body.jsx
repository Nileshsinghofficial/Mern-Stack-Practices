import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Body() {
  const [data, setData] = useState({email:"", password:""})

  let navagation = useNavigate()

  let defaultData = {
    email:"nigamsingh888@gmail.com",
    password:"123456"
  }

  function handleSubmit(e){
    e.preventDefault()
    let {email, password} = data;

    if (password == defaultData.password && email == defaultData.email ) {
      return navagation("about")
    }
  }


  return (
    <div className=" w-screen flex flex-col justify-center items-center">
      <section className="text-2xl text-center mt-30 mb-6">
        <h1>Body </h1>
      </section>
      <form>
        <input type="text" name="" id="" placeholder="email..." onChange={(e) => setData((pre) => ({...pre,email:e.target.value}))} />
        <br />
        <input type="password" name="" id="" placeholder="password..." onChange={(e) => setData((prev) => ({...prev, password:e.target.value}))} />
        <br />
        <button type="submit" onClick={handleSubmit}>submit</button>
      </form>
    </div>
  );

}


export default Body;
