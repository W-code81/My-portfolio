import Button from "../components/Btn";
import { User } from "lucide-react";

const Info = [
  { text: "More on Me", icon: User, variant: "secondary" }
]

function TerminalCard() {
  return (
    <div>

      <div className="glass-card rounded-4xl overflow-hidden border border-primary/20 font-mono text-sm neon-sm mx-4 md:mx-8 lg:mx-0">

        {/* Terminal header */}
        <div className="bg-card-darker px-4 py-2 md:px-5 md:py-3 flex items-center gap-2 border-b border-white/10">
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#27c93f]" />
          <div className="flex-1 text-center text-gray-500 text-sm md:text-xs">
            user@portfolio:~
          </div>
        </div>

        {/* Terminal body */}
        <div className="text-gray-300 space-y-2 md:space-y-4 bg-bg-dark/90">
          <div className="flex gap-2 pt-5 pb-1.25 pl-3.75">
            <span className="text-primary">➜</span>
            <span className="text-purple-400">~</span>
            <span>whoami</span>
          </div>

          <div className="px-3 my-2 mx-3 text-gray-400 space-y-1">
            <p>&gt; Nigerian Developer & UI/UX Designer</p>
            <p>&gt; 19 years old</p>
            <p>&gt; 2.5 years experience</p>
          </div>

          <div className="py-2.5 px-3.75 flex gap-2">
            <span className="text-primary">➜</span>
            <span className="text-purple-400">~</span>
            <span>cat mission.txt</span>
          </div>
          
          <div className="px-3 my-2 mx-3 text-[#ce9178]">
            "Create scalable, user-friendly web applications
            that guide users in achieving their goals."
          </div>

          <div className="py-2.5 px-3.75 flex gap-2">
            <span className="text-primary">➜</span>
            <span className="text-purple-400">~</span>
            <span className="animate-pulse">_</span>
          </div>
        </div>
      </div>

      {/* More About ME -> main about page */}
      <div className="mt-6 hidden lg:inline-flex items-center justify-start neon-sm rounded-full">
        {Info.map(btn =>
          <Button key={btn.text} text={btn.text} variant={btn.variant} icon={btn.icon} />
        )}
      </div>
    </div>
  )
}

export default TerminalCard;