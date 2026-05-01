// import {Github, Linkedin, Twitter} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { VscGithubAlt, VscMail }   from "react-icons/vsc";
import { FiLinkedin } from "react-icons/fi";

const links = [
  {
    href: "https://github.com/w-code81",
    icon: <VscGithubAlt />
  },
  {
    href: "https://www.linkedin.com/in/aderogba-oluwadamilola-64066a36a",
    icon: <FiLinkedin />
  },
  {
    href: "https://x.com/wcode81",
    icon: <FaXTwitter />
  },
  {
    href: "mailto:aderogbaoluwadamilola@gmail.com",
    icon: <VscMail />
  }
];

function SocialLinks() {

  return (
    <>
      <div className="flex items-center justify-center gap-6">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 backdrop-blur-md bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 hover:text-primary hover:scale-110 transition-all duration-300"
        >
          <div className="w-10 h-10 flex items-center justify-center">
            {link.icon}
          </div>
        </a>
      ))}
    </div>  
    </>
    
  )
}

export default SocialLinks;