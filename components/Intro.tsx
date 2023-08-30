'use client'
import React from 'react'
import logo from '@/public/logo.jpg'
import Image from 'next/image'
import {motion} from 'framer-motion'
import Link from 'next/link'
import { CgArrowRight, CgGitBranch, CgInstagram } from 'react-icons/cg'
import { FaDownload, FaGithubSquare, FaInstagram } from 'react-icons/fa'
import { LuGithub } from 'react-icons/lu'

const Intro = () => {
  return (

    <section id='Home'  className="scroll-m-20">
        <motion.div className='flex justify-center items-center'
        initial ={{ y: -100 , opacity:0}}
        animate = {{y:80, opacity:1, transition:{duration:2}}}
        >
             <div>
            <Image src={logo} alt='logo' className='w-[150px] h-[150px] rounded-full object-cover border-[0.4rem] border-white shadow-2xl'/>
             </div>

        </motion.div>

        <div className='justify-center pt-40 sm:w-[600px] w-[360px] text-center space-y-14'>
          <p>
<motion.span className='text-gray-900 font-bold sm:text[35px] text-[30px]'
initial ={{x:-1000, opacity:0}}
animate ={{x:0, opacity:1, transition : {duration:0.5}}}

>
  Hi, I'm Yahya Mahdi . <br className='' /> I'm
</motion.span>

<motion.span className='text-red-gradient  font-bold sm:text-[48px] text-[30px]'
initial ={{x:+100, opacity:0}}
animate ={{x:0, opacity:1, transition : {duration:0.5}}}

>
   {"  "} front-end-devloper <br />
</motion.span>
<motion.span className='sm:text-[20px]  text-[16px] text-gray-800 font-semibold sm:absolute'
initial ={{x:-500, opacity:0}}
animate ={{x:-160, opacity:1, transition : {duration:1, delay:0.5}}}
>
  With some months of experience,  {"  "}
</motion.span>
<br />
<motion.span className='sm:text-[28px] text-[12px] text-gray-800 font-semibold sm:absolute  '
initial ={{x:500, opacity:0}}
animate ={{x:-200, opacity:1, transition : {duration:0.5}}}

>
  I <span className='text-yellow-300'>enjoy</span> Building website using 
</motion.span>
<br />
<motion.span className='text-violet-500 text-[22px] font-bold underline mt-8 absolute  '
initial ={{x:-500, opacity:0}}
animate ={{x:-80, opacity:1, transition : {duration:1 , deplay:0.5}}}

>
  React (Next.js)
</motion.span>

          </p>
        </div>


<div className='pt-28 flex sm:flex-row flex-col gap-2 sm:w-[600px] w-[200px]  '>
<a href="mailto:yahyamahdi4242@gmail.com" className=' group bg-gray-900 text-white text-[16px]  font-bold px-3 py-3 flex items-center gap-2 rounded-full cursor-pointer outline-none focus:scale-110 hover:scale-110 hover:bg-pinky-100 transition '>
Contact me Here <CgArrowRight className=" group-hover:translate-x-2"/>
</a>

<a className=' group bg-slate-200 text-[16px] font-bold  px-3 py-3 flex  gap-2 rounded-full items-center cursor-pointer outline-none focus:scale-110 hover:scale-110 hover:bg-pinky-100 transition'>
  Download CV <FaDownload className=" group-hover:translate-y-1"/>
</a>
<div className='flex gap-3'>
<a href='https://instagram.com/y_mahdi__yahya?igshid=MmU2YjMzNjRlOQ==' className='bg-rose-200 text-[16px] font-bold  px-4 py-4 flex  gap-2 rounded-full items-center sm:block w-[50px] cursor-pointer outline-none focus:scale-150 hover:scale-150 hover:bg-pinky-100 transition'>
<FaInstagram/>
</a>
<a  href='https://github.com/yahyaFBA2006/portfolio1/tree/main' className='bg-teal-200 text-[16px] font-bold  px-4 py-4 flex  gap-2 rounded-full items-center sm:block w-[50px] cursor-pointer outline-none focus:scale-150 hover:scale-150 hover:bg-pinky-100 transition'>
< FaGithubSquare/>
</a>
</div>
</div>
    </section>
  )
}

export default Intro
