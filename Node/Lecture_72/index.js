const http = require('http');

const Server = http.createServer((req, res) => {
    if(req.method == 'GET'){
        res.end("get Method")
    } else if(req.method == 'POST'){
        res.end("post method")

    } else if(req.method == 'PUT'){
        res.end("put method")
        
    } else if(req.method == 'PATCH'){
        res.end("patch method")
        
    } else if(req.method == 'DELETE'){
        res.end("Delete method")
        
    }
})

Server.listen(3000, () => {
    console.log("Server Started")
})