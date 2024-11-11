import connectDB from "@/libs/config/mongodb"
import Product from "@/libs/models/product"
import mongoose, { mongo } from "mongoose"
import { NextResponse } from "next/server"

export const POST = async(request:Request)=>{
  try {
    const products = await request.json()
    const newProducts = products.filter((product:any)=>mongoose.Types.ObjectId.isValid(product.seller))
    newProducts.forEach((product:any) => {
        product.seller = new mongoose.Types.ObjectId(product.seller);
      }
    )
    
    await connectDB()
    await Product.insertMany(newProducts)
    return NextResponse.json({message:"Product created."},{status:201})
  } catch (error) {
    console.log("Inser many error : ",error)
    return NextResponse.json({message:"Product creating error.",error})
  }
}