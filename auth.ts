import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import {prisma} from "@/prisma"
import GitHub from "next-auth/providers/github"
// import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { saltAndHashPassword } from "./utils/helper"
import bcrypt from "bcryptjs"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter:PrismaAdapter(prisma),
  session:{strategy:"jwt"},
  providers: [
    GitHub({
       clientId:process.env.GITHUB_AUTH_ID,
       clientSecret:process.env.GITHUB_AUTH_SECRET
    }),
    Credentials({
      name:"Credentials",
      credentials:{
        email:{label:"Email", type:"email"},
        password:{label:"Password", type:"password"},
      },
      authorize: async(credentials)=>{
         if(!credentials || !credentials.email || !credentials.password){
          return null;
         }

         const email=credentials.email as string
         const hash= saltAndHashPassword(credentials.password)

         let user:any= await prisma.user.findUnique({
          where:{
            email,
          }
         })

         if(!user){
          // user=await prisma.user.create({
          //   data:{
          //     email,
          //     hashedPassword: hash,
          //   }
          // })
          console.log("User don't exist. Plese Check your credentials or SignUp")
         }else{
           const isMatch= bcrypt.compareSync(
            credentials.password as string,
            user.hashedPassword
           );
           if(!isMatch){
            throw new Error("Incorrect Password");
           }
         }

         return user;
      } 
    })
  ],
})