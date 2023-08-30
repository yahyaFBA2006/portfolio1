'use client'

import React from 'react'
import { useInView } from 'framer-motion'
import { motion } from 'framer-motion'
const About = () => {
  return (
<motion.section id='About' className='justify-center text-center sm:w-[800px] w-[300px]  pt-10 font-bold scroll-m-20'

initial={{y:100, opacity:0}}
animate={{y:0, opacity:1, transition:{duration:1, }}}

>
    <h1 className='text-title-gradient text-[30px] font-bold'>
        About me
    </h1>


      <p className="mb-3">
        After my BAC-Exame-2023 {" "}
        I decided to pursue my
        passion for programming. I learned
        <span className="text-paragraph-gradient">  Front-end web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> <span className='text-paragraph-gradient'>is the web design </span> 
        aspect. My core stack
        is{" "}
        <span className="text-paragraph-gradient">
          React, Next.js,
        </span>
        . I am also familiar with TypeScript . I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="text-paragraph-gradient">Back-end web development  </span> 
         to become a  full-stack web development
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my cat. I also enjoy{" "}
        <span className="text-paragraph-gradient">learning new things</span>. I am currently
        learning about{" "}
        <span className="text-paragraph-gradient">artificial intelligence </span>. I'm also
        learning how to play the chess.
      </p>
</motion.section>
  )
}

export default About
