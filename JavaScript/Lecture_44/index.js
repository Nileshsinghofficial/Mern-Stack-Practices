// Promise.all();
// Promise.allsettled();
// Promise.race();
// Promise.any();
 

 
 

// function api1(){
//     return new Promise((resolve, rejects) =>{
//         setTimeout( () => {
//             resolve('api1')
//         }, 2000)
//     });
// }

// function api2(){
//     return new Promise((resolve, rejects) =>{
//         setTimeout( () =>{
//             resolve('api2')
//         }, 2000)
//     });
// }

// function api3(){
//     return new Promise((resolve, rejects) =>{
//         setTimeout(() => {
//             resolve('api3');
//         },2000)
//     });
// }

// function api4(){
//     return new Promise((resolve, rejects) =>{
//         setTimeout(()=>{
//             rejects('reject');
//         },2000)
//     })
// }

// async function allfetch() {
//     let y = await Promise.all([api1(), api2(), api3(), api4() ])
//     console.log("This comes from async awit part",y)
// }

// allfetch();


// let x = Promise.all([api1(), api2(), api3(), api4()])
// x.then((data) =>{
//     console.log(data);
// }).catch((error) => {
//     console.log(error)
// })


// let v = api1();
// console.log(v);

// let x = api2();
// console.log(x);

// let y = api3();
// console.log(y);

// let z = api4();
// console.log(z);





// promise.allSettled


// function api1(){
//     return new Promise((resolve, rejects) =>{
//         setTimeout( () => {
//             resolve('api1')
//         }, 2000)
//     });
// }

// function api2(){
//     return new Promise((resolve, rejects) =>{
//         setTimeout( () =>{
//             resolve('api2')
//         }, 2000)
//     });
// }

// function api3(){
//     return new Promise((resolve, rejects) =>{
//         setTimeout(() => {
//             resolve('api3');
//         },2000)
//     });
// }

// function api4(){
//     return new Promise((resolve, rejects) =>{
//         setTimeout(()=>{
//             rejects('reject');
//         },2000)
//     })
// }



// let x = Promise.allSettled([api1(), api2(), api3(), api4()])
// x.then((data) =>{
//     console.log(data);
// }).catch((error) => {
//     console.log(error)
// })



//Promise.race()

// Sabse kam time me jo execute hoga wahi race() me aayega no matter Satteled ya Reject

// function api1(){
//     return new Promise((resolve, rejects) =>{
//         setTimeout( () => {
//             resolve('api1')
//         }, 3000)
//     });
// }

// function api2(){
//     return new Promise((resolve, rejects) =>{
//         setTimeout( () =>{
//             resolve('api2')
//         }, 2000)
//     });
// }

// function api3(){
//     return new Promise((resolve, rejects) =>{
//         setTimeout(() => {
//             resolve('api3');
//         },3000)
//     });
// }

// function api4(){
//     return new Promise((resolve, rejects) =>{
//         setTimeout(()=>{
//             rejects('reject');
//         },2000)
//     })
// }



// let x = Promise.race([api1(), api2(), api3(), api4()])
// x.then((data) =>{
//     console.log(data);
// }).catch((error) => {
//     console.log(error)
// })



// promise.any();

// sabse kam time me jo execute hoga wahi aayega but only settaled aayega
//agar sare rejcet ho tab, AggregateError: All promises were rejected error return in array form


function api1(){
    return new Promise((resolve, rejects) =>{
        setTimeout( () => {
            rejects('api1')
        }, 3000)
    });
}

function api2(){
    return new Promise((resolve, rejects) =>{
        setTimeout( () =>{
            rejects('api2')
        }, 2000)
    });
}

function api3(){
    return new Promise((resolve, rejects) =>{
        setTimeout(() => {
            rejects('api3');
        },3000)
    });
}

function api4(){
    return new Promise((resolve, rejects) =>{
        setTimeout(()=>{
            rejects('minimum time.... api4');
        },1000)
    })
}

let x = Promise.any([api1(), api2(), api3(),api4()])
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.error(err)
    })