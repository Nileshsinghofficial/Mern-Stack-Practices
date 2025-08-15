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

function Product(name, price){
    return {name, price}
}

let p1 = Product('iphone 17', 45626);
let p2 = Product('iphone', 45786);

console.log(p1);
console.log(p2);