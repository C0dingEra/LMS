import mongoose from "mongoose";

const connectDb=async(req,res)=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongoDB connected successfully")
    } catch (error) {
        console.log("error occured",error)
    }
}

export default connectDb;