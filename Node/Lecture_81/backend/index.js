const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dbConnect = require('./config/dbConnect');
const User = require('./models/userSchema')

const app = express()

app.use(express.json())
app.use(cors())




app.post('/users', async (req, res) => {
    const {name, password, email} = req.body
    try {

        if(!name){
            return res.status(400).json({
                success: false,
                message: 'Please fill name fields'
            })
        }
        if(!password){
            return res.status(400).json({
                success: false,
                message: 'Please fill passwords fields'
            })
        }
        if(!email){
            return res.status(400).json({
                success: false,
                message: 'Please fill emails fields'
            })
        }

        const checkForexitingUser = await User.findOne({email})

        if(checkForexitingUser){
            return res.status(400).json({
                success: false,
                message: "User already registered with this email",
            })
        }

        const newUser = await User.create({
            name,
            email,
            password,
        })
 
        return res.status(200).json({
            success: true,
            message: "User created successfuly",
            newUser
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Please try again",
            error: error.message
            
        })
    }
})

app.get('/users',async (req, res) => {
    try {

        const users = await User.find({})

        return res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            users
        })
        
    } catch (error) {
        return res.status(500).json({
            success : false,
            message: "Occured fetched user failed."
        })
    }
})

app.get('/users/:id', async(req,res) => {
    try {
        const id = req.params.id
        // const user = await User.findById(id)
        const user = await User.findOne({_id : id})

        if(!user){
            return res.status(200).json({
                success: false,
                message: "User not found!",
                user
            })
        }
        return res.status(200).json({
            success: true,
            message: "Successfully got Users Using user_id",
            user
        })
         
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Somthing happen we could not get users!"
        })
    }
})

app.patch('/users/:id', async(req,res) => {
    try {
        const id = req.params.id;

        const {name, password, email} = req.body;

        const updatedUser = await User.findByIdAndUpdate(id, {name, password, email}, {new : true })

 
        return res.status(200).json({
            success: true,
            message: "Successfully User updated",
            updatedUser
        })
    } catch (error) {
        return res.status(500).json({
            success: falase,
            message: "Occured failed to Update or Please try agian"
        })
    }
})

app.delete('/users/:id', async(req,res) => {
    try {
        // const indexs = users.findIndex(index => index.id == req.params.id);
        // users.splice(indexs, 1)

        const id = req.params.id

        const deleteUser = await User.findByIdAndDelete(id)
        
        if(!deleteUser){
            return res.status(200).json({
                success: false,
                message: "User not found!",
            })
        }
        
        return res.status(200).json({
            success: true,
            message: "user deleted successfully!",
            deleteUser
        })
        
    } catch (error) {
        return res.status(500).json({
            success: falase,
            message: "Occured failed to Delete or Please try agian"
        })
    }
})

// blogs route

let blogs = []

app.post('/blogs', (req, res) => {
    const {name, password, email} = req.body
    try {
        if(!name){
            return res.status(400).json({
                success: false,
                message: 'Please fill name fields'
            })
        }
        if(!password){
            return res.status(400).json({
                success: false,
                message: 'Please fill passwords fields'
            })
        }
        if(!email){
            return res.status(400).json({
                success: false,
                message: 'Please fill emails fields'
            })
        }

        blogs.push({...req.body, id: blogs.length + 1});
        return res.status(200).json({
            success: true,
            message: "User created successfuly"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Please try again"
        })
    }
})

app.get('/blogs', (req, res) => {
    try {
        return res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            blogs
        })
        
    } catch (error) {
        return res.status(500).json({
            success : false,
            message: "Occured fetched user failed."
        })
    }
})

app.get('/blogs/:id', (req,res) => {
    try {
        const user = blogs.filter(user => (user.id == req.params.id))

        if(!user.length){
            return res.status(200).json({
                success: false,
                message: "User not found!",
                user
            })
        }
        return res.status(200).json({
            success: true,
            message: "Successfully got Users Using user_id",
            user
        })
         
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Somthing happen we could not get users!"
        })
    }
})

app.patch('/blogs/:id',(req,res) => {
    try {
        const indexs = blogs.findIndex(index => index.id == req.params.id)
        blogs[indexs] = {...blogs[indexs], ...req.body}
        return res.status(200).json({
            success: true,
            message: "Successfully User updated",
            users
        })
    } catch (error) {
        return res.status(500).json({
            success: falase,
            message: "Occured failed to Update or Please try agian"
        })
    }
})

app.delete('/blogs/:id',(req,res) => {
    try {
        const indexs = blogs.findIndex(index => index.id == req.params.id);
        blogs.splice(indexs, 1)
        return res.status(200).json({
            success: true,
            message: "user deleted successfully!"
        })
        
    } catch (error) {
        return res.status(500).json({
            success: falase,
            message: "Occured failed to Delete or Please try agian"
        })
    }
})


app.listen(3000, () => {
    console.log("Server started ✅")
    dbConnect();
})
 
