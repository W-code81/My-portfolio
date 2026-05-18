import { GitHubCalendar } from "react-github-calendar";

function GithubGraph() {
    return (
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-6 shadow-[0_0_40px_rgba(192,38,211,0.08)]">
            <section className="max-w-4xl mx-auto gap-4 relative z-10">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">GitHub Contributions</h3>

                <div className="flex items-center justify-center w-full overflow-x-auto hide-scrollbar -mx-2 px-2">
                    <GitHubCalendar
                        username="W-code81"
                        colorScheme="dark"
                        fontSize={14}
                        blockSize={11}
                        blockMargin={3}
                        theme={{
                            dark: [
                                "#1a0020",  // empty — near black with fuchsia tint
                                "#5b0a6e",  // low
                                "#8b1a9e",  // medium-low
                                "#c026d3",  // medium-high — your primary
                                "#d946ef",  // highest — fuchsia-500
                            ],
                        }}
                    />
                </div>

            </section>
        </div>
    );
}

export default GithubGraph;

