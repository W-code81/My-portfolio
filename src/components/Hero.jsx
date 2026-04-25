import React from "react";
// import { motion } from "motion/react";
import About from "./About";
import Button from "./Btn";
import { Download, MoveDown } from "lucide-react";

function CreateBtn({ text, onClick, icon: Icon , variant }) {
  return (
    <Button
      key={text}
      text={text}
      onClick={onClick}
      icon={Icon}
      variant={variant}
    />
  );
}

const btnInfo = [
  { text: "Contact Me", icon: MoveDown, variant:"primary", onClick: () => alert("Contact me clicked!") },
  { text: "Resume", icon: Download, variant:"secondary", onClick: () => alert("Download resume clicked!") },
];

function Hero() {
  return (
    <div className="bg-bg-dark min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">

      {/* glow blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <section className="relative z-10 max-w-4xl w-full text-center flex flex-col items-center gap-12">

        {/* Available for hire badge */}

        <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-primary/50 bg-primary/20 text-primary text-xs font-mono tracking-widest mb-4 h-6 w-45">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute left-1.5 inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative left-1.5 inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
          AVAILABLE FOR HIRE
        </div>

        {/* Hero heading */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-tight mb-8">
          BUILDING THE <br />
          WEB OF <br />
          <span className="text-primary text-glow">TOMORROW</span>
        </h1>

        {/* Hero subheading */}
        <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
          I craft beautiful, functional web experiences with modern <br /> technologies.
          Passionate about clean code, elegant design, <br /> and solving complex problems.
        </p>

        {/* Call-to-action buttons */}
        <div className="flex flex-row gap-8">
          
          {btnInfo.map(CreateBtn)}
        </div>
        

      </section>
    </div>
  )
}

export default Hero;