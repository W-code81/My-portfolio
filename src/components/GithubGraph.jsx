import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Tooltip } from "react-tooltip";

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
                        renderBlock={(block, activity) => //render a custom tooltip for each block in the calendar, showing the date and number of contributions for that day
                           //react.cloneElement is used to clone the original block element and add custom data attributes for the tooltip, which will be used to display the tooltip content when the user hovers over a block
                            React.cloneElement(block, { //block — the actual <rect> SVG element the library was going to render
                                'data-tooltip-id': 'github-tooltip',
                                "data-tooltip-content": `${activity.count} contribution${activity.count == 1 ? "" : "s"} on ${activity.date}`, //activity — the data for that specific day: { date: "2024-08-15", count: 3, level: 2 }
                            })
                        }
                    />
                    <Tooltip
                        id="github-tooltip"
                        style={{
                            backgroundColor: "#1a0b2e",
                            border: "1px solid rgba(192,38,211,0.3)",
                            color: "white",
                            fontSize: "12px",
                            borderRadius: "8px",
                            padding: "6px 10px",
                        }} />
                </div>

            </section>
        </div>
    );
}

export default GithubGraph;

