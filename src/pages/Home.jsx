import Hero from "../sections/Hero";
import AboutTeaser from "../sections/AboutTeaser";
import WorkTeaser from "../sections/WorkTeaser";
import Contacts from "../sections/Contacts";

function Home({setActive}){
    return(
        <div>
            <Hero />  
            <AboutTeaser setActive={setActive} /> {/* pass setActive to AboutTeaser so that the terminal buttons can change the section */}
            <WorkTeaser setActive={setActive}/>
            <Contacts />
        </div>
    )
}

export default Home;