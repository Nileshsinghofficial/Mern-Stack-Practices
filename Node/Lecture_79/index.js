const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

async function connectDb(){
    try {
        await mongoose.connect('mongodb://localhost:27017/myfirstDb')
        console.log("Db Connect Successfully!")
    } catch (error) {
        console.log(error)
    }
}

app.get('/', (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Hello dear all one"
    })
})

app.listen(3000, () => {
    console.log("Server Started!")
    connectDb();
})