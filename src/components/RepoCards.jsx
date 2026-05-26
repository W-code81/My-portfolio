/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { ExternalLink, Star, GitFork } from "lucide-react";
import { motion } from "motion/react";

function Projects() {

    const [repos, setRepos] = useState([]);

    const featuredRepos = [ // List of featured repositories to display
        "express-passport-starter",
        "TruckRiser",
        "paystack-integration-be",
        "Bible-Verse-App"

    ];

    const languageColors = {  // Define colors for different programming languages
        JavaScript: "bg-yellow-400",
        HTML: "bg-orange-500",
        CSS: "bg-blue-500",
        TypeScript: "bg-blue-400",
        Python: "bg-green-500",
    }

    useEffect(() => { //useEffect is used to fetch the repos from the github api when the component mounts

        async function fetchRepos() {

            try {

                const response = await fetch(  //get the repos from the github api
                    "https://api.github.com/users/W-code81/repos"
                );

                const data = await response.json(); //parse the response as json

                const filteredRepos = data.filter((repo) => //filter the repos to only include the ones in the featuredRepos array
                    featuredRepos.includes(repo.name)
                );

                setRepos(filteredRepos); //set the repos state to the filtered repos

            } catch (error) {
                console.error(error);
            }
        }

        fetchRepos(); //fetch the repos when the component mounts

    },); //add repos as a dependency to the useEffect so that it runs again when the repos state changes

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {repos.map((repo) => (
                <motion.div
                    key={repo.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: repos.indexOf(repo) * 0.1 }}
                    viewport={{ once: true }}
                    className="backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/5  rounded-3xl p-6 group hover:-translate-y-1 duration-300"
                >
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-white text-xl font-bold mb-2 group-hover:text-primary duration-300">
                            {repo.name}
                        </h3>

                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-primary transition-colors"
                        >
                            <ExternalLink className="w-5 h-5 ml-2" />
                        </a>
                    </div>


                    <p className="text-gray-400 mb-4">
                        {repo.description || "No description available."}
                    </p>

                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center justify-between gap-2">
                            <Star className="w-5 h-5 text-yellow-500" />
                            <span className="text-gray-500">
                                {repo.stargazers_count}
                            </span>

                            <GitFork className="w-5 h-5 text-blue-500" />
                            <span className="text-gray-500">
                                {repo.forks_count}
                            </span>
                        </div>

                        <div className="flex items-center justify-between gap-2">
                            <div
                                className={`w-3 h-3 rounded-full ${languageColors[repo.language] || "bg-gray-500"}`} //set the color of the language dot based on the language of the repo, default to gray if the language is not in the languageColors object
                            ></div>
                            <span >
                                {repo.language}
                            </span>
                        </div>



                    </div>

                </motion.div>
            ))}

        </div>
    );
}

export default Projects;