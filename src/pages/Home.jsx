
// components 
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import FindMe from '../components/FindMe';
import Hero from '../components/Hero';
import MyWorks from '../components/MyWorks';
import Skills from '../components/Skills';


function Home() {



    return (
        <div className='space-y-10 wrap'>
            <Hero />
            <AboutMe />
            <Skills />
            <MyWorks />
            <Contact />
            <FindMe />
        </div>
    )
}

export default Home