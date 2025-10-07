import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import SpecialDish from './components/SpecialDish';
import Menue from './components/Menue';
import Testimonials from './components/Testimonials';
import Reservations from './components/Reservations';
import Features from './components/Features';
import Event from './components/Event';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      {/* These stay visible all the time */}
      <TopBar />
      <Header />

      {/* These change when you navigate */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<>
        
        <Services />
        <Event/></>} />
        <Route path="/about" element={<About />} />
        <Route path="/menue" element={<>
        <Menue />
        <Testimonials />
        </>} />
        <Route path="/reservations" element={<>
        <Reservations />
        <Footer/>
        </>} />
       
        <Route path="/special-dish" element={<SpecialDish />} />
       
        <Route path="/features" element={<Features />} />
        
      </Routes>

      {/* Footer should also always be visible */}
      
    </BrowserRouter>
  );
}

export default App;
