const btn = document.getElementById('genPass');
const newPass = document.getElementById('newPass');
const slider = document.getElementById('range');
const rangeVal = document.getElementById('rangeVal')
// const savePdf = document.getElementById('savePdf');

const upprCase = document.getElementById('capLet');
const lowerCase = document.getElementById('samLet');
const number = document.getElementById('number');
const symbol = document.getElementById('symbol');
const copyBtn = document.getElementById('copyBtn');

rangeVal.innerText = slider.value

slider.addEventListener('input', (e) => {
    rangeVal.innerText = e.target.value
})


btn.addEventListener('click', () =>{

    const capitalLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const smallLetter = 'abcdefghijklmnopqrstuvwxyz';
    const numberStr = '0123456789';
    const symbolsStr = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~'


    let finalStr = '';

    if(upprCase.checked){
        finalStr += capitalLetter;
    }
    if(lowerCase.checked){
        finalStr += smallLetter;
    }
    if(number.checked){
        finalStr += numberStr;
    }

    if(symbol.checked){
        finalStr += symbolsStr;
    }


    if(finalStr === ''){
        alert("Please Select any one field")
    }

  function containsRequiredChars(password) {
    if (number.checked && !/[0-9]/.test(password)) return false;
    if (upprCase.checked && !/[A-Z]/.test(password)) return false;
    if (lowerCase.checked && !/[a-z]/.test(password)) return false;
    if (symbol.checked && !/[!@#$%^&*()_+\-={}\[\]<>?/]/.test(password)) return false;
    return true;
    }
 
    // function containsRequiredCharss(password){
    //     if(number.checked && !/[0-9]/.test(password)){
    //         return false
    //     }
    //     if(upprCase.checked && !/[A-Z]/.test(password)){
    //         return false
    //     }
    //     if(lowerCase.checked && !/[a-z]/.test(password)){
    //         return false
    //     }
    //     return true
    // }

    let latestPass = '';
    do {
    latestPass = '';
    for (let i = 0; i < slider.value; i++) {
        let randNum = Math.floor(Math.random() * finalStr.length);
        latestPass += finalStr.charAt(randNum);
    }
    } while (!containsRequiredChars(latestPass));


     newPass.innerText = `${latestPass}`


    // savePdf.addEventListener('click', () => {
    // const { jsPDF } = window.jspdf;
    // const doc = new jsPDF();

    // doc.text("Your Generated Password:", 10, 20);
    // doc.text(latestPass || "No password generated yet", 10, 30);

    // doc.save("password.pdf");
// });
})

copyBtn.addEventListener('click', () => {
    window.navigator.clipboard.writeText(newPass.innerText)
        .then(() => {
            // Show "Copied" message
            copyBtn.innerText = 'Copied!';
            
            // Reset button text after 2 seconds
            setTimeout(() => {
                copyBtn.innerText = '';
            }, 2000);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
});


