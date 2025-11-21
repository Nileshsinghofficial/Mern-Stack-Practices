const express = require("express");

const app = express()

app.get("/", (req, res) => {
    res.send("Hello world");
})

app.get('/blog', (req, res) => {
    // res.send(req.query)
    res.send(req.headers)
    console.log(req.headers.authorization)
    console.log(JSON.parse(req.headers.name))
})

app.post('/blog', (req, res) => {
    res.send("Hello ji post request")
})

app.put('/blog/:id', (req, res) => {
    res.send(req.params)
    // res.send(alert("Conform"))
    console.log(req.headers)
    console.log(req.headers.name)
    console.log(JSON.parse(req.headers.name))
})

app.listen(3000,() => {
    console.log("App are runing...")
})
