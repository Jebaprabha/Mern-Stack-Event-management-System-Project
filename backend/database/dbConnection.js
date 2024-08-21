import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose
    .connect(
    process.env.MONGO_URI,
    {dbName: "MERN_STACK_EVENT"})
    .then(()=>{
        console.log("Database connected");
    })
    .catch(err=>{
        console.log("some error occured:",err);
    });
};