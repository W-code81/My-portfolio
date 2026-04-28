function TerminalCard() {
  return (
    <div className="glass-card rounded-4xl overflow-hidden border border-primary/20 font-mono text-sm neon-sm">
      
      {/* Terminal header */}
      <div className="padding bg-card-darker px-4 py-3 flex items-center gap-2 border-b border-white/10">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <div className="flex-1 text-center text-gray-500 text-xs">
          user@portfolio:~
        </div>
      </div>

      {/* Terminal body */}
      <div className="p-6 text-gray-300 space-y-4 bg-bg-dark/90">
        <div style={{padding:"20px 0 5px 15px"}} className="flex gap-2">
          <span className="text-primary">➜</span>
          <span className="text-purple-400">~</span>
          <span>whoami</span>
        </div>
        <div style={{padding:"0 12px", margin:"8px 12px"}} className=" text-gray-400 space-y-1">
          <p>&gt; Nigerian Developer & UI/UX Designer</p>
          <p>&gt; 19 years old</p>
          <p>&gt; 2.5 years experience</p>
        </div>

        <div style={{padding:"10px 15px"}} className="flex gap-2">
          <span className="text-primary">➜</span>
          <span className="text-purple-400">~</span>
          <span>cat mission.txt</span>
        </div>
        <div style={{padding:"0 12px", margin:"8px 12px"}} className="pl-4 text-[#ce9178]">
          "Create scalable, user-friendly web applications
          that guide users in achieving their goals."
        </div>

        <div style={{padding:"10px 15px"}} className="flex gap-2">
          <span className="text-primary">➜</span>
          <span className="text-purple-400">~</span>
          <span className="animate-pulse">_</span>
        </div>
      </div>
    </div>
  )
}

export default TerminalCard;