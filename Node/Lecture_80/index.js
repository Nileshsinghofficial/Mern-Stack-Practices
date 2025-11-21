const express = require('express');
const mongoose = require('mongoose')
const app = express()

app.use(express.json());

async function connectDb() {
    try {
        await mongoose.connect('mongodb://localhost:27017/myfirstDb');
        console.log("Db Connected successfully ✅")
    } catch (error) {
        console.log(error)
    }
}

const userSchema = new mongoose.Schema({
    name : String,
    email: {
        type: String,
        unique: true,
    },
    password: String
})

const User = mongoose.model('User', userSchema)

async function createUsers(){
    let newUser = await User.create({
        email: 'nigamsingh888@gmail.com',
        password: 'nigam1234',
        name: 'nilesh singh'
    })

    // let newUser = new User({
    //     email: "nigamsingh8888@gmail.com",
    //     password: "nigamsingh",
    //     name: "Nilesh Singh"
    // })

    // await newUser.save()
    // const user = await User.find()

    console.log(newUser)
}

app.get('/', (req, res) => {
    return res.status(200).json({
        message: "Hello ji"
    })
})

app.listen('3000', () => {
    console.log("Server Started ✅")
    connectDb();
    createUsers()
})
