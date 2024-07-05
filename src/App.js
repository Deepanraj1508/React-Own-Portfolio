import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import AboutPage from './components/AboutPage/AboutPage';
import ContactUs from './components/ContactUs/ContactUs';
import Project from './components/Project/Project';
import { animateScroll as scroll } from 'react-scroll';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = useCallback(() => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  }, [showScroll]);

  const scrollTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [checkScrollTop]);

  return (
    <div style={{ margin: '0px 0px' }}>
      <Navbar />
      <Hero />
      <Project />
      <AboutPage />
      <ContactUs />
      <Footer />
      <div className={`scroll-to-top ${showScroll ? 'show' : ''}`} onClick={scrollTop}>
        &#9650;
      </div>
    </div>
  );
}

export default App;
