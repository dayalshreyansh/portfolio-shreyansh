
import './App.css';
import Navbar from './components/Navbar.js';
import Intro from './components/Intro.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import Achivements from './components/Achivements.js';
import Divider from './components/Divider.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div style={{backgroundColor:"#212529"}}>
      <Navbar/>
      <Intro/>
      <Divider/>
      <div id='skill' style={{height:"5vh"}}></div>
      <Skills/>
      <Divider/>
      <div id='achivements' style={{height:"5vh"}}></div>
      <Achivements/>
      <Divider/>
      <div id='projects'style={{height:"5vh"}}> </div>
      <Projects/> 
      <Divider/>
      <div id='footer'style={{height:"5vh"}}></div>
      <Footer/> 
    </div>
  );
}

export default App;
