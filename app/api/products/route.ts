import connectDB from "@/libs/config/mongodb";
import Product from "@/libs/models/product";
import { NextResponse } from "next/server";



export const POST = async (request:Request)=>{
  try {
    const product = await request.json()
    await connectDB()
    await Product.create(product)
    return NextResponse.json({message:"Product created."},{status:201})

  } catch (error) {
    return NextResponse.json({message:"Product creating error.",error})
  }
}

