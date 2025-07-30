import Header from './components/Header/Header';
import Hero from './components/Hero';
import AboutMe from './components/About-Me';
import Skills from './components/Skills';
import Works from './components/Works';
import Experience from './components/Experienxe/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="bg-gradient-futuristic text-white min-h-screen">
      <Header />
      <Navigation />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Works />
        <Experience />
        <Contact />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
