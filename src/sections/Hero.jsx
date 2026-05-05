import React from "react";
// import { motion } from "motion/react";
import Button from "../components/Btn";
import {ChevronsDown } from "lucide-react";
import  btnInfo  from "../data/btnInfo";


function Hero() {
  return (
    <div className="bg-bg-dark min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden pt-20 md:pt-25">

      {/* glow blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <section className="relative z-10 max-w-2xl md:max-w-4xl w-full text-center flex flex-col items-center gap-6">

        {/* Available for hire badge */}

        <div  className="inline-flex items-center gap-3 px-1 py-1 rounded-full border border-primary/50 bg-primary/20 text-primary text-xs font-mono tracking-widest">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute left-1.5 inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative left-1.5 inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
          AVAILABLE FOR HIRE
        </div>

        {/* Hero heading */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-tight">
          BUILDING THE <br />
          WEB OF <br />
          <span className="text-primary text-glow">TOMORROW</span>
        </h1>

        {/* Hero subheading */}
        <p className="text-gray-400 text-sm md:text-lg max-w-xl leading-relaxed">
          I craft beautiful, functional web experiences with modern technologies.
          Passionate about clean code, elegant design, and solving complex problems.
        </p>
        
        {/* Animated Arrow */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <span className="text-purple-400/50"
          ><ChevronsDown /></span>
        </div>

        {/* Call-to-action buttons */}
        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 mt-4 whitespace-nowrap">
          
          {btnInfo.map(({ text, onClick, icon: Icon, variant }) =>{
           return( 
            <Button
              key={text}
              text={text}
              onClick={onClick}
              icon={Icon}
              variant={variant}
            />)
          })}
        </div>
        

      </section>
    </div>
  )
}

export default Hero;