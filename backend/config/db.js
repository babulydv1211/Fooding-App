import mongoose from "mongoose";

 export const connectDB=async ()=>{
    try{
        await mongoose.connect('mongodb+srv://bkpri9955:gymspyViCDq09Vfm@cluster0.xc7eu.mongodb.net/food-del');
    console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Failed:", error.message);
        process.exit(1); // Exit process if DB connection fails
      }
   
}
