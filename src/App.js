import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from './index.css';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 320px)').matches && window.matchMedia('(max-height: 320px)').matches);
  }, []);

  return (
    <div>
      <Navbar />
      {isMobile ? (
        <div>
          <Home mobile />
          <About mobile />
          <Skills mobile />
          <Work mobile />
          <Contact mobile />
        </div>
      ) : (
        <div>
          <Home />
          <About />
          <Skills />
          <Work />
          <Contact />
        </div>
      )}
    </div>
  );
};

export default App;