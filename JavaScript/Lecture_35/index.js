// coercion
// type conversion

// let a = 2;
// let b = Number('4');
// let c = a + b;

// console.log(typeof c) 

// console.log(7 + null); //7
// console.log("7" + null); // 7null
// console.log(4 + true);  // 4 + 1 = 5
// console.log(4 + false); // 4 + 0 = 4

// console.log('55' - 1); // 54
// console.log(1 - '55'); // - 54

// console.log({} - 5); // Naan
// console.log(5 - {}); //Nan

// console.log([] - 5); // -5
// console.log( 5 -  []); // 5.

// console.log(5 - undefined);  //Nan

console.log(undefined - NaN);
console.log(null - true);
console.log(null - false);


// In javascript 4 abstract operation

// 1. ToPremetive
// 2. ToBoolean
// 3. ToString
// 4. ToNumber