'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'


const Intro = (params) => {
  return (
    <div className='flex flex-col items-center justify-center'>
  <motion.h1 
  className=" text-4xl w-xs sm:w-lg ml-0 pl-0 sm:text-6xl mt-10 font-bold font-mono bg-gradient-to-r from-orange-600 to-neutral-400 via-yellow-600 bg-clip-text text-transparent"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  }}
>
  {"Hello there!..".split("").map((char, index) => (
    <motion.span
      key={index}
      variants={{
        hidden: { 
          opacity: 0,
          x: 50,
          scale: 0.8
        },
        visible: { 
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          transition: {
            duration: 0.6
          }
        }
      }}
    
      style={{ display: "inline-block" }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ))}
</motion.h1>
<div className="flex items-center-safe justify-center gap-4 sm:gap-1 w-xs sm:h-70 sm:w-xl transition-all duration-400 transform hover:-translate-y-2 flex-col sm:flex-row text-center border-3 rounded-2xl shadow-stone-800 border-emerald-700   shadow-xl mt-10 h-135">
          
<Image className=" flex w-40 h-60 items-center justify-center content-center ml-0.5 sm:h-55 sm:w-50 rounded-lg cursor-none" src={params.imgurl} alt={params.alt} height={params.imght} width={params.imgwth}/>
          <p className="ml-5 text-lg font-sans flex flex-col items-start text-left">{params.text}</p>



        </div>
        
<div className=' mt-20 sm:mt-10 h-0.5 w-60 bg-gradient-to-r from-fuchsia-500 to-blue-700'></div>

    </div>
  )
}

export default Intro