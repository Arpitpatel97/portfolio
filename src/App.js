import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Navbar from './components/navbar';
import ParticlesComponent from './utils/particles';
import { loadFull } from 'tsparticles';
import Particle from './utils/particles';
import Particles from 'react-tsparticles';

function App() {

  const handleInit=async(main)=>{
         await loadFull(main);
  }
  return (
    <div className="App">
      
      <Navbar />
      {/* <Particle id="particles" options={Particles} init={handleInit} /> */}
      {/* main page content */}
      <div className='App__main-page-content'>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
     
      </div>
      
    </div>
  );
}

export default App;