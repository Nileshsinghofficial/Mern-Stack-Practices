const express = require('express');
const app = express();
const path = require("path");
const fs = require('fs');
const { cwd } = require('process');



function dynamicRoute(req, res , route) {
    fs.readFile(__dirname + "/index.html", {encoding:'utf-8'}, (err, data) => {
        if(err){
            console.error("Error", err.message);
        } else {
            data = data.replace("[Path]", route == '' ? "Home" : route);
            res.end(data)
        }
    })
}




app.get(["", '/about', '/contact'], (req, res) => {
    // res.send({message: "Hello find Get ?"})
    // res.json({message: "Hello find Get ?"})
    // res.sendFile(path.join(__dirname , 'index.html'))
    // dynamicRoute(req, res, '')

    let path = req.url.split('/')[1].toUpperCase()
    fs.readFile(__dirname + '/index.html', "utf-8", (err, data ) => {
        if (err) {
            console.error("Error occured", err.message);
        } else {
            data = data.replace("[Path]", path == '' ? "Home" : path)
            res.send(data)
        }
    })

})


// app.get("/about", (req, res) => {
//     dynamicRoute(req, res, 'about')
// })

// app.get("/contact", (req, res) => {
//     dynamicRoute(req, res, 'contact')
// })


app.post("/", (req, res) =>{
    res.send("Got a Post Request")
})

app.put("/user", (req , res) => {
    res.send("God a put request at /user")
})


app.listen(3000, () => {
    console.log("Server Started ...")
})

