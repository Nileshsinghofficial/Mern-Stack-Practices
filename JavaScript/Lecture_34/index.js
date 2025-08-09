// Arrow Function

// let a = 2;
// let b = 3

// var fun1 = (a , b) =>{
//     let total = a + b;
//     return total
// } 

// console.log(fun1(2,4))



// Expression Function

// var fun2 = function(){
//     return 'This is Function Expression'
// }

// console.log(fun2());

// hoisting 

// fun3();

// function fun3(){
//     console.log("Hello Nilesh");
// }


// in arrow funtion  Cannot access 'fun' before initialization
// fun();

// let fun = () => {
//     console.log('Hello NIlesh');
// }


// fun();

// let fun = function(){
//     console.log('Hum');
// }


// let fun = function name(){
//     console.log('Hello is Time');
//     // name();
// }

// fun();


// Callback function

// function one(fn){ //parameter
//     // console.log(fn);
//     console.log("Hello 1");
//     fn();
// }

// function two(){
//     console.log("Hello 2");
// }

// function three(fnn){
//     fnn();
//     console.log("Hello 3");
    
// }

// one(two); //arguments
// three(two);


// function fun1(){
//     console.log("Function 1");
// }

// function fun2(nigam){
//     console.log("Function 2");
//     nigam();
// }

// fun2(fun1)


// function one(para, fun){
//     console.log(fun);
//     console.log(para);
//     fun()
// }

// function two(){
//     console.log("Hello two");
//     // return 4
// }

// one(45, two());


// function add(a, b){
//     return a + b;
// }

// function sub(a,b){
//     return a - b;
// }


// function calculatorArith(num1, num2, fn){
//     return fn(num1, num2)
// }

// const output = calculatorArith(2,4, sub)

// console.log(output);



// Closure

function makeFuction(){
    const name = "Closure";

    function displayName(){
        console.log(name);
        console.log(nine);
    }
    const nine = 45; // Woe 
    return displayName;
}

const myFuc = makeFuction();
myFuc()