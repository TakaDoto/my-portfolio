import React from 'react';
import MyNavbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';


const App: React.FC = () => {
  return (
    <>
      <MyNavbar />
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default App;
