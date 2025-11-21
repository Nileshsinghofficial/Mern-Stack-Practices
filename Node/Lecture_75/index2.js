async function addTodo() {

    let body = {
        method : "GET",
        headers : {
            "Content-Type": "application/json"
        }
    
    }
    let res = await fetch("http://localhost:3000/todos", body)

    let json = await res.json()
    console.log(json)
}

addTodo()