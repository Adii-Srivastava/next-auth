import { auth } from '@/auth';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import Logout from './Logout';

type Props = {}

const Navbar = async (props: Props) => {
  const session= await auth();
  return (
    <nav className='border-b border-gray-300 bg-background w-full flex items-center'>
        <div className='flex w-full items-center justify-between my-4'>
            <Link href={'/'} className='font-bold'>
            Home
            </Link>
            <div className='flex items-center gap-x-5'>
                <Link href={"/dashboard"}>Dashboard</Link>
                
            </div>

            <div className='flex items-center gap-x-5'>
              {!session?.user ? (
                 <Link href={"/sign-in"}>
                 <div className='bg-indigo-500 text-white px-4 py-2 rounded-md'>Sign In</div>
                 </Link>
              ): (
                <Logout/>
              )}
            
        </div>
        </div>

        
    </nav>
  )
}

export default Navbar
