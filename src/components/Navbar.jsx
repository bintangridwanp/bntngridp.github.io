import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

function Navbar({ onSearchOpen }) {
  const [isSticky, setIsSticky] = useState(false);
  const [isLightMode, setIsLightMode] = useState(() => document.body.classList.contains("light-mode"));
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Deteksi scroll untuk sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update light mode state jika body dimodifikasi secara eksternal (misal pada mount global)
  useEffect(() => {
    setIsLightMode(document.body.classList.contains("light-mode"));
  }, []);

  // Fungsi toggle tema gelap/terang
  const toggleTheme = () => {
    const nextLightMode = !isLightMode;
    setIsLightMode(nextLightMode);
    if (nextLightMode) {
      document.body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Navigasi cerdas untuk tombol Contact Me
  const handleContactClick = (e) => {
    closeMobileMenu();
    if (location.pathname !== '/') {
      e.preventDefault();
      navigate('/');
      setTimeout(() => {
        const contactSec = document.getElementById('contact');
        if (contactSec) {
          contactSec.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      e.preventDefault();
      const contactSec = document.getElementById('contact');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header id="navbar" className={isSticky ? 'sticky' : ''}>
      <div className="logo">
        <div className="logo-box">B</div>
      </div>

      <ul className={`navlist ${isMobileMenuOpen ? 'active' : ''}`}>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMobileMenu}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMobileMenu}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/certifications" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMobileMenu}>
            Certifications
          </NavLink>
        </li>
        <li>
          <NavLink to="/repositories" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMobileMenu}>
            Repositories
          </NavLink>
        </li>
        <li>
          <NavLink to="/cv" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMobileMenu}>
            CV
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMobileMenu}>
            Blog
          </NavLink>
        </li>
      </ul>

      <div className="header-btns">
        <div className="search-trigger" id="search-btn" onClick={onSearchOpen}>
          <i className="ri-search-line"></i>
          <span className="search-kb">/ K</span>
        </div>
        <div className="theme-toggle" id="theme-toggle" onClick={toggleTheme}>
          <i className={isLightMode ? 'ri-sun-line' : 'ri-moon-line'}></i>
        </div>
        <a href="#contact" className="contact-btn" onClick={handleContactClick}>
          Contact Me <i className="ri-arrow-right-up-line"></i>
        </a>
        <div className={`bx bx-menu ${isMobileMenuOpen ? 'bx-x' : ''}`} id="menu-icon" onClick={toggleMobileMenu}></div>
      </div>
    </header>
  );
}

export default Navbar;
