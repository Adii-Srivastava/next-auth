'use server'

import { signIn, signOut } from "@/auth"
import { prisma } from "@/prisma";
import { saltAndHashPassword } from "@/utils/helper";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation";


const getUserByEmail = async (email: string) => {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      return user;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

export async function login(provider:string){
    await signIn(provider,{redirectTo:'/'})
    revalidatePath('/')
}

export async function logout(){
    await signOut({redirectTo:'/sign-in'})
    revalidatePath('/sign-in')
}


export const loginWithCreds= async(formData:FormData)=>{
     const rawFormData={
        email:formData.get("email"),
        password:formData.get("password"),
        role: "USER",
        redirectTo: "/"
    };

    const existingUser = await getUserByEmail(formData.get("email") as string)
    console.log(existingUser)

    try{
         await signIn("credentials", rawFormData)
    }catch(error:any){
        if(error instanceof AuthError){
            switch(error.type){
                case "CredentialsSignin":
                    return {error:"Invalid credentials"};
                default:
                    return {error: "Something went wrong!"}
            }
        }

        throw error;
    }

    revalidatePath("/");
} 

export const signupWithCreds=async(formData:FormData)=>{
  const rawFormData={
    email:formData.get("email"),
    password:formData.get("password"),
    name:formData.get("name"),
    // image:formData.get("image"),
    role: "USER",
    redirectTo: "/"
  }

  // let user= await getUserByEmail(formData.get("email") as string)
  // console.log(user)

  // if(user){
  //   console.log("Already exists with this email Id");
  //   console.log(user)
  // }else{
  //   const hash= saltAndHashPassword(formData.get("password"))
  //   user=await prisma.user.create({
  //     data:{
  //       email:formData.get("email"),
  //       hashedPassword: hash,
  //     }
  //   })
  // }

      const email=formData.get("email") as string
      const hash=saltAndHashPassword(formData.get("password"))
      const name= formData.get("name") as string
      // const image=formData.get("image") as string

      let user:any= await prisma.user.findUnique({
        where:{
          email,
        }
      })
 
      if(!user){
        user=await prisma.user.create({
          data:{
            email,
            hashedPassword: hash,
            name,
            // image,
          }
        })
        
      }else{
        console.log("User already Exists with this mail")
        console.log(user)

      }
        
      
      revalidatePath("/");
      redirect("/sign-in")
      // return user;
      
}