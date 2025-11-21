import os from 'node:os'



// console.log("Cpu", os.cpus().length)
console.log("Total Memory", os.totalmem() / (1024 * 1024))
console.log("Free Memory", os.freemem() / (1024 * 1024))

console.log("Uptime", os.uptime() / (60 * 60))

console.log('Hostname', os.hostname())

console.log("User Info", os.userInfo())

console.log("Mechnine", os.machine())




 


















//  common js
// const getGreetings = require('./greeter.js')

// ESM 
// import {getGreetings} from "./greeter.js";

// REPL ==> Read-Eval-Print-Loop
// console.log("Hello Nodejs!")

// console.log(process.argv[2], process.argv[3])
// const name = process.argv[2]

// const hours = new Date().getHours()


// const greetings = getGreetings(hours)
// console.log(`${greetings}, ${name}!`);