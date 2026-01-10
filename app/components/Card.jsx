'use client'
import React from "react";
import Image from "next/image";

import {motion} from "framer-motion";

const Card = (params) => {
  return (
    <>
      <div className="transition-all duration-500 transform hover:-translate-y-2">
        <div className="border-b-3 border-t-emerald-700 border-t-3 border-b-emerald-700 h-50  w-xs sm:h-50 sm:w-lg ">
          <h3 className=" flex flex-col items-center ml-5 sm:mt-2.5 text-2xl sm:text-3xl font-bold font-mono bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            {params.heading}
          </h3>
          <p className="ml-5 mt-1.5 sm:mt-2.5 text-lg font-sans">{params.text}</p>
<Image src={params.imgurl} alt={params.alt} height={params.imght} width={params.imgwth}/>



        </div>
        
      </div>
    </>
  );
};

export default Card;
