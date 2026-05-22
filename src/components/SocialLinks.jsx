/* eslint-disable no-unused-vars */
import socialLinks from "../data/socialLinks";
import { motion } from "motion/react";
function SocialLinks() {

  return (
    <>
      <div className="flex items-center justify-center gap-6">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 backdrop-blur-md bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 hover:text-primary hover:scale-110 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-10 h-10 flex items-center justify-center">
              {<link.icon />}
            </div>
          </motion.a>
        ))}
      </div>
    </>

  )
}

export default SocialLinks;