// scope

// 1. Global Scope
// 2. Block Scope
// 3. Function Scope


// Global Scope

// {
//     var var = 'Nilesh'
//     // console.log(name)
// }

// {
//     console.log(name)
// }


// Block Scope

// {
//     let name = 'Nilesh'
//     console.log(name)

// }


// console.log(name)


// function scope

// function hello(){
//     const name = 'NILESH'
//     console.log(name);
// }


// call hello()

// hello()
// console.log(name); not scope outside function



function hello(){
    const name = 'Nilesh'
    console.log(name);

    function hello2(){
        const naam = 'Nigam'
        console.log(naam);
    }

    hello2();
}

hello();