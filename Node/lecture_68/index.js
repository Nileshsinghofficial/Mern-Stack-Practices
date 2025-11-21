
// console.log(process.env)
// console.log(process.argv)

// let num1 = process.argv[2]
// let num2 = process.argv[3]

// console.log(Number(num1) + Number(num2))

// console.log(process.argv0)


// process.stdout.write("Hello pagal \n")   // stdout --> write a same line not going to next line
// process.stdout.write("Hello Nile")   // \n --> use baclslash n to move cursor to next line


// process.stdout.write("Process 1 \n")

// process.exit()  // its stop the current process and exit here below code are not executed.

// process.stdout.write("Process 2")

// console.log(__dirname.split('Mern_Stack',2))

// console.log(__dirname.split("Mern_Stack")[1])

// console.log(__filename)

// function add(a,b){
//     return a + b;
// }

const add = require("./addMulFun.js")

let result = add(4,35)
console.log(result)