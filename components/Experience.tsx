"use client"

import React from 'react'
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
const Experience = () => {

  return (
    
<section id='Experience' className='scroll-m-24'>
    <h1 className='text-title-gradient text-[40px] font-bold text-center mb-10'>
        My Experience
    </h1>
    < VerticalTimeline className='bg-line-gradient sm:rounded-full rounded-sm   '>
    {
experiencesData.map((experience, index) =>(

< VerticalTimelineElement  
className='pr-10'
contentStyle={{
    background:
     "#f3f4f6",
    boxShadow: "none",
    border: "1px solid rgb(0,0,0)",
    textAlign: "left",
    padding: "1.3rem 2rem",
  }}
  contentArrowStyle={{
    borderRight:
    "0.6rem solid #9ca3af"

  }}
  icon={experience.icon}
  iconStyle={{
    background:
  "rgba(255, 255, 255, 0.15)",
    fontSize: "1.5rem",
  }}
>

<h1 >
    {experience.title}
</h1>

<p>
    {experience.description}
</p>

</VerticalTimelineElement>    
))

    }
    </VerticalTimeline>
</section>
  )
}

export default Experience
