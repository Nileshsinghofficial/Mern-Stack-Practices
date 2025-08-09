// const mainDiv = document.getElementById('mainDiv');
// const box = document.getElementById('div1')

// // boobling 

// box.addEventListener('click', () => {
//     console.log("Box")
// },true);

// mainDiv.addEventListener('click', () =>{
//     console.log("Main Div")
// });

// document.body.addEventListener('click', () => {
//     console.log("Body")
// },true);

// const box1 = document.querySelector('.box1');
// const box2 = document.querySelector('.box2');
// const items = document.getElementsByClassName('item');

// dragstart
// dragenter
// dragover
// dragleave
// dragend

// for(let item of items ){
//     item.addEventListener('dragstart', (e) => {
//         console.log(e.target)
//         box2.addEventListener('dragover', (e) =>{
//             e.preventDefault();
//         })

//         box2.addEventListener('drop', () =>{
//             box2.append(e.target);
//         })
//     })




    // item.addEventListener('dragenter', () => {
    //     console.log("drag enter");
    // })
    // item.addEventListener('dragover', () => {
    //     console.log("drag over");
    // })
    // item.addEventListener('dragleave', () => {
    //     console.log("drag leave");
    // })
    // item.addEventListener('dragend', () => {
    //     console.log("drag end");
    // })


// }

const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const items = document.getElementsByClassName('item');


for(let itm of items){
    // console.log(itm);
    itm.addEventListener('dragstart', (e) => {

        let data = e.target;
        
        // console.log(e.target);

        box2.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.stopPropagation();
        })

        box2.addEventListener('drop', () =>{
            box2.append(data)
            data = '';
        })
        
        box1.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.stopPropagation();
        })

        box1.addEventListener('drop', () =>{
            box1.append(data)
            data = '';
        })
    })
}
