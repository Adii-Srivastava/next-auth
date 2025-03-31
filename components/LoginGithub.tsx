'use client';
import { login } from '@/actions/auth'
// import { signIn } from '@/auth'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

type Props = {}

const LoginGithub = (props: Props) => {
  return (
    <div 
    // onClick={ async()=> { 
    //   "use server"
    //   await signIn("github",{redirectTo:"/"})}}
    onClick={()=>login("github")}
      className='w-full gap-4 hover:cursor-pointer hover:bg-slate-700 mt-6 h-12 bg-slate-600 rounded-md p-4 flex items-center justify-center'
    >
      <FaGithub className='w-6 h-6 text-white'/>
      <p className='text-white'>Sign In with Github</p>
    </div>
  )
}

export default LoginGithub