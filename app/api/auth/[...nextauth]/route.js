import NextAuth from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";
const nextAuthOptions = {
  providers:[

    CredentialsProvider({
      name:"credentials",
      credentials:{},
      async authorize(credentials){
        console.log("Credential data", credentials)
        const res = await fetch(`http://localhost:3000/api/users?email=${credentials.email}`)
        const {user} = await res.json()
        console.log(user)
        console.log("Helo")

        if(!user){
          return null
        }
        if(user.password !== credentials.password){
          return null
        }
        return user;
      },
    })
  ],
  pages:{
    signIn:"/login"
  },
  session:{
    strategy:'jwt'
  },
  secret:process.env.NEXTAUTH_SECRET
}

const hanlder = NextAuth(nextAuthOptions)

export {hanlder as GET, hanlder as POST}