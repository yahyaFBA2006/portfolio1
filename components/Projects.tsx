'use client'

import React, { useRef } from 'react'
import {projectsData } from '@/lib/data'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useScroll } from 'framer-motion'
const Projects = () => {

    function Project ({title,description,tags,imageUrl,} : ProjectProps)   
    {
      const ref =useRef<HTMLElement>(null);
const {scrollYProgress} = useScroll ({
target : ref,
offset:["0 1", "1.33 1" ]
});



return <section id='Projects'  className="scroll-m-64">
 <section   className='bg-gray-100 sm:w-[700px] sm:[350px] border border-black/5 overflow-hidden justify-center mr-2 mt-2  pl-4 pt-4 focuse:scale-110 hover:scale-110 rounded-xl  group transition duration-700 mb-10 sm:block hidden'>     
<div className=''>
<h1 className='text-gray-950 mb-4 font-bold text-[20px] '>
    {title}
</h1>


<div className='flex justify-between'>
<p className='text-gray-700 font-semibold text-[16px] w-[300px]'>
    {description}
</p>
<Image src={imageUrl} quality={80} className='w-[130px] h-[100px] rounded-t-lg group-hover:-translate-x-28  transition duration-500 sm:block hidden' />
</div>
</div>
<ul className='  flex flex-row '>
    {tags.map((tag, index) =>(
        <li key={tag}  className='text-white  font-bold text-[20px] bg-black/[0.7] rounded-full  p-2 m-2 '>
          <a href={`#@{tag.id}`}>
            {tag}
          </a>
            </li>
                ))}
</ul>
        </section>


<motion.section ref={ref}  style={{scale:scrollYProgress, opacity:scrollYProgress}} className='sm:hidden bg-slate-300 justify-center mb-8 focuse:scale-110 hover:scale-110 rounded-2xl  group transition duration-700 w-[360px]  '>

<h1 className='text-gray-950 mb-4 font-bold text-[20px] justify-center text-center pt-4 '>
    {title}
</h1>
<p className='text-gray-700 font-semibold text-[16px] w-[300px] text-center justify-center ml-6'>
    {description}
</p>


<Image src={imageUrl} quality={90} className='w-[100px] h-[80px]  relative justify-center ml-[114px] mt-6 mb-6  focuse:scale-150 group-hover:scale-150 transition duration-300n ' />

<ul className='  flex flex-row gap-2  justify-center pb-4'>
    {tags.map((tag, index) =>(
        <li key={tag}  className=' bg-slate-900 p-2 rounded-full text-white font-bold justify-center text-center'>
          <a href={`#@{tag.id}`}>
            {tag}
          </a>
            </li>
                ))}
</ul>

</motion.section>



        </section>
}

  return (
<section>
<h1 className='justify-center text-center sm:w-[800px] w-[300px]  pt-10 font-bold text-red-gradient  text-[30px] pb-10'>
My Projects
</h1>
<div>
{projectsData.map((project, index) => (
    <>
    <Project {...project}/>
    </>
))}
</div>
</section>
  )
}

export default Projects
