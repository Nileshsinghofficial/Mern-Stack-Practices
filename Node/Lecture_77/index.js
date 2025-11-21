const express = require('express')

const app = express()
app.use(express.json())

const blogs = []

app.post('/blogs', (req, res) => {
    blogs.push({...req.body , id:blogs.length + 1})
    return res.json({message: 'Blog created successfuly'})
})
app.get('/blogs', (req, res) => {
    let publicBlog = blogs.filter(blog => !blog.draft)
    return res.json({ publicBlog })
})   
app.get('/blogs/:id', (req, res) => {
    let searchBlog = blogs.filter(blog => blog.id == req.params.id)
    return res.json({ searchBlog })
})
app.patch('/blogs/:id', (req, res) => {

    let index = blogs.findIndex(Index => Index.id == Number(req.params.id)) 
    blogs[index] = {...blogs[index], ...req.body}
    return res.json({message: "Successufly updated!"})
})
app.delete('/blogs/:id', (req, res) => {

    let index = blogs.findIndex(blog => blog.id == Number(req.params.id))
    blogs.splice(index, 1)
    return res.json({message: "Successufuly deleted"})
})

app.listen(3000, () => {
    console.log('Server started from express ✅')
})
