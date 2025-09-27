

import './App.css'
import AllCards from './component/AllCards'
import { useEffect, useState } from "react"

function App() {
  const [val, setVal] = useState('')
  const [filterVal, setFilterVal] = useState("")
  const [initialVal, initialFilterVal] = useState("")
  
  async function fetchProduct() {
    let res = await fetch('https://dummyjson.com/products');
    let json = await res.json()
    setFilterVal(json.products)
    initialFilterVal(json.products)
  }


  useEffect(()=>{
    fetchProduct()
  }, [])


  function FilterHandle() {
    let res = initialVal.filter(filterItem => (
      filterItem.title.toLowerCase().includes(val.toLowerCase())
    ))
    setFilterVal(res)
    
  }

  function handleKeyDown(e){
    if(e.key === "Enter"){
      FilterHandle()
    }
  }


  return (
     <div className="bg-gray-200 text-center min-h-screen max-w-[100vw] overflow-x-hidden flex flex-col items-center">
      <h1 className="text-3xl pt-10 md:text-5xl">Raste ka mal saste me</h1>
      <div className="mt-3" >
        <input className=" p-3  rounded-tl-xl rounded-bl-xl bg-white outline-none " type="text" placeholder='kya khoj rahe ho ...?' onChange={function (e) {
          setVal(e.target.value)
        }} onKeyDown={handleKeyDown}/>
        <button className=" p-3 px-6 rounded-tr-xl rounded-br-xl bg-amber-400" onClick={FilterHandle}>Search</button>
      </div>

      {filterVal.length <= 0 ? <h1 className="text-5xl mt-10 text-violet-800">No item avalaible </h1> : <AllCards data={filterVal} />}

     </div>
  )
}

export default App
