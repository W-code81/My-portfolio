import Avatar from "../components/Avatar";
import about from "../data/about";
import StackCard from "../components/StackCard";
import { frontendStack, backendStack, otherStack } from "../data/stackIcons";

function AboutMain() {
    return (
        <div className="bg-bg-dark min-h-screen flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden">

            {/* Ambient Center */}
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary/20 rounded-full blur-[120px] pointer-events-none" /> */}

            <section className="relative z-10 w-full max-w-6xl mx-auto gap-16">

                {/* Intro */}
                <div className="overflow-hidden relative py-4 flex items-center justify-center pb-8">

                    {/* Avatar */}
                    <Avatar
                        src="/images/me.jpg"
                        alt="Profile_img"
                    />
                </div>

                {/*intro text*/}
                <p className=" text-gray-400 text-sm md:text-lg max-w-xl leading-relaxed mx-auto mb-8 pb-8">My journey into tech started with curiosity and quickly became a passion for building meaningful digital experiences. I enjoy creating products that combine thoughtful design, functionality, and real impact.</p>

                {/* glass cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {about.map((item, index) => (
                        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">

                            <div key={index} className="flex flex-col items-start gap-4 mb-6">

                                {/* icons */}
                                <div className="w-14 h-14 bg-linear-to-br from-fuchsia-500 to-purple-600 rounded-2xl flex items-center justify-center mb-3">
                                    <item.icon className="w-5 h-5 text-white" />
                                </div>

                                {/* content */}
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                                    <p className="text-gray-400">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <h1 className="text-white text-center font-bold text-4xl my-15">MY TECHSTACK</h1>

                {/* techstack*/}
                <div className="flex flex-col backdrop-blur-md bg-white/3 border border-white/10 rounded-3xl gap-6">

                    {/* frontend */}
                    <h2 className="text-2xl font-semibold text-white text-center pt-6">Frontend</h2>

                    {/* icons */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-6">
                        {frontendStack.map((item, index) => (

                            <StackCard
                                key={index}
                                src={item.src}
                                name={item.name}
                                class={item.class}
                            />

                        ))}
                    </div>

                    <h2 className="text-2xl font-semibold text-white text-center">Backend</h2>

                    {/* backend */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-6 ">
                        {backendStack.map((item, index) => (
                            <StackCard
                                key={index}
                                src={item.src}
                                name={item.name}
                                class={item.class}
                            />
                        ))}
                    </div>

                    <h2 className="text-2xl font-semibold text-white text-center">Other Tools</h2>

                    {/* other tools */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-6">
                        {otherStack.map((item, index) => (
                            <StackCard
                                key={index}
                                src={item.src}
                                name={item.name}
                                class={item.class}
                            />
                        ))}
                    </div>
                </div>

            </section>
        </div>
    )
}

export default AboutMain;