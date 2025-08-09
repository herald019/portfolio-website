import Navbar from './components/navbar';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contacts';
import Hero from './components/hero'; 

function App() {
  return (
    <div className="bg-gradient-to-b from-green-900 via-black to-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}


export default App;
