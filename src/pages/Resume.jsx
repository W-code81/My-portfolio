import Button from "../components/Btn";
import { Download, Briefcase ,GraduationCap } from "lucide-react";

const experience = [
    {
        title: "Frontend Development Journey",
        company: "Self-Learning & Personal Projects",
        period: "2023 - Present",
        description:
            "Built responsive websites and modern React applications while learning frontend architecture, component systems, and UI design principles.",
    },

    {
        title: "Fullstack Exploration",
        company: "MERN Stack Learning",
        period: "2024 - Present",
        description:
            "Currently expanding into backend development using Node.js, Express, MongoDB, and REST APIs while building real-world projects.",
    },

    {
        title: "Creative & Visual Design",
        company: "Video Editing & UI/UX",
        period: "2024 - Present",
        description:
            "Developed creative problem-solving skills through video editing, interface design, branding concepts, and visual storytelling.",
    },
];
const education = [
    {
        degree: "Bachelor of Science in Computer Science",
        school: "University of Port Harcourt",
        period: "2023 - present",
    },
];

function Resume() {
    return (
        <div className="bg-bg-dark min-h-screen flex flex-col mt-24 ">
            <section className="flex flex-col items-center gap-4">

                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col text-center items-center gap-6 ">
                        <h1 className="uppercase text-white font-bold text-2xl md:text-5xl my-2">
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


                    <div className="flex items-start gap-3 my-8 px-6">
                        <div className="md:w-10 md:h-10 w-12 h-12 bg-linear-to-br from-fuchsia-500 to-purple-600 rounded-2xl flex items-center justify-center">
                            <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-white">Experience</h3>
                    </div>

                    <div className="grid grid-cols-1 gap-6 px-6">
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

                    <div className="flex items-start gap-3 my-8 px-6">
                        <div className="md:w-10 md:h-10 w-12 h-12 bg-linear-to-br from-fuchsia-500 to-purple-600 rounded-2xl flex items-center justify-center">
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
