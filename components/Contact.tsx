"use client";

import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";


const Contact = () => {


const sendEmail = async (formData: FormData ) => {

  //console.log(FormData.get("senderEmail"));
 // console.log(FormData.get("message"));


}
  return (
<section id="Contact" className='pt-10 scroll-m-20'>
<h1  className='text-red-gradient text-[40px] font-bold text-center mb-10'>
Contact me
</h1>
<motion.div

initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{duration:1, deplay:0.5}}



>
    <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:yahyamahdi4242@gmail.com">
        yahyamahdi4242@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async(FormData) => {
         // console.log("Running on client")
          console.log(FormData.get("senderEmail"))
          console.log(FormData.get("message"))

          await sendEmail(FormData) ;

        }}
        >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <button type="Submit" className="bg-gray-900 p-4 rounded-full w-[8rem] h-[3rem] flex gap-2 text-white text-bold focus:scale-100 hover:scale-100  ">
Sbmit <FaPaperPlane/>
            </button>
       
      </form>

      </motion.div>
</section>
  )
}

export default Contact
