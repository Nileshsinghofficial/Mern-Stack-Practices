// var crate a function-scoped variable
// let create a block-scoped variable
// const can be assigned only once,and its value cannot be changed afterwards. and also same block-scoped just like let varible


// function exam(){
//     if (true){
//         var count = 10;
//         console.log(count);
//     }
//     console.log(count)

// }

// exam()


// function letExam(){
//     if(true){
//         let count = 10;
//         console.log(count);
//     }

//     console.log(count)  // Ouput: uncaught and reference Error
// }

// letExam()

//### Javascript String Method

// 1    substr()            6//  toLocaleLowerCase()
// 2    substring()         7//  indexOf()
// 3    replace()           8//   includes()
// 4    seach()             9//    slice()
// 5    toLocaleUpperCase()  10//  concat()
// 11   lastIndexOf()        16//  lastIndexOf()
// 12   charCodeAt()         17//   charCodeAt()
// 13   trim()               18//   split()
// 14   charAt()             19//   toString()
// 15   valueOf()            20//  match()


//##### concat()
// let a = 'hello'
// let b = 'world'

// // concat("parameter need ", want add example - b)

// console.log(a.concat("-", b))


// substring()  -> initial index to final index (substring(2, 10))
// let a = "Hello World"

// let Res =  a.substring(6,11)
// console.log(Res)

// length  length not a function

// let a = 'i am a goldkeeper'
// console.log(a.length)


//#### trim

// let str = "  hello world  "
// let trimm = str.trim()
// console.log(trimm)



//### condition Statement

// 1 --> if/else statement
// 2 --> Ternary Operator
// 3 --> Switch statement

//####  Ternary Operator

// let a = 20;
// let z = 10;

// let b = a > z ? "a": "z"
// console.log(b);


//### Switch case:

// let a =  4; 

// switch(a){
//     case 1: {
//         console.log("1");
//         break;
//     }
//     case 2:{
//         console.log("2");
//         break;
//     }

//     case 3:{
//         console.log("3");
//         break
//     }
//     default: {
//         console.log("Default")
//     }

// }



//### JavaScript loops

// 1   --->  for loops
// 2   --->  while loops
// 3   --->  do-while loops
// 4   --->  for of
// 5   --->  for 



// ## Function --> A function is a reusable block of code that performs a specific task.

// Type of Function in javaScript

// 1    Named Function
// 2    Anonymous Function  
// 3    Function Expression
// 4    Arrow Function   ** imp  () => {}
// 5    IIFE
// 6    Callback Function  ** Imp
// 7    Higher-Order Function  **Imp also



// const a = (x,y) => s = x+y;
// b = a(2,4)
// console.log(b)


// ###Array  --> An array is a data type allow you to store multiple values in a single variable

//  Array methods
// ## Get, Add, Remove, #Modify, Other,

// ##get
    // indexOf()
    // find()
    // filter()
    // Slice()

// ## Add
    // push()
    // concat()

// ## Remove
    // pop()
    // shift()
    // splice()

// ## Modify
    // map()
    // forEach()

// ## other 
    // join()
    // length()
    // sort()
    // reverse()
    // reduce()
    // some()
    // every()

// let arr = ["apple","Pumpkin","Gowwa"]
// let arr1 = ["orange","mango","wwag"]

// let arrx = arr.concat(arr1)
// console.log(arrx)
// console.log(arr)
// arr.push('amango')
// console.log(arr)

// let arrx = 
// console.log(arrx)

// const numbers = [10,20,30,40];

// const found = numbers.find((num) =>{
//    return num > 20
// })
// console.log(found)


// (function(){
//     console.log("immediately invoked Function expreption")
// })()
 

// ### scope
// global scope 
// Function scope
// block scope in


// ### hoisting --> Hoisting is a javascript behavior where functions and variable declararions are moved to top of their respective scopes during the compilation phase 

// function hoisting
// myFunction();

// function myFunction(){
//     console.log("Hello");
// }

// Reson decleration of function ko javascript engine pahle rakh deta esliye ye call ho raha ese ho hoisting kahte hai


//  Variable hoisting

// x = 10;
// console.log(x)
// var x   // only var work in varible hosting

j
// ### Asynchronous function -- > Asynchronous programming allows multiple tasks or operations to be initiated and executed concurrently.