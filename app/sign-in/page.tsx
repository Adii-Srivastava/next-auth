import React from 'react'
import LoginGithub from "@/components/LoginGithub"
import LoginForm from '@/components/LoginForm'
// import LoginGoogle from '@/components/LoginGoogle'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='w-full flex mt-20 justify-center'>
      <div className='flex flex-col w-[400px]'>
         <h1 className='text-4xl w-full text-center font-bold mb-10'>Sign In</h1>
         <LoginForm/>
         <p className='border-t-1 mt-3 border-gray-500'></p>
         <LoginGithub/>
         {/* <LoginGoogle/> */}
      </div>
    </div>
  )
}

export default page