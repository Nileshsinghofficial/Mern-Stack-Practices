// let arr = [2,4,5,6,7,3,5]
// console.log(arr[1]);
// console.log(arr[4]);
// console.log(arr[5]);

// arr.push(10,12)
// arr.pop()
// let newArr = arr.concat(45,46,48)
// console.log(newArr);  

// let ret = arr.indexOf(6);
// console.log(ret);


// let newArr = arr.join("-")
// console.log(newArr);

// let arr = [2,4,5,6,7,3,9]

// let [two, four, five, six, seven, three, nine ] = arr
// console.log(nine); 
// console.log(arr.indexOf(nine));


// Object


// const obj = {
//     name: 'Nilesh',
//     id: 100210560,
//     course: 'B.Tech',
//     Branch: 'CSE',
//     Hosteller: true
// };

// console.log(obj['Branch']);
// console.log(obj.id);


// const student = [
//     {
//         name: 'Nilesh',
//         id: 100210560,
//         course: 'B.Tech',
//         Branch: 'CSE',
//         Hosteller: true
//     },
//     {
//         name: 'Nitesh',
//         id: 100210560,
//         course: 'B.Tech',
//         Branch: 'IT',
//         Hosteller: true
//     },
//     {
//         name: 'Nisan',
//         id: 100210560,
//         course: 'B.Tech',
//         Branch: 'ECE',
//         Hosteller: true
//     },
//     {
//         name: 'Nitin',
//         id: 100210560,
//         course: 'B.Tech',
//         Branch: 'SE',
//         Hosteller: true
//     },
//     {
//         name: 'Nirupam',
//         id: 100210560,
//         course: 'B.Tech',
//         Branch: 'CSE',
//         Hosteller: true
//     },
//     {
//         name: 'Nigam',
//         id: 100210560,
//         course: 'B.Tech',
//         Branch: 'IT',
//         Hosteller: true
//     }
// ];

// console.log(student[5].name);
// console.log(student[4].name);
// console.log(student[3].name);
// console.log(student[2].name);

// let arr = [2,4,5,6,7,3,9]


// for(let val of arr){
//     console.log(val);
// }



// const obj = {
//     name: 'Nilesh',
//     id: 100210560,
//     course: 'B.Tech',
//     Branch: 'CSE',
//     Hosteller: true
// };


// for(let val in arr){
//     console.log(arr[val])
// }



// of array ke liye for loop hota hai aur in object ke liye


// const obj = {
//     name: 'Nilesh',
//     id: 100210560,
//     course: 'B.Tech',
//     Branch: 'CSE',
//     Hosteller: true 
// };

// for(let val of Object.keys(obj)){
//     console.log(val);
// }

// for(let val of Object.values(obj)){
//     console.log(val) 
// }

// let str = 'Sumit'
// console.log(`${str} ji`);

let arr = [2,4,5,6,7,3,9]
// console.log(arr.slice(1,4));
// console.log(arr.splice(1,4))  // make new arr include last index in splice 
// console.log(arr);


// let arr2 = [23,45,2]
// const newArr = arr.concat(arr2)
// arr.push(arr2);

// console.log(newArr);
// console.log(arr);


const obj = {
    name: 'Nilesh',
    id: 100210560,
    course: 'B.Tech',
    Branch: 'CSE',
    Hosteller: true 
};

const obj2 = {
    name: 'Nigam',
    id: 100210570,
    course: 'B.Tech',
    Branch: 'IT',
    Hosteller: true 
};

// let newObj = {obj,...obj2}
// console.log(newObj);

const {name, id, course, ...remains} = obj
console.log(name,id);
console.log(remains);


