// async function fun1(){
//     return 'Hello';
// }

// let x = fun1();
// console.log(x);


// function fun2(){
//     return Promise.resolve('hello 2');
// }

// fun2().then(function (data){
//     console.log(data)
// })

// function pro(){
//     return new Promise(function pro1(resolve, reject){
//         resolve("hellooo");
//     })
// }

// async function fun1() {
//     let x = await pro()
//     console.log(x);
//     return 'dataaa'
// }

// fun1().then( (data) => {
//     console.log("data", data);
// })


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
            console.log("Order Created Successfully with order id is:",prefix)
            resolve({item,prefix})
        }, 3000);
    });
}

function payment(item,id){
    return new Promise(function fun3(resolve, reject){
        console.log(`Payment starting for.... ${item} with Order id ${id}`);
        setTimeout(function timer3(){
            let status = true
            resolve(status)
        },4000)
    });
}


async function OrderFood(item) {
    let res1 = await searchFood(item);
    let res2 = await foodOrder(res1.item);
    let res3 = await payment(res2.item, res2.prefix);
    console.log("Payment Successfull with status", res3)
}


OrderFood('Mithai')




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