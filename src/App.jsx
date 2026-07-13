import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';

import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Certifications from './pages/Certifications';
import Repositories from './pages/Repositories';
import CV from './pages/CV';
import Blog from './pages/Blog';

function AppContent() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  // Inisialisasi AOS & Deteksi Rute Baru
  useEffect(() => {
    AOS.init({ offset: 100, duration: 1000, once: true });
  }, []);

  useEffect(() => {
    // Memberikan delay kecil untuk mematangkan DOM rendering sebelum refresh AOS
    setTimeout(() => {
      AOS.refresh();
    }, 100);
    // Scroll ke atas setiap kali ganti rute
    window.scrollTo(0, 0);
  }, [location]);

  // Efek keydown untuk toggle search modal (CMD/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <Navbar onSearchOpen={() => setIsSearchOpen(true)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  // Inisialisasi Tema di luar render loop sesegera mungkin
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
