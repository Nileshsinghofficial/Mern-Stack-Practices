(function(){
    console.log("App is continues");

    const todos =  ["JavaScript","Exercise"]

    const renderTodos = () => {
        const list = document.getElementById('todo-list');
        list.innerHTML = ''
        todos.forEach(todo =>{
            const li = document.createElement('li')
            li.textContent = todo
            list.appendChild(li)
        })
    }
    renderTodos()

    function addTodo(Callback){
        const randomTodo = "New Task" + Math.floor(Math.random() * 100);
        todos.push(randomTodo)
        // Callback()
    }


    document.getElementById('add-btn').addEventListener('click',() =>{
        addTodo()
        renderTodos()
    })


})()