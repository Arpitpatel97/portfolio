 
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';
import Skills from './containers/skills'
import Navbar from './components/navbar';
 function App() {
  return (
    <div className="App">
      {/*particles js*/}
     <Navbar/>
      {/*main page content */}


      <Routes>
      <Route index path="/" element={<Home/>}></Route>
      <Route  path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route  path="/portfolio" element={<Portfolio/>}></Route>
      <Route path="/resume" element={<Resume/>}></Route>
      <Route path="/skills" element={<Skills/>}></Route>
      </Routes>
          </div>
  );
}

export default App;
