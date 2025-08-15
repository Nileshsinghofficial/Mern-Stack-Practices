// let obj = {
//     name: 'nilesh',
//     email: 'nigamsingh888@gmail.com',
//     prinName1(){
//         console.log(this) // full object print
//         console.log(this.name);
//     },
 

//     // printName3: function(){
//     //     console.log('Method 3')
//     // },
//     // printName4: () => {
//     //     console.log('Method 4')
//     // }
// }
// obj.prinName1();
// console.log(obj)   //full obj print


// constructor

// let prod1 = {
//     name: 'iphone 16',
//     price: 123456
// }

// let prod2 = {
//     name: 'iphone 18',
//     price: 1234567
// }

// console.log(prod1)
// console.log(prod2)

// function Product(name, price){
//     return {name, price}
// }

// let p1 = Product('iphone 17', 45626);
// let p2 = Product('iphone', 45786);

// console.log(p1);
// console.log(p2);

// consutroctor

// function Product(name, price){
//     this.name = name;
//     this.price = price;


//     phonePrice = function (){
//         console.log(this.name)
//     }
// }

// let p1 = new Product('Iphone-16', 56000);
// let p2 = new Product('Iphone-17', 62000);

// console.log(p1.phonePrice());
// console.log(p2);



// class

class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
        this.productName = function(){
            console.log(this.name)
        }
    }
    // productName(){
    //     console.log(this.name)
    // }

}

let p1 = new Product('samsung', 10054);
console.log(p1.productName())