const express = require('express')
const app = express()
const fs = require('fs')

app.use(express.json())
// app.use(express.urlencoded({extended: true}))

function fun(req, res, next){
    // console.log(req.body)
    req.nilesh = "singh"
    console.log("Hello");
    next()
}
function fun2(req, res, next){
    console.log("hello2");
    // console.log(req.body)
    next() 
}

app.use(fun)
// app.use(fun2)

function logDetails(req, res, next){
    let data = Date.now() + " " + req.method
    fs.appendFile(__dirname + "/logFile.txt", `${data}\n` ,(err) => {
        // if (err) throw err;
        // console.log('file have been saved')
        next()
    })
}

app.get('/', (req, res) =>{
    return res.status(200).json({message : "hello ji"})
});

app.post('/blog',logDetails, (req, res) => {
    // console.log(req.body)
    console.log(req.nilesh)
    return res.status(200).json({message: "Post method"})
}) 

app.use((req, res, next) =>{
    res.status(404).send("path error")
})

app.use((err, req, res, next) => {
    console.error("err.stack");
    res.status(500).send("trashed occured")
})

app.listen(3000, () => {
    console.log('Server started listing...');
})