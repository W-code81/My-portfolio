import SocialLinks from "../components/SocialLinks"
import Button from "../components/Btn"
import { VscMail } from "react-icons/vsc"

function Contacts() {
    return (
        <div className="bg-bg-dark py-16 relative overflow-hidden" id="contact">
            {/* Ambient Center */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <section className="flex flex-col items-center text-center max-w-2xl mx-auto px-6 gap-6 z-10 relative">

                {/* Get in touch label */}
                <div className="flex items-center gap-2">
                    <span className="h-px w-8 bg-primary" />
                    <span className="text-primary tracking-widest text-sm uppercase neon-text">
                        Get in Touch
                    </span>
                    <span className="h-px w-8 bg-primary" />
                </div>

                {/* Heading */}
                <h3 className="text-white font-black text-2xl md:text-4xl leading-tight">
                    Ready to Start a Project?
                </h3>

                {/* Paragraph */}
                <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-xl">
                    I'm available for freelance work and open to new opportunities.
                    If you have a project in mind, let's build something great together.
                </p>

                {/* Button */}
                <Button icon={VscMail} text="hello@wcode81" variant="primary" />

                {/* Divider */}
                <div className="w-full border-t border-white/10" />

                {/* Socials */}
                <SocialLinks />

                {/* Copyright */}
                <p className="text-gray-600 text-xs">© 2025 W-code81 · All rights reserved</p>

            </section>
        </div>
    )
}
export default Contacts