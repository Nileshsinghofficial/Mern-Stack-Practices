// function searchFood(item){
//     return new Promise(function (resolve, reject){
//         console.log('Search Starting for.....',item);
//         setTimeout(function timer1(){
//             // `list of ${item}`
//             let data =  `list of ${item}`;
//             if (data){
//                 resolve({item,data})
//             } else {
//                 reject(new Error('reject'))
//             }
//         },2000)
//     })
// }

// function foodOrder(item){
//     return new Promise(function fun2(resolve, reject){
//         console.log("Select the List",item);
//         setTimeout(function timer2(){
//             let id = Math.floor(Math.random() * 999);
//             let prefix = 'NIL' + id;
//             resolve({item,prefix})
//         }, 3000);
//     });
// }

// function payment(item,id){
//     return new Promise(function fun3(resolve, reject){
//         console.log(`Payment starting for....item ${item} with id no ${id}`);
//         setTimeout(function timer3(){
//             let status = false
//             if(status){
//                 resolve(status);
//             }
//             else {
//                 reject(new Error('Payment Rejected due to some to some technical error with status '+ status))
//             }
            
//         },4000)
//     });
// }




// let result = searchFood('Pizza');
// result.then(function consume1(data){
//     console.log(data.data);
//     return foodOrder(data.item)
// })
// .then(function consume2(OrderData){
//     console.log("Order Created Successfully with order id is:",OrderData.prefix);
//     // console.log(id)
//     return payment(OrderData.item, OrderData.prefix);
// })
// .then(function consume3(PaymentStatus){
//     console.log("Payment Successfull with status", PaymentStatus)
// })
// .catch(function unexpect(er){
//     console.error(er);
// })
// .finally(function (execu){
//     console.log('Always excuted no matter resolve or reject or errr')
// })



//using asyn function 

function searchFood(item){
    return new Promise(function (resolve, reject){
        console.log('Search Starting for.....',item);
        setTimeout(function timer1(){
            // `list of ${item}`
            let data =  `list of ${item}`;
            if (data){
                console.log(data);
                resolve({item,data})
            } else {
                reject(new Error('reject'))
            }
        },2000)
    })
}

function foodOrder(item){
    return new Promise(function fun2(resolve, reject){
        console.log("Select the List",item);
        setTimeout(function timer2(){
            let id = Math.floor(Math.random() * 999);
            let prefix = 'NIL' + id;
            console.log("Order Created Successfully with order id is:",prefix);
            resolve({item,prefix})
        }, 3000);
    });
}

function payment(item,id){
    return new Promise(function fun3(resolve, reject){
        console.log(`Payment starting for....item ${item} with id no ${id}`);
        setTimeout(function timer3(){
            let status = true
            if(status){
                resolve(status);
            }
            else {
                reject(new Error('Payment Rejected due to some technical error with status '+ status))
            }
            
        },4000)
    });
}

async function PizzaOrderApp(item) {
    try{
        let res1 = await searchFood(item)
        let res2 = await foodOrder(res1.item)
        let res3 = await payment(res2.item, res2.prefix)
        console.log("Payment Successfull with status", res3)
    } catch (err){
        console.error(err);
    } finally{
        console.log("always executed")
    }

    
}


PizzaOrderApp('Onion-Pizza');