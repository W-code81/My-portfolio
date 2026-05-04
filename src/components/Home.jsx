import Hero from "./Hero";
import AboutTeaser from "./AboutTeaser";
import SocialLinks from "./SocialLinks";
import Navbar from "./Navbar";
import WorkTeaser from "./WorkTeaser";

function Home(){
    return(
        <div>
            <Navbar />
            <Hero />  
            <WorkTeaser />
            <AboutTeaser />
            <SocialLinks />
        </div>
    )
}

export default Home;