import express from 'express';
import dotenv from 'dotenv'
import connectDb from './database/dbConnect.js';
dotenv.config();
const app=express();

const port=process.env.PORT || 5000;
app.listen(port,(req,res)=>{
    console.log(`server is running at ${port}`)
})

connectDb();