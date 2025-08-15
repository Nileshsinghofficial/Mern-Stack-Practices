// sessionStorage
// localStorage

// input alway string

// document.getElementById('btn').addEventListener('click', () => {
//     // localStorage.setItem('stores' , 'heloo ji')  //key - 'store', value - 'hello ji'
//     // let d = localStorage.getItem('store')
//     // console.log(d)  // Output: 'hello ji'
//     // let r = localStorage.removeItem('store');
//     // console.log(r)  // Output remove hello ji from local storage

//     // localStorage.clear()    // no need to put any key it remove all local storage
// })   

// document.getElementById('btn').addEventListener('click', () => {
//     sessionStorage.setItem('store' , 'heloo ji')

// }) 

// document.getElementById('in').addEventListener('input', (e) => {
//     localStorage.setItem('data', e.target.value);
//     document.getElementById('h1').innerText = localStorage.getItem('data')
// })
// document.getElementById('h1').innerText = localStorage.getItem('data')





document.getElementById('btn').addEventListener('click', (e) => {

    let names = document.getElementById('name').value;
    let rollnos = document.getElementById('rollno').value;

    // localStorage.setItem('data', JSON.stringify({name: 'nilesh', rollno: 100210560}))
    localStorage.setItem('data', JSON.stringify({name: names , rollno: rollnos}))
    document.getElementById('h1').innerText = JSON.parse(localStorage.getItem('data')).name
    document.getElementById('h2').innerText = JSON.parse(localStorage.getItem('data')).rollno

})

document.getElementById('h1').innerText = JSON.parse(localStorage.getItem('data')).name
document.getElementById('h2').innerText = JSON.parse(localStorage.getItem('data')).rollno
// console.log(typeof({name: 'nilesh', rollno: 100210560}))