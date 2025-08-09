// for each, map, reduce, filter   all this is method

// const { title } = require("process");

// multiple value add using rest parameter

// function sum(...num){
//     let total = 0;
//     for(let n of num){
//         total += n;
//     }

//     console.log(total)
// }

// sum(3,2,4)


 

// function sum1 (...num){
//     let total = num[0] + num[1] + num[2];
//     console.log(total);
// }

// sum1(3,4,3);

// let obj = {
//     title: 'Lecture_30',
//     tags: 'lec30, rest, spread',
//     description: 'hello dosto'
// }

// console.log(obj)

// function obj1(obj){
//     console.log(obj)

// }




// let {title,...remains} = obj
// console.log(title);


// Spread Method

// let arr = [2,3,4,64,665]
// let arr2 = [22,33,3,345]

// let newArr = [...arr,...arr2]
// console.log(newArr);

// let arr = [12, 12,11,1,2,3,4]

// arr.forEach(function(val){
//     console.log(val)
// })


// let newArr = arr.forEach(function(val){
//     val += 5;
//     console.log(val);
// })

// function hello(val){
//     console.log(val) 
// }

// hello(arr);


// if return some things

// const hellos = (arr) => {
//     console.log(arr);
// }

// hellos(arr);

// if not return arrow function

// const hello = (arr) => console.log(arr);

// hello(arr);
 
// const hello = (val) => console.log(val)

// arr.forEach(hello);

// let arr = [12, 12,11,1,2,3,4]

// const newArr = arr.map(function(val){
//     val *= 3;
//     return val
// })

// const newArr = arr.map((val) => {
//     val += 1;
//     return val
// })

// console.log(newArr);

// const newArr = arr.map((val) => val *= 3)
// console.log(newArr);

// const Arr2 = arr.map((num) => {
//     num  -= 2;
//     return num
// }) 

// console.log(Arr2);


// const nigam = (foreachs) =>{

// }

// const newr = arr.map(() => {

// })


// filter use

// let arr = [22,33,44,55,66]

// const newArr = arr.filter((val) =>{
//     if(val <= 44){
//         return val
//     }
// })

let arr = [22, 33, 44, 55, 66];

// const newArr = arr.filter(val => val < 44) 


// console.log(newArr);




// const newArr = arr.reduce((acc, cur) => {
//     acc = acc + cur;
//     return acc;
// });

// console.log(newArr);


let student = [
    {name:'Rinku', course:'B.Tech', branch: 'Cse'},
    {name:'Rohit', course:'B.Tech', branch: 'it'},
    {name:'Virat', course:'B.Tech', branch: 'Cse'},
    {name:'Mukesh', course:'B.Tech', branch: 'mec'},
    {name:'Akshar', course:'B.Tech', branch: 'ece'}
]


// const newArr = student.filter((val) => {
//         if(val.branch === 'it'){
//             return val
//         }
// })

// const newArr = student.filter(val => val.branch === 'it')

const newArr = student.filter((val) => {
    if(val.branch === 'Cse'){
        return val
    }
}).map((val) => val.name)

console.log(newArr);















// const arr3 = arr.filter((val) => val > 22)
// console.log(arr3);