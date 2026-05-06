import Hero from "../sections/Hero";
import AboutTeaser from "../sections/AboutTeaser";
import Navbar from "../components/Navbar";
import WorkTeaser from "../sections/WorkTeaser";
import Contacts from "../sections/Contacts";

function Home(){
    return(
        <div>
            <Navbar />
            <Hero />  
            <AboutTeaser />
            <WorkTeaser />
            <Contacts />
        </div>
    )
}

export default Home;