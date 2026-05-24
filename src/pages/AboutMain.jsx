/* eslint-disable no-unused-vars */
import Avatar from "../components/Avatar";
import about from "../data/about";
import StackCard from "../components/StackCard";
import { frontendStack, backendStack, otherStack } from "../data/stackIcons";
import RoadmapCard from "../components/RoadmapCard";
import roadmapData from "../data/roadmap";
import Contacts from "../sections/Contacts";
import { motion } from "motion/react"

function AboutMain() {
    return (
        <div className="bg-bg-dark min-h-screen flex flex-col items-center justify-center pt-24 relative overflow-hidden">
            {/* Full page radial — sits in the center of the whole page */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(192,38,211,0.12),transparent)] pointer-events-none" />
            {/* Subtle bottom fade */}
            {/* <div className="absolute bottom-0 left-0 right-0 h-96 bg-linear-to-t from-accent/5 to-transparent pointer-events-none" /> */}

            <section className="relative z-10 w-full max-w-6xl mx-auto gap-16">

                {/* Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden relative py-4 flex items-center justify-center pb-8">

                    {/* Avatar */}
                    <Avatar
                        src="/images/me.jpg"
                        alt="Profile_img"
                    />
                </motion.div>

                {/*intro text*/}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-gray-400 text-sm md:text-lg max-w-xl md:max-w-3xl leading-relaxed mx-auto mb-8 pb-8 px-6"
                >
                    My journey into tech started with curiosity and quickly became a passion for building meaningful digital experiences. I enjoy creating products that combine thoughtful design, functionality, and real impact.
                </motion.p>

                {/* glass cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">

                    {about.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                        >

                            <div key={index} className="flex flex-col items-start gap-4">

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
                        </motion.div>
                    ))}
                </div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-white text-center font-bold text-2xl md:text-4xl mt-20 mb-15"
                >
                    MY TECHSTACK
                </motion.h2>

                {/* techstack*/}
                <div className="flex flex-col backdrop-blur-md bg-white/3 border border-white/10 rounded-3xl gap-6">

                    {/* frontend */}
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-2xl font-semibold text-white text-center pt-6"
                    >
                        Frontend
                    </motion.h3>

                    {/* icons */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-6">
                        {frontendStack.map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <StackCard
                                    key={index}
                                    src={item.src}
                                    name={item.name}
                                    class={item.class}
                                />
                            </motion.div>
                        ))}
                    </div>

                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-2xl font-semibold text-white text-center"
                    >
                        Backend
                    </motion.h3>

                    {/* backend */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-6 ">
                        {backendStack.map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <StackCard
                                    key={index}
                                    src={item.src}
                                    name={item.name}
                                    class={item.class}
                                />
                            </motion.div>
                        ))}
                    </div>

                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-2xl font-semibold text-white text-center"
                    >
                        Other Tools
                    </motion.h3>

                    {/* other tools */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-6">
                        {otherStack.map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <StackCard
                                    key={index}
                                    src={item.src}
                                    name={item.name}
                                    class={item.class}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

            </section>

            <section className="relative w-full max-w-6xl mx-auto pt-32 overflow-hidden">

                {/* glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

                {/* heading */}
                <div className="text-center mb-20 relative z-10 px-6">

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="uppercase tracking-[0.3em] text-primary text-sm mb-4 font-mono"
                    >
                        The Roadmap
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl font-black text-white uppercase"
                    >
                        Where I'm Headed
                    </motion.h2>
                </div>

                {/* timeline */}
                <div className="relative flex flex-col gap-16 z-10 px-6">

                    {/* center line */}
                    <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-0.5 h-full bg-primary/20" />

                    {/* cards */}
                    {roadmapData.map((item, index) => (
                        <RoadmapCard
                            key={index}
                            phase={item.phase}
                            title={item.title}
                            description={item.description}
                            status={item.status}
                            side={item.side}
                        />
                    ))}
                </div>

                {/* contacts */}
                <div className="w-full max-w-6xl mx-auto px-0 pt-20">
                    <Contacts />
                </div>
            </section>
        </div>
    )
}

export default AboutMain;