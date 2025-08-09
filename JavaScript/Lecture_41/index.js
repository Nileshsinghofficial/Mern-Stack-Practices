// Promise 

// Object represent the evenctualy competation of an async Operation

// readable and manegeable 



// state 
    // 1 Pending -> initial state
    // 2 fulfilled/complete/resolve --|- final stat
    // 3 Rejected  / faield---|- final state

// value/Result/output

    // promise -> pending(initial state) -- value(undefined)
    // promise -> final state --> settled(fulfilled or Rejected)--> value(return value)

    // settled -> ya to reject hoga promise ya fir fullfiled hoga

// console.log("Start");
// const Promise1 = new Promise(function fun1(resolve, reject){
//     // return reject;    // output --> Promise {<pending>}
//     // return resolve;    // output --> Promise {<pending>}

//     // resolve('Promise successful solve');
//     // reject('Promise reject');
// })
// console.log(Promise1);
// console.log("end");

// console.log("Start");
// const Promise1 = new Promise(function fun1(resolve, reject){
//     // resolve("Promise resolve");
//     reject("Promise rejected")
// });

// // .then(onfilfullment, onrejected)
// Promise1.then(function success(result){
//     console.log(result);
// }, function reject1(err){
//     console.log(err);
// })
// console.log("End"); 

// const promise1 = new Promise(function fun1(resolve, reject){
//     resolve('Promise resolve');
//     reject('Promise reject');
// }).then(function success(result){
//     console.log(result);
// }, function reject1(err){
//     console.log(err); 
// })


// function isData(item) {
//     let Promise1 = new Promise(function fun1(resolve, reject){
//         if(item){
//             resolve("Promise resolve");
//         } else {
//             reject('Data is empty');
//         }
//     });
//     return Promise1;
// }


// let result = isData('');

// result.then(function success(result){
//     console.log(result)
// }).catch(function reject1(err){
//     console.log(err)
// })



function isData(item) {
    let Promise1 = new Promise(function fun1(resolve, reject){
            if(item){
                resolve("Promise resolve");
            } else {
                reject('data is empty');
            }
    });
    return Promise1;
}


let result = isData('d');

let x = result.then(function success(result){
    console.log(result)
    return 'Hello from .then()'
});
let y = x.then(function fun2(e){
    console.log(e);
    return 'Nilesh'
});
y.then(function third(three){
    console.log(three);
})
console.log("x", x);
 