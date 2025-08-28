// ###Data Type

// #Primitive

// Number
// Strings
// Booleans
// Undefined
// Null


// # Non-Premivtive

// Object
// Array
// Function
// Data
// RegExp


// what is the difference b/w null and undefined?

// undefined:- When a variable is declared but has not been assigned a value. its is automatically initialized with undefined.
//              undefined can be used when you dont have the value right now , but you will get it after some logic or operation.

// Null:- null variables are intentionally assigned the null value.
//          Null can be used, when you are sure you do not have any value for the particular varible 


// ### What is type coercion in js
// uses of type coercion

// 1) Type coercion can be used during String and Number concatenation.
// 2) Type coercion can be used while using Comparison operatior

// Type coercion is the automatic conversion of values from one data type to another during certain operations

// Exmple
// let a = '23' // its a string data types
// let num = 23
// console.log(a + num) // Output 2323



// chapter 3 Operator and Conditions

// #### What is the difference b/w unary, binary, and ternary operators?
// ---> Operator based on number of operands
// ## Unary operator

// -->  Unary for single operand
// let a = 5;
// let b = a
// console.log(++b)


// ## Binary Operator  for Two operand
//  
// ## Ternary Operator
// let resutt = condtion ? "yes": "no"
// console.log(resutt)

// ### What is short-circuit evaluation in js?
// Short-circuit evaluation stops the execution as soon as the result can be determined without evaluating the remaining sub-expressions
// exmaple  --> and && (a.b)
// let result1 = false && functionOt();
// console.log(result1)  // false


// ### What is difference b/w == and === ?
//  # ==  Loose Equality --> Loose Equality operator compares two values for equality after performing type coercion
// console.log(1 == '1')


// # ===  Strict Equality --> Strict Equality operator compares two values for equaltiy without performing type corcion

// console.log(1 === true)  // false
// console.log(1 === '1')  // false


// what is difference b/w Spread and Rest operator in js


// ### Spread Operator --> The Spread Operator(...) is used to expand or spread element from an iterable(such as array, oject, sting,) into individual elements
// uses of Spread Operator ---> Coping of and array, Mergin Arrays, Passing multiple argument to a function
// Spread operator Example

// const arr = [1,2,3]
// console.log(...arr)  // output 1 2 3

// #  -> Coping of and array,

// const originalArr = [1,2,3,4];
// const copyArr = [...originalArr]
// console.log(copyArr)  //output  [1,2,3,4]


// # Mergin Arrays,

// const arr1 = [1,2,3,4,5];
// const arr2 = [6,7]
// const mergerArr = [...arr1,...arr2]
// console.log(mergerArr)  //[1,2,3,4,5,6,7]

// #  Passing multiple argument to a function

// const num = [1,2,3,4,5,6]

// // sum(1,2,3,4,5,6)  after using spread operator
// sum(...num)  // call sum pass argument as a spread operator
// function sum(a,b,c,d,e,f){
//     console.log(a + b + c + d + e + f)
// }

// ### Rest Operator (Bacha huwa mal ) 
// # --> The rest Operator is used in function parameters to collect all remaining arguments into an arry 

// function display(first, second, ...remain){
//     console.log(first) // Output- 1
//     console.log(second) // Output- 2
//     console.log(remain) // Output- [3,4,5]
// }

// display(1,2,3,4,5)