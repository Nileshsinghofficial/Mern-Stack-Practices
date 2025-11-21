
// import fs from 'fs'

const fs = require('fs')
const os = require('os')


// const res = fs.writeFileSync(__dirname +"/abc.text", "hello dearll jj sir")


// const ret = fs.writeFile(`${__dirname}/abcd.txt`, "Hello Nilesh", function (err){
//     if(err) throw err;
//     console.log("The file has been saved!")
// })


// fs.writeFile((__dirname)+"/TEXT.txt", "Hello ji its is Text", function (err){
//     if(err) throw err;
//     console.log("Your Text file saved")
// })

// let data = fs.readFileSync(__dirname + "/TEXT.txt", "utf-8")
// console.log(data)

// let data2 = fs.readFile(__dirname + "/abcd.txt", 'utf-8', (err, data) => {
    //     if(err) throw err;
    //     else {
        //         console.log(data2)
        //     }
        // })

// let data = "a".repeat(1 * 1024 * 1024)
// let data2 = fs.writeFileSync((__dirname + "/abcd.txt"), data)

// fs.unlink(__dirname + '/abc.text', (err) => {
//     if (err) throw err;
//     console.log("deleted")
// })

// fs.appendFile((__dirname + "/TEXT.txt"), "Hello Nilesh Ji", (err) => {
//     if (err) throw err;
//     console.log("done")
// })


// fs.copyFile((__dirname +'/TEXT.txt'), (__dirname + "/abc.txt"), (err) => {
//     if (err) throw err;

//     console.log("Data copy done")
// })

// fs.mkdir((__dirname +"/Hello/IT"),{recursive: true}, (err) => {
//     if (err) throw err;
// })

// fs.rmdir((__dirname + "/Hello"), (err) => {
//     if (err) throw err;
//     console.log("remove sussesuful")
// })

 

// let data  =  fs.readdirSync(__dirname.replace("Lecture_69_fs_module", "lecture_68"), {withFileTypes: true})
// console.log(data)

// console.log(os.cpus().length)
console.log(os.arch())




 