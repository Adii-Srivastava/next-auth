"use client"
import React from 'react'
import AuthButton from './AuthButton'
import { loginWithCreds } from '@/actions/auth'

const LoginForm = () => {
  return (
    <div>
      <form action={loginWithCreds} className='w-full flex flex-col gap-4'>
        <div>
            <label className='block text-sm font-mediumtext-gray-200' htmlFor="">Email</label>
            <input
            type="text"
            placeholder='Enter your email'
            id='email'
            name='email'
            className='mt-1 w-full px-4 p-2 h-10 rounded-md border border-gray-200 bg-white text-sm text-gray-700 ' />
        </div>
        <div>
            <label className='block text-sm font-mediumtext-gray-200' htmlFor="">Password</label>
            <input
            type="password"
            placeholder='password'
            name='password'
            id='password'
            className='mt-1 w-full px-4 p-2 h-10 rounded-md border border-gray-200 bg-white text-sm text-gray-700 ' />
        </div>
        <div className='mt-4'>
            <AuthButton/>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
