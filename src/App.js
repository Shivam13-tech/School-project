import './index.css';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Career from './components/Career';
import Home from './components/Home';
import School1 from './components/School1'
import School2 from './components/School2'
import School3 from './components/School3'
import School4 from './components/School4'
import Academics from './components/Academics';
import NavigationBar from './components/Navigationbar';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/career" element={<Career />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/School1" element={<School1 />} />
      <Route path="/School2" element={<School2 />} />
      <Route path="/School3" element={<School3 />} />
      <Route path="/School4" element={<School4 />} />
      <Route path="*" element={<Home />}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
