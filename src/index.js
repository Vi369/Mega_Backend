// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
import connetToDb from "./db/db.js";

//config dotenv file
dotenv.config({
    path: './env'
})

//connect to the database 
connetToDb();






/*
;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    } catch (error) {
        console.log("Error", error)
    }
})();**/
