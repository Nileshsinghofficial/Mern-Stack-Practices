// Promise.all() // retun in array, if any one rejected then all promise are rejected
// Promise.allSettled()  // retun array inside object with status: fulfilled/rejectd and its value  rejected:reson or api
// Promise.race() // its return sigle promise value those take less time not means either fullfield or reject
// Promise.any() // its only provide fullfeild its ignore rejected and give first that take less time

function api1(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("api1")
        },2000)
    });
}

function api2(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("api2")
        },5000)
    })
}




function api3(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("api3")
        },7000)
    })
}

// let x = Promise.all([api1(), api2(), api3()])
// console.log(x)

async function fun1(){
    let x = await Promise.all([api1(), api2(), api3()])
    console.log(x)
}

fun1()