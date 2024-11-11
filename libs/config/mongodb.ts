import mongoose from "mongoose"


const connectDB = async()=>{
  try {
    await mongoose.connect(process.env.MONGODB_URL as string)
    console.log("Connected DB.")
  } catch (error) {
    console.log("Failed to connectDB")
  }
}
export default connectDB;