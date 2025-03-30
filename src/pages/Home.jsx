
// components 
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import FindMe from '../components/FindMe';
import Hero from '../components/Hero';
import MyWorks from '../components/MyWorks';
import Parter from '../components/Parter';
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
            {/* <Parter /> */}
            {/* 
            <div className="tooltip" data-tip="hello">
                <button className="btn">Hover me</button>
            </div> */}
        </div>
    )
}

export default Home