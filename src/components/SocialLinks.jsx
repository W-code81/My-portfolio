import socialLinks from "../data/socialLinks";

function SocialLinks() {

  return (
    <>
      <div className="flex items-center justify-center gap-6">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 backdrop-blur-md bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 hover:text-primary hover:scale-110 transition-all duration-300"
        >
          <div className="w-10 h-10 flex items-center justify-center">
            {<link.icon />}
          </div>
        </a>
      ))}
    </div>  
    </>
    
  )
}

export default SocialLinks;