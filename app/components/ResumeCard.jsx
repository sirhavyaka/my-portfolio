"use client";
import React from "react";
import { Download, FileText } from "lucide-react";
import { motion } from "framer-motion";

const ResumeCard = (params) => {
  return (
    <>
      <div className="flex flex-col items-center content-center ">
        <div className=" mt-8 mb-10 h-0.5 w-60 bg-gradient-to-r from-fuchsia-500 to-blue-700"></div>
        <div className="mt-2.5 text-5xl font-bold font-mono bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-8 text-center ">
          Resume
        </div>
        <div className="h-55 w-xs dark:text-blue-50 sm:h-50 sm:w-lg   transition-all duration-400 transform hover:-translate-y-2 border-3 shadow-stone-800 border-emerald-700 shadow-xl rounded-2xl ">
          <h3 className="ml-5 mt-2.5 text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            {params.heading}
          </h3>
          <p className="ml-5 mt-2.5 text-lg text-center font-sans">{params.text}</p>
          <div className="flex flex-col items-center mt-3 sm:mt-4"> <span className="flex flex-row text-center gap-2 font-mono"><FileText/>Chyavan_resume.pdf</span></div>
         
          

          <a
            className="flex flex-col items-center content-center"
            href={params.links}
          >
            <motion.div
              whileHover={{ translateX: 3, scale: 1.1 }}
              className=" flex flex-row gap-2.5 items-center content-center border-1 font-sans font-semibold border-white w-35 ml-4 mt-4.5 rounded-xl h-7 text-left sm:text-lg sm:h-10 hover:bg-cyan-600 hover:cursor-pointer"
            >
              <Download className="h-4 sm:h-5 pl-1 mb-0.5 ml-0.5"/>
              {"Download"}
            </motion.div>
          </a>
        </div>
      </div>
    </>
  );
};

export default ResumeCard;
