
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CartIcon from './CartIcon'
import Menu from './Menu'

const Navbar = () => {
  return (
    <div className='h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 font-normal uppercase md:h-24 lg:px-20 xl:px-40'>
      
      <div className='hidden md:flex gap-4 flex-1'>
        <Link href={"/"} >Homepage</Link>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/"}>Contact</Link>
      </div>

      <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link href={"/"}>Massimo</Link>
      </div>

      <div className='md:hidden'><Menu/></div>

      
      <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
        <div className='md:absolute topi-3 r-2 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md'>
          <Image src={"/phone.png"} alt="phone" width={20} height={20} />
          <span>1 234 567 890</span> 
        </div>
        <Link href={"/login"}>Login</Link>
        <CartIcon/>
      </div>
    </div>
  )
}

export default Navbar