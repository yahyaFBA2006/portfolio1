"use client"
import React from "react";
import { skillsData } from "@/lib/data";

import { motion } from "framer-motion";


  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };


const Skills = () => {



  return (
    <div id="Skills" className="scroll-m-20">
      <div  className='text-title-gradient text-[40px] font-bold text-center mb-10' >
        My Skills
      </div>
<section className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 font-bold sm:w-[400px] w-[300px]'>
    <ul className='flex flex-wrap justify-center gap-2 '>
        {skillsData.map((skill, index) => (

<motion.li
className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
key={index}
variants={fadeInAnimationVariants}
initial="initial"
whileInView="animate"
viewport={{
  once: true,
}}
custom={index}
>
{skill}
</motion.li>
        ))}
    </ul>
</section>
</div>
  )
}

export default Skills
