import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URL).then(()=>console.log('connected to DB')).catch((err)=>console.log(`some error occured while conneting to database: ${err}`))
}