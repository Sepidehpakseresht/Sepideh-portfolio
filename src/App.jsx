import Header from './components/Header/Header';
import Hero from './components/Hero';
import AboutMe from './components/About-Me';
import Skills from './components/Skills';
import Works from './components/Works';
import Experience from './components/Experienxe/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background3D from './components/Background3D';

function App() {
  return (
    <div className="bg-space-black text-white min-h-screen relative overflow-x-hidden">
      <Background3D />
      <div className="relative z-10">
        <Header />
        <Hero />
        <AboutMe />
        <Skills />
        <Works />
        <Experience />
        <Contact />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
