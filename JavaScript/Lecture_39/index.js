// function hello(para){
//     console.log("insider function");
//     // console.log(para);
//     para()
// }



// function cb(){
//     console.log("insider function 1");
// }


// function hello(){
//     console.log("insider function");
// }


// function cb(para){
//     console.log("inder function 1")
//     // console.log(para)
//     para()
// }

// cb(hello);

// function hello(text, para){
//     console.log('inside hello');
//     para(text);
// }

// hello('hello', function cb(data){
//     console.log('inside callback', data);
// });



// function nilesh(text, para){
//     console.log(text);
//     console.log('Ye nilesh wla fucntion hai')
//     console.log(para)
//     para(text);

// }

// nilesh('Nigam',function cb(name){
//     console.log("ye fuctiob call ka hai", name);
// })

// function fun1(text){
//      const a = 4;
//     function fun2(){
//         console.log(a);
//     }
//     return fun2;

// }

// const res = fun1('from fun 1');
// res()

// setInterval(function call , delay);




  
// setInterval( () => {
//     console.log("Hello");
// }, 5000);


// const body = document.getElementsByTagName('body');

// let color = '';



// const smallLetter = 'abcdef';
// const numberStr = '0123456789';

// let rangeColor = smallLetter + numberStr;


// for(let i = 0; i < 6; i++){
//     let randNum = Math.floor(Math.random() * rangeColor.length);
//     color = color + rangeColor[randNum];


// }
// // console.log(a)
// let a = '#' + color;

// // document.body.style.backgroundColor = a;

// console.log(a);


// setInterval(() => {
//     document.body.style.backgroundColor = a
// },1000)


// const body = document.getElementsByTagName('body')

// const smallLetter = 'abcdef';
// const numberStr = '0123456789'

// const colorRange = smallLetter + numberStr;

// setInterval( () => {
//     let color = '';
//     for(let i = 0; i < 6; i ++){
//         let randNum = Math.floor(Math.random() * colorRange.length);
//         color += colorRange[randNum];
//     }
//     let a = '#' + color;
   

//     function hasLetter(color){
//         if(!/[a-f]/.test(color)) return false;
//         return true;
//     }

//     if(hasLetter(color)){
//         body[0].style.backgroundColor = a;
//         console.log("Applied color ",a);
//     } else {
//         console.log("Generated color dit not have ", a);
//     }

// }, 10000);


// function fun1(text){
//     console.log("starting Fun");
//     setTimeout(function hello() {
//         console.log(text);
//     },2000)

//     console.log("ending fun");

//     text = 'changed';


// }


// fun1('nice');

// function fun1(){
//     for(let i = 0; i < 5; i++){
//         setTimeout(function hello() {
//             console.log(i)
//         }, i * 2000)
//     }
// }

// fun1();


// function fun1(){
//     for( var i = 0; i < 5; i++){
//         (function(j){
//             setTimeout( function hello() {
//                 console.log(j)
//             },  j * 1000);
//         }) (i);
        
//     }
// }

// fun1();

// function fun2(){
//     for(var i = 0; i < 5; i++){
//         (function(j){
//             setTimeout( function hello(){
//                 console.log(j)
//             }, 1000)
//         }) (i);
//     }
// }

// fun2();


// function fun1(){
//     for(var i = 0; i < 5; i++){
//         function inner(i){
//             setTimeout(function hello() {
//                 console.log(i);
//             }, i *1000);
//         }
//         inner(i);
//     }
// }

// fun1();




// function fun1(){
//     for(var i = 0; i < 5; i++){
//         let j = i;
//             setTimeout(function hello() {
//                 console.log(j);
//             }, j *1000);
        
//     }
// }

// fun1();

// function fun1() {
//     for (var i = 0; i < 5; i++) {
//         (function(j) {
//             setTimeout(function hello() {
//                 console.log(j);
//             }, j * 1000);
//         })(i);
//     }
// }

// fun1();



