import React from 'react';
import MyNavbar from './components/mynavbar/mynavbar.components'; 
import AboutMe from './components/aboutmeslider/aboutme'
import Skills from './pages/skills/skills.component';
import './components/aboutmeslider/slider.css';
import Experience from './components/experience/experience';

import Research from './components/research/research.component'
import Footer from './components/footer/footer.component'
import Protry from './components/protry/protry.component'
function App() {
  return (
    <div>
    <MyNavbar/>
    <AboutMe/>
    <Skills/>
    <Protry/>
    <Experience/>
    <Research/>
    <Footer/>
    </div>
  );
}

export default App;
