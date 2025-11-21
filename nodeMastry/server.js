import {createServer} from 'node:http';
import fs from 'node:fs'

// import fsPromises from 'node:fs/promises'

let count = 0;

const server = createServer(async (req, res) => {

    if(req.url === '/'){

        const htmlPage = fs.createReadStream('./stream.html')
        htmlPage.pipe(res)
        
    } else if (req.url === '/stream'){
        res.writeHead(200, {
            'content-type': 'text/event-stream',
            'cache-control': 'no-cache',
            'connection': 'keep-alive',
        });

        setInterval(() => {
            res.write(`data: The Count is - ${count++} \n\n`)
        }, 1000)
    }

   
    // if(req.url === '/') {
    //     res.writeHead(200, {'content-type': 'text/html'})

    //     // const data = await fs.readFile('./index.html', {encoding: 'utf-8'});

    //     const dataStream = fs.createReadStream('./index.html');

    //     dataStream.pipe(res)


    //     // dataStream.on('data', (chunk) => {
    //     //     res.write(chunk)
    //     // })

    //     // dataStream.on('end', () => {
    //     //     res.end()
    //     // })
    // }

    // else if (req.url === '/about'){
    //     res.writeHead(200, {'content-type': 'text/html'})

    //     res.end('<h1>This is about Pages!</h1>')
    // }


    // else if(req.url === '/expenses'){
    //     // Create an expense

    //     if(req.method === 'POST'){
    //         // read data from requesst
    //         let buff = ''
    //         req.on('data', (chunk) =>{
    //             // console.log('Chunk', chunk)
    //             buff = buff + chunk.toString()
    //         });

    //         req.on('end', async () => {
    //             const data = await fsPromises.readFile('./db.json', 'utf-8');

    //             const dbData = JSON.parse(data || "[]")
    //             dbData.push(JSON.parse(buff));

    //             await fsPromises.writeFile('./db.json', JSON.stringify(dbData, null, 2));

    //             res.end('ok')
    //         })

    //         // Store it in JSON database.
    //     }


    //     else if(req.method === 'GET'){
    //         // Read data from json db
    //         const data = await fsPromises.readFile('./db.json', 'utf-8')
    //         res.end(data);
            
    //         // Return the data to client
    //     }
    // }
})

server.listen(3000, () => {
    console.log('Server started ✅')
})









// const http = require('http')

// const Server = http.createServer((req, res) => {
//     res.end("Hello from Node.js Server!")
// })

// Server.listen(3000, () => {
//     console.log('Server Started ✅')
// })