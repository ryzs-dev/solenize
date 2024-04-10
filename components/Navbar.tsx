import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='flex w-full p-[60px] justify-center items-center gap-[171px] bg-transparent absolute z-10'>
        <div className='flex justify-center items-center gap-[10px] bg-transparent'>
                <Image src='Solenize_Logo.svg' alt='solenize logo' width={359} height={100}/>
        </div>
        <div className='flex px-[40px] py-[20px] justify-end items-center gap-[24px] flex-[1_0_0]'>
            <a className='text-[#D0E4E5] font-[Inter] text-[20px] not-italic font-semibold leading-[normal] hover:text-primary cursor-pointer'>
                Whitepaper
            </a>
            <a className='text-[#D0E4E5] font-[Inter] text-[20px] not-italic font-semibold leading-[normal] hover:text-primary cursor-pointerc'>
                Community
            </a>
            <a className='text-[#D0E4E5] font-[Inter] text-[20px] not-italic font-semibold leading-[normal] hover:text-primary cursor-pointer'>
                Pricing
            </a> 
            <a className='text-[#D0E4E5] font-[Inter] text-[20px] not-italic font-semibold leading-[normal] hover:text-primary cursor-pointer'>
                Support
            </a>
        </div>
    </nav>
  )
}

export default Navbar