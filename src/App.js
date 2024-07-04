import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import AboutPage from './components/AboutPage/AboutPage';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    <div style={{margin: '0px 0px'}}>
      <Navbar/>
      <Hero/>
      <AboutPage/>
      <ContactUs/>
      <Footer/>
     
    </div>
  );
}

export default App;
