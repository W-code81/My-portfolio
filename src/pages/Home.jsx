import Hero from "../sections/Hero";
import AboutTeaser from "../sections/AboutTeaser";
import SocialLinks from "../components/SocialLinks";
import Navbar from "../components/Navbar";
import WorkTeaser from "../sections/WorkTeaser";

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