/* eslint-disable no-unused-vars */
import TerminalCard from '../components/TerminalCard';
import { motion } from "motion/react"

function AboutTeaser({ setActive }) {
  return (
    <section className="flex flex-row items-center justify-center min-h-screen md:min-h-full md:py-24 bg-bg-dark relative overflow-hidden">

      {/* ambient gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto my-8 md:my-0 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-12 items-center relative z-10">

        {/* Left col — text */}
        <div className="order-1 lg:order-1 flex flex-col gap-6 lg:gap-6 mx-4 md:mx-8 lg:mx-0">

          {/* section label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="h-px w-8 bg-primary shadow-neon-sm" />
            <span className="text-primary tracking-widest text-sm uppercase text-glow neon-text">
              About Me
            </span>
          </motion.div>

          {/* headline */}
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-black leading-tight uppercase">
            Problem Solver. <br />
            <span className="text-gray-500">System Architect.</span>
          </motion.h2>

          {/* bio */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 text-sm md:text-lg leading-relaxed font-light">
            Hey, I'm Aderogba Oluwadamilola John — a 19 year old Nigerian
            developer and UI/UX designer with 2.5 years of experience.
            My goal is to build scalable, user-friendly web applications
            that guide users in achieving their goals.
          </motion.p>

          {/* stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
            className="flex item flex-col gap-4 border-l-2 border-primary/30 pl-3 md:pl-6 mt-2 md:mt-0 mb-3 md:mb-0">
            <div>
              <h4 className="text-white text-lg">Experience</h4>
              <p className="text-sm text-gray-500">2.5 Years in Development & Design</p>
            </div>
            <div>
              <h4 className="text-white text-lg">Focus</h4>
              <p className="text-sm text-gray-500">Scalable Web Apps & User-Centric Design</p>
            </div>
          </motion.div>

        </div>

        {/* Right col — terminal */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="order-2 lg:order-2">
          <TerminalCard setActive={setActive} /> {/* pass setActive to TerminalCard so that the terminal buttons can change the section */}
        </motion.div>

      </div>
    </section>
  )
}

export default AboutTeaser;