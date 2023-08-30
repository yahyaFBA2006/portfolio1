 'use client'
 import React from 'react'
import {motion} from 'framer-motion'

import { links } from '@/lib/data' 

const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100
  }


const Header = () => {
  return (
<header className='z-[999] relative '>
<motion.div className='  bg-green-gradient fixed h-[3rem] sm:w-[50%] w-[80%] rounded-full border border-white m-10 justify-center  overflow-hidden'

initial ={{ x: -100 , opacity:0}}
animate = {{x:0, opacity:1, transition : {duration:1}}}

>
    
<nav className='flex  justify-center  text-gray-600 font-bold md:text-[16px] text-[10px]  p-3 '>
<ul className='flex md:space-x-8 space-x-3'>
    {links.map((link, index) => (
        <li
        
        key={link.name} 
        className='flex justify-center hover:text-red-500 hover:bg-rose-100 hover:rounded-full hover:pl-2 hover:pr-2 hover:transition duration-700 cursor-pointer'
        >
            <a href={` #${link.name}`}>
                {link.name}
            </a>
            </li> 
    ))}
</ul>
</nav>
</motion.div>


</header>
  )
}

export default Header
