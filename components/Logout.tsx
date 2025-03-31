'use client'
import { logout } from '@/actions/auth'
import React from 'react'

type Props = {}

const Logout = (props: Props) => {
  return (
    <div onClick={()=>logout()} className='bg-gray-600 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded-md cursor-pointer'>Logout</div>
  )
}

export default Logout