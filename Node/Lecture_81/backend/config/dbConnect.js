const mongoose = require("mongoose");
// import mongoose from "mongoose"

async function dbConnect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/myfirstDb')
        console.log("Db Connect Successufully ✅ ")
        
    } catch (error) {
        console.log("Err in connect db ⚠️")
        console.log(error.message)
    }
}

// export default mongoose;

module.exports = dbConnect;