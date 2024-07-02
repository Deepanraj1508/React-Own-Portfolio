import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div style={{margin: '11px'}}>
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  );
}

export default App;
