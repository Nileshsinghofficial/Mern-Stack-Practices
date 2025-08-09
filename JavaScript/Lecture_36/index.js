// Document Object model 



//Element Selection Way   

// const heading = document.getElementById('heading');
// console.log(heading.innerText);
// heading.innerHTML = 'hello Nilesh ji'

// const heading = document.getElementsByTagName('h1')
// console.log(heading[1].innerText);


// const heading = document.getElementsByClassName('hello');
// console.log(heading[0].innerHTML);

// const heading1 = document.getElementById('heading1');
// heading1.innerHTML = '<i>Tello</i>'
// // console.log(heading1.innerText)


// const quer = document.querySelectorAll('h1')
// console.log(quer)  

// const submit = document.querySelector('input[type=submit]')
// console.log(submit);

// const IDSelect = document.querySelector('#heading1')
// console.log(IDSelect.innerHTML);

//use style using 

// const Tagselect = document.querySelector('h1')
// console.log(Tagselect.style.backgroundColor = 'blue')

// Select for all same tag

// const TagsAll = document.querySelectorAll('h1');

// TagsAll.forEach(element =>{
//     element.style.backgroundColor = 'blue';
// });


//h1 tag backgroun color orange , and border 2px solid red

// const bckgndclr = document.querySelectorAll('h1');

// bckgndclr.forEach(element => {
//     element.style.color = 'white';
//     element.style.backgroundColor= 'black';
//     element.style.border = '1px solid red';
// });


// const heading = document.querySelector('h1');
// heading.setAttribute('class', 'hello hello3')

//u can set another attribute also

// heading.setAttribute('style', 'background-color: red');

// remove attribute like id class and some...
// heading.removeAttribute('id')

// const newTag = document.createElement('p');
// newTag.setAttribute('id', 'paira');
// newTag.innerHTML = 'This is Paragraph tag';

// const body = document.getElementsByTagName('body');
// body[0].append(newTag);
// console.log(newTag);


let data = ['Monitor', 'Laptop', 'Mic', 'Mouse', 'Keyword'];

// const ul = document.getElementById('specs');
// const liTag = document.createElement('li');
// liTag.innerHTML = 'Monitor'
// ul.append(liTag);


data.forEach(element => {
    // console.log(element)
    const ul = document.getElementById('specs');
    const liTag = document.createElement('li');
    // liTag.setAttribute('style', 'background-color:pink');
    liTag.style.backgroundColor = 'pink'
    liTag.style.margin = '5px';
    liTag.style.padding = '5px';
    liTag.style.justifyContent = 'center';
    liTag.style.textAlign = 'center';
    liTag.innerText = element;
    ul.appendChild(liTag);
});