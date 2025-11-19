import React from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SkillsGrid from "./components/Grid";
import Card from "./components/Card";
import Projects from "./components/Projects";
import Intro from "./components/Intro";
import ResumeCard from "./components/ResumeCard";
const Home = () => {
  return (
    <div className="flex flex-col items-center gap-10 content-center ">
      <Intro
        imgurl="/image2.jpg"
        alt="Chyavan_image"
        imght="70"
        imgwth="100"
        text={
          <>
            <p>
              I am Chyavan, an eager and aspiring web developer currently
              studying BTech in AI/ML at UVCE.
            </p>{" "}
            <p>
              This portfolio showcases my skills and projects, and more about
              myself.
            </p>
            <p>
              You can reach me out for collaboration/projects on various social
              media platforms, and my links are given below.
            </p>
          </>
        }
      />

      <SkillsGrid />
              <div className=' mt-8 mb-10 h-0.5 w-60 bg-gradient-to-r from-fuchsia-500 to-blue-700'></div>
                      <div className=' mt-2.5 text-5xl font-bold font-mono bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-10 sm:mb-8 text-center '>My Projects</div>
      <Projects
        text="A quick and easy way to shorten your links, created using NextJS and MongoDB. Try it now!"
        heading="Appehuli Links"
        links="https://appehuli-links.vercel.app"
      />
       <Projects
        text="A website to listen to and download Havyaka Bhajans and experience the beauty of Havyaka culture."
        heading="Havya Kaavya"
        links="https://havyakaavya.vercel.app"
      />
       <ResumeCard links="/Chyavan_resume.pdf" text="Download my resume to learn more about my technical experience and skills!"/>
         <div className=' mt-8 mb-10 h-0.5 w-60 bg-gradient-to-r from-fuchsia-500 to-blue-700'></div>
     <div className='text-5xl font-bold font-mono bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-2.5 text-center '>My Hobbies</div>
     
      <Card text="I am a petrolhead, a gamer, an otaku and a bibliophile. I also enjoy binging shows, bike-riding and volunteering during my free time. Hit me up on my socials so that we can enjoy together!" />
      <Contact />
    </div>
  );
};

export default Home;
