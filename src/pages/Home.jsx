
// components 
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import MyWorks from '../components/MyWorks';
import Skills from '../components/Skills';


function Home() {
    return (
        <div>
            <Hero />
            <MyWorks />
            <Skills />
            <Contact />
        </div>
    )
}

export default Home