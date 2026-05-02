import { VscGithubAlt } from "react-icons/vsc";
import { FiFileText, FiUser, FiHome } from "react-icons/fi";
import Button from "./Btn";


function Navbar() {
    const links = [
        { name: "home", label:"Home",icon: FiHome },
        { name: 'about', label: 'About', icon: FiUser },
        { name: 'resume', label: 'Resume', icon: FiFileText },
        { name: 'github', label: 'GitHub', icon: VscGithubAlt },
    ]

    return (
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-6 py-3 shadow-2xl">
                <div className="flex items-center gap-8">

                    {/* logo */}
                    <div className="flex items-center gap-2 px-3 border-r border-white/10">

                        {/* replace svg with real logo later */}
                        <div className="w-6 h-6 bg-linear-to-br from-fuchsia-500 to-purple-600 rounded flex items-center justify-center">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 2L7 7M7 7L12 2M7 7V12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>

                        <span className="text-white font-semibold text-sm">W-code81</span>
                    </div>

                    {/* links */}
                    <ul className="flex items-center gap-2">
                        {links.map((link) =>{
                            const Icon = link.icon;

                           return (
                            <li key={link.name}>
                                <button className="relative p-3 mr-2 rounded-full transition-all duration-300 text-white/60 hover:text-white hover:bg-white/10" title={link.label}>
                                    <Icon className="w-4 h-4"/>
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