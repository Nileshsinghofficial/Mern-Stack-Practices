// class user{
//     constructor(name, price){
//         // console.log(this)
//         this.name = name;         //data member
//         this.price = price;
//         // console.log(this)
//     }
//     printName() {
//         console.log(this.name)
//     }
// }


// let n = new user('mic', 5000);
// console.log(n.printName())



// Prototype


// __proto__    also dunder Proto

// let x = {}
// x.__proto__.printName = function(){
//     console.log('this is proto from x')
// }

// console.log(x.__proto__)a


Object.prototype.myData = "this is a sample project"
Object.prototype.mydataapp = function(){
    return 'custom function'
}

users = {
        getFullname: function(){
        return this.firstName +" "+ this.lastName
    },
        getage: function(){
        let age = new Date().getFullYear() - this.birth
        return age
    },  
}


let student = {
    firstName: 'Nilesh',
    lastName :'Singh',
    birth: 2001,

    // getFullname: function(){
    //     return this.firstName +" "+ this.lastName
    // },
    // getage: function(){
    //     let age = new Date().getFullYear() - this.birth
    //     return age
    // },
}

let teacher = {
    firstName: "RD",
    lastName: "Kumar",
    birth: 1984,

    // getFullname: function(){
    //     return this.firstName + " "+ this.lastName
    // },
    // getage:function(){
    //     let age = new Date().getFullYear()- this.birth
    //     return age
    // }
}
student.__proto__ = users;
teacher.__proto__ = users;

// console.log(student.getage())
// console.log(teacher.getage())