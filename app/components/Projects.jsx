"use client";
import React from "react";

import { motion } from "framer-motion";

const Projects = (params) => {
  return (
    <>
      <div className="flex flex-col items-center content-center ">
        <div className="w-xs sm:h-50 sm:w-lg border-b-3 border-t-emerald-700 border-t-3 border-b-emerald-700 dark:text-blue-50 h-50 transition-all duration-400 transform hover:-translate-y-2">
          <h3 className="ml-5 mt-2.5 text-3xl font-bold merry bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            {params.heading}
          </h3>
          <p className="ml-5 mt-2.5 text-lg font-sans">{params.text}</p>

          <a href={params.links}>
            <motion.div
              whileHover={{ translateX: 3, scale: 1.1 }}
              className="border-1 font-sans font-semibold border-white w-35 ml-3 sm:ml-4 mt-3.5 sm:mt-7.5 rounded-2xl text-center text-lg h-8 hover:bg-cyan-600 hover:cursor-pointer"
            >
              {" "}
              {"Visit now"}
            </motion.div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
