import { useState } from 'react'
import './App.css'
import AllCards from './component/AllCards'
import { data } from './utils/data';




function App() {

   const [val, setVal] = useState('')
   const [filterData, setFilterData] = useState(data)


   function filterHandler() {
      let res = data.filter(item => (
         item.title.toLowerCase().includes(val.toLowerCase())
         // item.title.toLowerCase() === val.toLowerCase()
      ))
      setFilterData(res)
   }

  return (
     <div>
         <h1>Raste ka Mal Saste Mai</h1>
         <div>
            <input type="text"  id="srch" placeholder="kya khoj rahe ho....?" onChange={ function (e){
               setVal(e.target.value)
            }}/>
            {/* <input type="text"  id="srch" placeholder="kya khoj rahe ho....?" onChange={(e) => setVal((e.target.value))}/> */}
            <button onClick={filterHandler} id="srch">Search</button>
         </div>
         <AllCards data={filterData}/>
     </div>
  )
}

export default App
