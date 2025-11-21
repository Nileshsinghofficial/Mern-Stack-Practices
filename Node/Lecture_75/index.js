const { json } = require("body-parser")
const { error } = require("console")
const express = require("express")
const fs = require('fs')

const app = express()
app.use(express.json())

const path = __dirname + "/todos.json"

let todos = [
    // {
    //     title : "todos 1",
    //     desc : "desc 1",
    //     isComplated : false
    // },

    // {
    //     title : "todos 2",
    //     desc : "desc2",
    //     isComplated : true
    // },

    // {
    //     title : "todos 3",
    //     desc : "desc3",
    //     isComplated : false
    // }
]

app.get("/", (req, res) => {
    res.status(200).json({
        "message": "kya hal hai bhai ke"
    })
})

app.post("/todos", (req, res) => {
    try {
        // const {title, description} = req.body
        const {userid} = req.headers
         
        // console.log(userid)

        fs.readFile(path, {encoding : "utf-8"}, (err , todo) => {
            todos = todo ? JSON.parse(todo) : []
            todos.push({...req.body, isChecked : false, id: todos.length + 1, userid })
            
            fs.writeFile(path, JSON.stringify(todos), {encoding : "utf-8"}, (err) => {
                if (err) {
                    return res.status(500).json({message : "plese try agian"})
                } else {
                    return res.status(200).json({message : "Todo added/created successfull"})
                }
            })
        })
         
    } catch (error) {
        return res.status(500).json({"message" : "Please try again"})
    }
})


app.get('/todos', (req, res) => {
    const {userid} = req.headers
    try{
        fs.readFile(path, {encoding : "utf8"}, (error, todo) => {
            if (error) {
                throw error
            }
            let todos = todo.trim() === "" ? [] : JSON.parse(todo)
            todos = todos.filter(todo => userid == todo.userid)
            return res.status(200).json({todos})
        })

    } catch (err) {
        return res.status(500).json({"message": "please try again"})
    }
})

app.delete('/todos/:id', (req, res) => {
    try {
        const index = todos.findIndex(todo => todo.id === Number(req.params.id))
        console.log(index)
        if (index !== -1){
            todos.splice(index, 1)
            return res.status(200).json({message : "todo deleted successufully"})
        }
        else {
            return res.status(500).json({message : "Empty! , Not have any todos here"})
        }
    } catch (error) {
        return res.status(500).json({"Message": "please try again"})
    }
})

app.put('/todos/:id', (req, res) => {
    try {
        fs.readFile(path, {encoding : "utf-8"}, (err, todos) => {
            todos = todos ? JSON.parse(todos) : []
            const index = todos.findIndex(todo => todo.id === Number(req.params.id))
            todos[index] = {...todos[index], ...req.body}

            fs.writeFile(path, JSON.stringify(todos), {encoding: "utf-8"}, (err) => {
                if(err) {
                    return res.status(500).json({message : "please try again"})
                } else {
                    return res.status(200).json({message : "Todo updated successully"})
                }
            })
            
        })
    } catch (error) {
        return res.status(500).json({message : "Server error or update related error"})
    }
})

app.listen(3000, () => {
    console.log("Server Started")
})