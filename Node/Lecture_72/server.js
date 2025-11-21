const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("get req");
})

app.post("/", (req, res) => {
    res.send("post req");
})

app.put("/", (req, res) => {
    res.send("put req");
})

app.patch("/", (req, res) => {
    res.send("patch req");
})

app.delete("/", (req, res) => {
    res.send("delete req");
})

app.listen(3000, () => {
    console.log("Server Stared using Express");
})





// async function FetchData(){
//     let data = await fetch('http://localhost:3000/', {
//         method: "PUT"
//     })

//     let res = await data.text()
//     console.log(res)
// }

// FetchData()


