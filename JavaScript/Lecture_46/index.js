// async function api1() {
//     try{
//         let responce = await fetch('https://ccsu-backend-production.up.railway.app')
//         console.log("status ", responce.status)
//         // if(!responce.ok){
//         //     throw new Error(`HTTP error status: ${responce.status}`)
//         // }
//         let result = await responce.text();
//         console.log(result)
//     } catch(err) {
//         console.error(err);
//     }

// }

// api1();


async function api(){
    try{
        let responce = await fetch('https://www.google.com');
        let result = await responce.json()
        console.log(result);
    } catch(err){
        console.log(err);
        // throw new Error("problem: " + err.message);

    }

}

api();


