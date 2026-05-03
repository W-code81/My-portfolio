import TerminalCard from './TerminalCard';

function AboutTeaser() {
  return (
    <section className="flex flex-row items-center justify-center min-h-screen bg-bg-dark relative overflow-hidden">
      
      {/* ambient gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-12 items-center relative z-10">
        
        {/* Left col — text */}
        <div className="order-1 lg:order-1 flex flex-col gap-6 mx-4 md:mx-0">
          
          {/* section label */}
          <div  className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="h-px w-8 bg-primary shadow-neon-sm" />
            <span className="text-primary tracking-widest text-sm uppercase text-glow neon-text">
              About Me
            </span>
          </div>

          {/* headline */}
          <h2 className="text-2xl md:text-4xl font-black leading-tight uppercase">
            Problem Solver. <br />
            <span className="text-gray-500">System Architect.</span>
          </h2>

          {/* bio */}
          <p className="text-gray-300 text-sm md:text-lg leading-relaxed font-light">
            Hey, I'm Aderogba Oluwadamilola John — a 19 year old Nigerian
            developer and UI/UX designer with 2.5 years of experience. 
            My goal is to build scalable, user-friendly web applications 
            that guide users in achieving their goals.
          </p>

          {/* stats */}
          <div className="flex item flex-col gap-4 border-l-2 border-primary/30 pl-3 md:pl-6 mt-2 md:mt-0 mb-3 md:mb-0">
            <div>
              <h4 className="text-white text-lg">Experience</h4>
              <p className="text-sm text-gray-500">2.5 Years in Development & Design</p>
            </div>
            <div>
              <h4 className="text-white text-lg">Focus</h4>
              <p className="text-sm text-gray-500">Scalable Web Apps & User-Centric Design</p>
            </div>
          </div>

        </div>

        {/* Right col — terminal */}
        <div className="order-2 lg:order-2">
          <TerminalCard />
        </div>

      </div>
    </section>
  )
}

export default AboutTeaser;