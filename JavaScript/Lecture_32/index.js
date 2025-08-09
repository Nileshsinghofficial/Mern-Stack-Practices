// Lexical Scope 

// two phase perform 

// 1. Memory creation
// 2. Execution



// function fun1(){
//     var name = 'Nilesh';
//     console.log(name);
// }

// fun1()


let naam = 'Nilesh';
function fun1(){
    console.log(naam);
    name = 'Nigam';   // auto globel 
    // console.log(name);
}
// console.log(name);
fun1();
console.log(name)
console.log(naam);