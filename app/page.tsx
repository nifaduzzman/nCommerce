"use client"
import Hero from "@/components/Hero";
import HomePageProduct from "@/components/HomePageProduct";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const {data:session }= useSession()
  console.log("This is user",session?.user?.email)
  return (
    <main className="w-full h-screen 
    ">
      <Hero/>
      <HomePageProduct/>
      
    </main>
  );
}
