
// components 
import Contact from '../components/Contact';
import FindMe from '../components/FindMe';
import Footer from '../components/Footer';
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
            <FindMe/>
            <Footer/>
        </div>
    )
}

export default Home