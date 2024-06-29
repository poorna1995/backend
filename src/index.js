//  mongoose wil connect the database

// require("dotenv").config({ path: "./env" });
// import mongoose, { connect } from "mongoose";
// import { DB_NAME } from "./constants";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/dbConnect.js";

// const app = express();

dotenv.config({ path: "./env" });

connectDB();

// write a try and catch block to check if connection is established or not

//  data base is always an another continenet always take time so add async

// function connectDB() {}

//   async () => {
//     try {
//       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//       app.on("error",()=>{
//         console.log("Error:",error);
//         throw err
//       });
//       app.listen(process.env.PORT,()=>{
//         console.log(`App is listening on port ${process.env.PORT}`)
//       })
//     } catch (error) {
//       console.error("ERROR", error);
//       throw err;
//     }
//   }
// }();

// connectDB();
