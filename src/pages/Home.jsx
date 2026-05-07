import Hero from "../sections/Hero";
import AboutTeaser from "../sections/AboutTeaser";
import WorkTeaser from "../sections/WorkTeaser";
import Contacts from "../sections/Contacts";

function Home(){
    return(
        <div>
            <Hero />  
            <AboutTeaser />
            <WorkTeaser />
            <Contacts />
        </div>
    )
}

export default Home;