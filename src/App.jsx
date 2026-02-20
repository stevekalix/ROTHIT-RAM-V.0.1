import Nav from './components/Nav';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Nav />
            <Hero />
            <Summary />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Hobbies />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
