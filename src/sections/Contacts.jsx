/* eslint-disable no-unused-vars */
import SocialLinks from "../components/SocialLinks"
import Button from "../components/Btn"
import { VscMail } from "react-icons/vsc"
import { motion } from "motion/react"

function Contacts() {
    return (
        <div className="bg-bg-dark py-16 relative overflow-hidden" id="contact">
            {/* Ambient Center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <section className="flex flex-col items-center text-center max-w-2xl mx-auto px-6 gap-6 z-10 relative">

                {/* Get in touch label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2">
                    <span className="h-px w-8 bg-primary" />
                    <span className="text-primary tracking-widest text-sm uppercase neon-text">
                        Get in Touch
                    </span>
                    <span className="h-px w-8 bg-primary" />
                </motion.div>

                {/* Heading */}
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-white font-black text-2xl md:text-4xl leading-tight"
                >
                    Ready to Start a Project?
                </motion.h3>

                {/* Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-gray-400 leading-relaxed text-sm md:text-base max-w-xl"
                >
                    I'm available for freelance work and open to new opportunities.
                    If you have a project in mind, let's build something great together.
                </motion.p>

                {/* Button */}
                <motion.a
                    href="mailto:oluwadamilolaaderogba@gmail.com" target="_blank" rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <Button icon={VscMail} text="contact me" variant="primary" />
                </motion.a>

                {/* Divider */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="w-full border-t border-white/10"
                />

                {/* Socials */}
                <SocialLinks />

                {/* Copyright */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-gray-600 text-xs"
                >
                    © {new Date().getFullYear()} W-code81 · All rights reserved
                </motion.p>

            </section>
        </div>
    )
}
export default Contacts