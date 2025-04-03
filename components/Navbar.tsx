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
                <div className='flex items-center'>
                 <Link href={"/sign-in"}>
                 <div className='bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 mr-2'>Sign In</div>
                 </Link>
                 <Link href={"/sign-up"}>
                 <div className='bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600'>Sign Up</div>
                 </Link>
                </div>
              ): (
                <div className='flex items-center gap-x-2 text-sm '>
                  {session.user.image &&(
                    <Image
                    src={session.user.image}
                    width={40}
                    height={40}
                    alt='User Avatar'
                    
                    className='rounded-full border border-white hover:cursor-pointer'
                    />
                  )}
                  {session.user.name}
                  <Logout/>
                </div>
                
              )}
            
        </div>
        </div>

        
    </nav>
  )
}

export default Navbar
