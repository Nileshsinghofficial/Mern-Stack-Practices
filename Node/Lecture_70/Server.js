const http = require('http')
const fs = require('fs');
// const path = require('path');



const Server = http.createServer( function (req , res){
    let filePath = __dirname + "/index.html";
    console.log(req.method)



    if(req.url == '/' || req.url == '/about'){
      let  path = req.url.split("/")[1].toUpperCase() 
      path = path == '' ? "HOME" : path
        
        

        fs.readFile(__dirname + '/index.html', 'utf-8', (err, data) => {
            if (err) {
                console.error("Occured error", err.message);
            } else {
                data = data.replace("[Path]",  path)
                res.end(data)
            }
        })
    } else {
           return res.end(JSON.stringify({message: "Not found"}))
    }

})


Server.listen(3000, () => {
    console.log("Server start runing on 3000")
})