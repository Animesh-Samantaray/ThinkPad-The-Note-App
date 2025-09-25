import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.MONGO_URI;
export const connectDb=async()=>{
    try{
        console.log(uri);
        
        await mongoose.connect(uri);
        console.log('MOngoDB connected successfully');
        
    }
    catch(error){
                console.log(error.message);
    }
}
