import { NextResponse } from "next/server"
import connectDB from "@/libs/config/mongodb"
import User from "@/libs/models/user"
export const POST = async(request:Request)=>{
  const {username, email, password} = await request.json()
  console.log("")
  try {
    await connectDB()
    await User.create({username, email, password})
    console.log("User created")
    return NextResponse.json({message:"User created"})
  } catch (error) {
    console.log(error)
    return NextResponse.json({message:"User create Error", error})
  }

}

export const GET = async(request:Request)=>{
  try {
    const url = new URL(request.url) ;
    const  email = url.searchParams.get("email")
    console.log(email)
    await connectDB()
    const user = await User.findOne({email:"nifaduzzaman2005@gmail.com"})
    console.log("user1",user)
    return NextResponse.json({user})
  } catch (error) {
    console.log(error)
  }
}
