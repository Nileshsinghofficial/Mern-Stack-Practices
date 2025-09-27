// function totalSum(val1){
//     console.log(val1)
// }



// totalSum(5-5)
// totalSum(5*5)
// totalSum(5/5)


// Number
//  ## toFixed()  -> Decimal place ko fixed karta hai. kitna place chahiye aapko

let num1 = 545.55;
// console.log(num1.toFixed(2))


//  ## toString() -> Number ko string me convert karta hai. 
// console.log(typeof(num1.toString()));


//  ## toExponential() -> Number ko exponential notation me convert karta hai.
// console.log(num1.toExponential(2))

// ## toPrecision() pura number ko ek fixed precision ke saath format karta hai.
// console.log(num1.toPrecision(5))


// console.log(parseInt(num1, 2))


// ## Number.isInteger() -> Check karta hai ki number interger hai ya nahi
// console.log(Number.isInteger("Nilehs"))
// console.log(Number.isInteger(5.1))


 
// example(0,1,2)

// let num = new Number(235)
// console.log(typeof(num.toString()))



// #### String

let str = "Nilesh Singh"

// console.log(str.replace('i', 'I'))

// console.log(str.split('i', 2))
// console.log(str.match('in'))
// console.log(str.charAt(7)) 
// console.log(str.indexOf('gh'))   // -1 return not found


let dat = Date.now()
// console.log(dat.getFullYear()) // 2025
// console.log(dat.getTime()) // in milisecond
// console.log(dat.toUTCString()) // UTC formet not in india
// console.log(dat.toLocaleString()) // Local in india formet
// console.log(dat.toTimeString()) // Local in india formet
// console.log(dat.toString())
// console.log(dat)
