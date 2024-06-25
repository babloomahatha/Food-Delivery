import mongoose from "mongoose";

export const connectDB=async()=>{
  await mongoose.connect('mongodb+srv://babloomahatha:7494914697@cluster0.iq0ndc0.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}