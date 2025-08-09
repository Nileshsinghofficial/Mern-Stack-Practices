// let p = new Promise(function (resolve, reject){
//     resolve('Promise Solve');
// })

// console.log(p);


// lecture 40 code change using promisse 




// function searchFood(item, cb1){
//     console.log("Searching start for",item +"....");
//     setTimeout(function timer1(){
//         let data = `list of ${item}`;
//         cb1(item,data)
//     },3000)
    
// }

// function foodOrder(item,cb2){
//     console.log("Select the list",item);
//     setTimeout(function timer2(){
//         let id = Math.floor(Math.random() * 999);
//         let prefi = 'NIL' + id;
//         cb2(prefi);
//     },3000)
// }

// function searchFood(item){
//     return new Promise(function (resolve, reject){
//         console.log("Search Start for", item +'...');
//         setTimeout(function timer1(){
//             let data = `list of ${item}`
//             resolve(data)
//         }, 3000)
//     })

// }

// let result = searchFood('Pizza');
// result.then(function fun1(data){
//     console.log(data)
// })
// console.log(result);


// function payment(item, id, cb3){
// console.log(`Payment starting.... for ${item} with id no ${id}`);
// setTimeout(function timer3(){
//     let status = true;
//     cb3(status)
// },3000)
// }


function searchFood(item){
    let y = new Promise(function (resolve, reject){
        console.log("Search Start for", item +'...');
        setTimeout(function timer1(){
            let data = `list of ${item}`
            resolve({item,data})
        }, 2000)
    });
    return y;

}

function foodOrder(item){
    return new Promise(function fun2(resolve, reject){
        console.log("Select the List",item);
        setTimeout(function timer2(){
            let id = Math.floor(Math.random() * 999);
            let prefix = 'NIL' + id;
            resolve({item,prefix})
        }, 3000);
    });
}

function payment(item,id){
    return new Promise(function fun3(resolve, reject){
        console.log(`Payment starting for....item ${item} with id no ${id}`);
        setTimeout(function timer3(){
            let status = true
            resolve(status)
        },4000)
    });
}




let result = searchFood('Pizza');
result.then(function consume1(data){
    console.log(data.data);
    return foodOrder(data.item)
})
.then(function consume2(OrderData){
    console.log("Order Created Successfully with order id is:",OrderData.prefix);
    // console.log(id)
    return payment(OrderData.item, OrderData.prefix);
})
.then(function consume3(PaymentStatus){
    console.log("Payment Successfull with status", PaymentStatus)
})