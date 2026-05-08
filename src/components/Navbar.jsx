import Button from "../components/Btn";
import links from "../data/navLinks";
import { useState } from "react";


function Navbar() {
    const [active, setActive] = useState("home");

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-max max-w-[95%]">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-2 min-[375px]:px-3 py-2 shadow-2xl">
                <div className="flex items-center gap-2 min-[375px]:gap-3">

                    {/* logo */}
                    <div className="flex items-center gap-1.5 min-[375px]:gap-2 px-2 min-[375px]:px-3 border-r border-white/10">

                        {/* replace svg with real logo later */}
                        <div className="w-5 h-5 bg-linear-to-br from-fuchsia-500 to-purple-600 rounded flex items-center justify-center shrink-0">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 2L7 7M7 7L12 2M7 7V12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>

                        <span className="text-white font-semibold text-xs min-[375px]:text-sm whitespace-nowrap">W-code81</span>
                    </div>

                    {/* links */}
                    <ul className="flex items-center gap-0.5 min-[375px]:gap-1">
                        {links.map((link) => {
                            const Icon = link.icon;

                            return (
                                <li key={link.name}>
                                    <button className={`relative p-2.5 min-[375px]:p-3 rounded-full transition-all duration-300 
                                            ${active === link.name
                                            ? "bg-linear-to-br from-fuchsia-500 to-purple-600 text-white"
                                            : "text-white/60 hover:text-white hover:bg-white/10"}`}

                                        title={link.label}
                                        onClick={() => setActive(link.name)}>
                                        <Icon className="w-4 h-4 min-[375px]:w-5 min-[375px]:h-5" />
                                    </button>
                                </li>)
                        })}
                    </ul>


                </div>
            </div>
        </nav>
    )
}

export default Navbar