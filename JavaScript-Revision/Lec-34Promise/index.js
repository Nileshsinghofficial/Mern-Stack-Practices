// const promise1 = new Promise((res, rej) => {
//     // res("Promise resolve")
//     rej("Promise reject")
// })

// promise1.then(function success(res){
//     console.log(res)
// }).catch(function (err){
//     console.log(err)
// })
 

// function isData(item){
//     const promise1 = new Promise((res, rej) => {
//         if(item){
//             res("promise resolve")
//         } else {
//             rej("promise rejected")
//         }
//     })
//     return promise1

// }

// let result = isData()

// result.then(function success(item){
//     console.log(item)
// }).catch(function (err){
//     console.log(err)
// })
 



// Lecture 42

function searchFood(item){
    
    const promise1 = new Promise(function fun1(res, rej){
        console.log(`Searching start for items ${item}....`)
        setTimeout(() => {
            let data = `list of ${item}`
            res({item,data})
        },3000)
    })
    return promise1
}

function orderFood(item){
    return new Promise(function fun2(res, rej ){
        console.log(`Select ${item}`)
        setTimeout(function time2(){
            let id = Math.floor(Math.random() * 99999)
            console.log(`Order created successfuly with id no ${id}`)
            res({item, id})
        },4000)
    })
}

function payment(item, id){
    return new Promise(function fun3(res, rej){
        console.log(`payment starting for ${item} with id no ${id}`)
        setTimeout(function time3(){
            let status = true;
            res(status)
        },5000)
    })
}

// let result = searchFood("Maggie")
//     .then(function consume1(details){
//         console.log(details.data)
//         return orderFood(details.item)
//     })
//     .then(function consume2(details2){
//         console.log(`Order created successfuly with id no ${id}`)   
//         return payment(details2.item, details2.id)
//     })
//     .then(function consume3(status){
//         console.log("Payment succesufuly done",status)
//     })

async function foodOrder(item) {
    let res1 = await searchFood(item)
    console.log(res1.data)
    let res2 = await orderFood(res1.item)
    let res3 = await payment(res2.item, res2.id)
   
    console.log(`Payment succesufuly done, ${res3}`)
        
}

foodOrder("Panner-roti")

// let t = searchFood("chwal").then(function consume1(item){
//     console.log(item.data)
//     orderFood(item.item).then(function consume2(id){
//         console.log(`Order created successfuly with id no ${id}`)
//         payment(item.item, id).then(function consume3(status){
//             console.log("Payment succesufuly done",status)
//         })
//     })
    
// }) 