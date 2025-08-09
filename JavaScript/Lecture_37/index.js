// Event Propagation

// const demo = document.getElementById('ptag');
// console.log(demo.innerHTML);

const btn = document.getElementById('btn');
// btn.onclick = () => {
//     console.log("Hello");
// }


// btn.addEventListener('click', function(event){
//     console.log(event)
//     console.log("Hello i am event listener");
// });


// btn.addEventListener('click', () =>{

// });

// btn.addEventListener('click', function(){

// });

const body = document.querySelector('body');
// body.style.backgroundColor = 'white';



// btn.addEventListener('click', (e) => {
//     // btn.innerText = 'Hello';
//     // e.target.innerText = 'Change'
//     const ischange = confirm('are You want change color ?');
//     if(ischange){
//         // body.style.backgroundColor = 'black';
//         const colorchange = document.body.style.backgroundColor;
//         document.body.style.backgroundColor = colorchange === 'white' ? 'blue' : 'white';

//     }
  
//     // body.style.backgroundColor = 'white';
//     console.log(e.target);
//     console.log('This is event listerner');

// });

// btn.addEventListener('click',() => {
//     const isChange = confirm('are you want change ?');

//     if(isChange){
//         const colorName = prompt('which color');

//         body.style.backgroundColor = `${colorName}`
//     } 
// })



// work chnage color as input filed click submit and changed

// const submit = document.getElementById('submit');
// ;

// const colorNames = document.getElementById('colorName');


// submit.addEventListener('click', (e) => {
//     e.preventDefault();
    
//    const colorvalue = colorNames.value
//    body.style.backgroundColor = `${colorvalue}`
// //    console.log(backg);
    
// })

const range = document.getElementById('colorName');
const pTags = document.createElement('p');


document.body.appendChild(pTags);


range.addEventListener('input', (event) => {
    // event.preventDefault();
    pTags.innerText = range.value
    
})