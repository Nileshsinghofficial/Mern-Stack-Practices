const express = require('express');

const app = express();

app.use(express.json())

let users = []

app.post('/users', (req, res) => {
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

        users.push({...req.body, id: users.length + 1});
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

app.get('/users', (req, res) => {
    try {
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

app.get('/users/:id', (req,res) => {
    try {
        const user = users.filter(user => (user.id == req.params.id))

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

app.patch('/users/:id',(req,res) => {
    try {
        const indexs = users.findIndex(index => index.id == req.params.id)
        users[indexs] = {...users[indexs], ...req.body}
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

app.delete('/users/:id',(req,res) => {
    try {
        const indexs = users.findIndex(index => index.id == req.params.id);
        users.splice(indexs, 1)
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
    console.log('Server Started✅')
})
