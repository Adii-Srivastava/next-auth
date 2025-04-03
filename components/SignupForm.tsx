"use client"
import React from 'react'
import AuthButton from './AuthButton'
import {signupWithCreds} from '@/actions/auth'
import Link from 'next/link'

const SignupForm = () => {
  return (
    <div>
      <form action={signupWithCreds} className='w-full flex flex-col gap-4'>
        <div>
            <label className='block text-sm text-gray-200 font-bold text-center ' htmlFor="">Name</label>
            <input
            type="text"
            placeholder='Enter your name'
            id='name'
            name='name'
            className='mt-1 w-full px-4 p-2 h-10 rounded-md border border-gray-200 bg-white text-sm text-gray-700 ' />
        </div>
        <div>
            <label className='block text-sm text-gray-200 font-bold text-center ' htmlFor="">Email</label>
            <input
            type="text"
            placeholder='Enter your email'
            id='email'
            name='email'
            className='mt-1 w-full px-4 p-2 h-10 rounded-md border border-gray-200 bg-white text-sm text-gray-700 ' />
        </div>
        <div>
            <label className='block text-sm font-bold text-center text-gray-200' htmlFor="">Password</label>
            <input
            type="password"
            placeholder='password'
            name='password'
            id='password'
            className='mt-1 w-full px-4 p-2 h-10 rounded-md border border-gray-200 bg-white text-sm text-gray-700 ' />
        </div>
        {/* <div>
            <label className='block text-sm font-bold text-center text-gray-200' htmlFor="">Profile Image</label>
            <input
            type="file"
            // placeholder='password'
            name='image'
            id='image'
            accept='image/png, image/jpg, image/jpeg, image/gif'
            className='mt-1 w-full px-4 p-2 h-10 rounded-md border border-gray-200 bg-white text-sm text-gray-700 ' />
        </div> */}
        <div className='mt-4'>
            <AuthButton/>
        </div>
        <div className=''>
           <p className='text-center'>Already have an account? <Link className='hover:text-blue-500' href={"/sign-in"}>Sign-In</Link></p>
        </div>
      </form>
    </div>
  )
}

export default SignupForm