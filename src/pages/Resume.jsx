import Button from "../components/Btn";
import { Download, Briefcase ,GraduationCap } from "lucide-react";
import { education, experience } from "../data/resume";

function Resume() {
    return (
        <div className="bg-bg-dark min-h-screen flex flex-col my-24 ">
         {/* Top radial — behind title and download button */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-75 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Left glow — behind experience cards */}
            <div className="absolute top-1/3 left-0 w-62.5 h-100 bg-accent/8 rounded-full blur-[100px] pointer-events-none" />

            {/* Right glow — behind education cards */}
            <div className="absolute bottom-1/3 right-0 w-62.5 h-75  bg-primary/8 rounded-full blur-[100px] pointer-events-none" />

            <section className="flex flex-col items-center gap-4 relative z-10">

                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col text-center items-center gap-6 my-15">
                        <h1 className="uppercase text-white font-bold text-4xl md:text-5xl my-2">
                            Resume
                        </h1>

                        <Button
                            icon={Download}
                            text="download"
                            variant="primary"
                            onClick={() => {
                                const link = document.createElement("a");
                                link.href = "/pdf/My_Resume.pdf";
                                link.download = "My_Resume";
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                        />
                    </div>


                    <div className="flex items-center gap-3 my-8 px-6">
                        <div className="md:w-10 md:h-10 w-12 h-12 bg-linear-to-r from-fuchsia-500 to-purple-500 rounded-2xl flex items-center justify-center">
                            <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-white">Experience</h3>
                    </div>

                    <div className="grid grid-cols-1 gap-6 px-6 mb-15">
                        {experience.map((job, index) => (
                            <div key={index} className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300">
                                <div className="flex flex-col items-start">

                                    {/* content */}
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-bold text-white">{job.title}</h3>
                                        <p className="text-fuchsia-300 mb-2">{job.company}</p>
                                        <p className="text-white/50 text-sm mb-3">{job.period}</p>
                                        <p className="text-gray-400">{job.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-3 my-8 px-6">
                        <div className="md:w-10 md:h-10 w-12 h-12 bg-linear-to-r from-fuchsia-500 to-purple-500 rounded-2xl flex items-center justify-center">
                            <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-white">Education</h3>
                    </div>

                    <div className="grid grid-cols-1 px-6">
                        {education.map((job, index) => (
                            <div key={index} className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300">
                                <div className="flex flex-col items-start">

                                    {/* content */}
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold text-white">{job.degree}</h3>
                                        <p className="text-fuchsia-300 mb-2">{job.school}</p>
                                        <p className="text-white/50 text-sm mb-3">{job.period}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </div>
    );
}
export default Resume;
