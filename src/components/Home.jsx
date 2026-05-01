import Hero from "./Hero";
import AboutTeaser from "./AboutTeaser";
import SocialLinks from "./SocialLinks";
import Navbar from "./Navbar";

function Home(){
    return(
        <div>
            <Navbar />
            <Hero />
            <AboutTeaser />
            <SocialLinks />
        </div>
    )
}

export default Home;