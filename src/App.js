import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { animateScroll as scroll } from 'react-scroll';
import Main from './pages/Main';

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
      <BrowserRouter>
        <Navbar />
       <Routes>
        <Route path='React-Own-Portfolio/' element={<Main/>}/>
       </Routes>
       <Footer/>
      </BrowserRouter>
      <div className={`scroll-to-top ${showScroll ? 'show' : ''}`} onClick={scrollTop}>
        &#9650;
      </div>
    </div>
  );
}

export default App;
