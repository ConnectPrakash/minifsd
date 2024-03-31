import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config()
try{
   mongoose.connect(`mongodb+srv://pp3662504:pp3662504@cluster0.kztmo7u.mongodb.net/minifsd`)
    if(mongoose){
        console.log("mongoDB connected Successfully")
    }
}catch (error){
    console.log(error)
}

export default mongoose