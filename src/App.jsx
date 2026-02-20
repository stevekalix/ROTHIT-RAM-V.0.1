import Nav from './components/Nav';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';

function App() {
    return (
        <div className="App">
            <Nav />
            <Hero />
            <Summary />
            <Skills />
            <Education />
            <Hobbies />
            <Contact />
        </div>
    );
}

export default App;
