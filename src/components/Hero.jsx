import React from "react";
// import { motion } from "motion/react";
import About from "./About";
import Button from "./Btn";
import { Download, MoveDown } from "lucide-react";

function CreateBtn({ text, onClick, icon: Icon }) {
    return (
        <Button 
            key={text}
            text={text} 
            onClick={onClick} 
            icon={Icon}
        />
    );
}

const btnInfo = [
    { text: "Contact Me", icon: MoveDown, onClick: () => alert("Contact me clicked!") },
    { text: "Download Resume", icon: Download, onClick: () => alert("Download resume clicked!") }
];

function Hero() {
    return (
        <div>
            <div className="hero">
                <h1>BUILDING THE <br />WEB OF <br />TOMMOROW</h1>

                <p>I craft beautiful, functional web experiences with modern technologies.<br />
                Passionate about clean code, elegant design, and solving complex problems.</p>

                <div>
                    {btnInfo.map(CreateBtn)}
                </div>
                

            </div>

            <About />
            
        </div>

    )
}

export default Hero;