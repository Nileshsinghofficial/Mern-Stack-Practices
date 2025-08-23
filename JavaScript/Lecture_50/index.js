

let student = {
    name: 'Nilesh',
    rollNo: 100210560,
    // printInfo: function(){
    //     console.log(`Name: ${this.name}, Roll No: ${this.rollNo}`)
    // }
};

let student2 ={
    name: 'Arun',
    rollNo: 100210562,
};

let student3 = {
    name: 'Amit',
    rollNo: '100210563'
};

function printInfo(branch, cgpa){
    console.log(
        `Name: ${this.name}, RollNo: ${this.rollNo}, Branch:${branch}, CGPA:${cgpa}`
    )
}

// student.printInfo.call(student2)    
// use call() method in prototype
// printInfo.call(student, 'IT', '7.70')
// printInfo.call(student2, 'IT', '7.10');
// printInfo.call(student2, 'CSE', '6.70');

//use apply() prototype   in given extra paira meter in array []

// printInfo.apply(student, ['IT','7.70']);
// printInfo.apply(student2, ['IT','7.10']);
// printInfo.apply(student3, ['CSE','6.70']);

// use bind this give a in return funtion need to store and call

let newinfo = printInfo.bind(student, 'IT','7.70');
newinfo();
