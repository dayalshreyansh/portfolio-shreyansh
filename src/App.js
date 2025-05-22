
import './App.css';
import Navbar from './components/Navbar.js';
import Intro from './components/Intro.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import Divider from './components/Divider.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div id="home" style={{backgroundColor:"#1e3646"}}>
      <Navbar/>
      <Intro/>
      <Divider/>
      <div id='skill'></div>
      <Skills/>
      <Divider/>
      <div id='achivements'></div>
      {/* <Achivements/> */}
      {/* <Divider/> */}
      <div id='projects'> </div>
      <Projects/>
      <div id='footer'></div>
      <Footer/> 
    </div>
  );
}

export default App;
