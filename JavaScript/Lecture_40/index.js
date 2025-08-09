function searchFood(item, cb1){
    console.log("Searching start for",item +"....");
    setTimeout(function timer1(){
        let data = `list of ${item}`;
        cb1(item,data)
    },3000)
    
}

function foodOrder(item,cb2){
    console.log("Select the list",item);
    setTimeout(function timer2(){
        let id = Math.floor(Math.random() * 999);
        let prefi = 'NIL' + id;
        cb2(prefi);
    },3000)
}

function payment(item, id, cb3){
console.log(`Payment starting.... for ${item} with id no ${id}`);
setTimeout(function timer3(){
    let status = true;
    cb3(status)
},3000)
}


const result = searchFood('burger', function fun1(item,data){
    console.log(data);
    foodOrder(item,function fun2( idOrder){
        console.log("Order Created Successfully with order id is:", idOrder);
        payment(item, idOrder, function fun3(status){
            console.log("Payment Successfull with status", status)
        });
    });
    
});
