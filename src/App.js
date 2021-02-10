import React from 'react';
import MyNavbar from './components/mynavbar/mynavbar.components'; 
import AboutMe from './components/aboutmeslider/aboutme'
import Skills from './pages/skills/skills.component';
import './components/aboutmeslider/slider.css';
import Experience from './components/experience/experience';
import Projects from './components/projects/projects.component'
function App() {
  return (
    <div>
    <MyNavbar/>
    <AboutMe/>
    <Skills/>
    <Projects/>
    <Experience/>
    </div>
  );
}

export default App;
