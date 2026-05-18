import { FaGithub } from "react-icons/fa6"
import Button from "../components/Btn"
import { ExternalLink } from "lucide-react";
import GithubGraph from "../components/GithubGraph";
import RepoCards from "../components/RepoCards";



function Github() {
    return (
        <div className="bg-bg-dark min-h-screen flex flex-col items-center my-24 ">
            <section className="w-full max-w-4xl mx-auto px-6 gap-4 relative z-10">


                <div className="w-15 h-15 md:w-18 md:h-18 bg-linear-to-br from-fuchsia-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto my-6">
                    <FaGithub className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-6">GitHub Projects</h2>
                <p className="text-gray-400 text-sm text-center md:text-lg max-w-xl md:max-w-3xl leading-relaxed mx-auto mb-8 px-6">Visualize my GitHub activity and contributions over the past year</p>

                <div className="flex flex-col items-center mb-6">
                    <a
                        href="https://github.com/W-code81"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Button
                            icon={ExternalLink}
                            text="Visit My Github"
                            variant="primary"
                        />
                    </a>

                </div>

                <GithubGraph />

                <div className="mt-8">
                    <RepoCards />
                </div>
               

            </section>

        </div>
    )
}

export default Github