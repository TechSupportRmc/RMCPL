import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [navbarMobile, setNavbarMobile] = useState(false);
  const [dropdownActive, setDropdownActive] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add('header-scrolled');
        } else {
          header.classList.remove('header-scrolled');
        }
      }

      const navbarlinks = document.querySelectorAll('#navbar .scrollto');
      const position = window.scrollY + 200;
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return;
        const section = document.querySelector(navbarlink.hash);
        if (!section) return;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active');
        } else {
          navbarlink.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileNav = () => {
    setNavbarMobile(!navbarMobile);
  };

  const handleDropdownClick = (e, dropdownId) => {
    e.preventDefault();
    setDropdownActive((prevState) => ({
      ...prevState,
      [dropdownId]: !prevState[dropdownId],
    }));
  };

  return (
    <header id="header" className={`fixed-top ${navbarMobile ? 'navbar-mobile' : ''}`}>
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <Link to="/">
            <img src="/logo.jpg" alt="Logo" />
          </Link>
        </h1>
        <nav id="navbar" className={`navbar ${navbarMobile ? 'navbar-mobile' : ''}`}>
          <ul>
            <li>
              <Link className={`nav-link scrollto ${location.pathname === '/' ? 'active' : ''}`} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={`nav-link scrollto ${location.pathname === '/specialalitychem' ? 'active' : ''}`} to="/specialalitychem">
                Speciality Chemicals
              </Link>
            </li>
            <li>
              <Link className={`nav-link scrollto ${location.pathname === '/bulk-drug' ? 'active' : ''}`} to="/bulk-drug">
                Bulk Drugs
              </Link>
            </li>
            <li className={`dropdown ${dropdownActive['instruments'] ? 'dropdown-active' : ''}`} id="instruments">
              <a href="#" onClick={(e) => handleDropdownClick(e, 'instruments')}>
                <span>Instruments</span> <i className="bx bx-chevron-down"></i>
              </a>
              <ul>
                <li className={`dropdown ${dropdownActive['pulp-paper'] ? 'dropdown-active' : ''}`} id="pulp-paper">
                  <a href="/paperpulp" onClick={(e) => handleDropdownClick(e, 'pulp-paper')}>
                    <span>Pulp & Paper</span> <i className="bx bx-chevron-down"></i>
                  </a>
                  <ul className="second-dropdown" style={{ left: '15rem' }}>
                  <li>
                      <Link to="/paperpulp">Pulp & Paper</Link>
                    </li>
                    <li>
                      <Link to="/PPwetendQC">Wet End QC / R&D Instruments</Link>
                    </li>
                    <li>
                      <Link to="/paperTesting">Paper Testing Instruments</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/packaingtesting">Packaging Testing</Link>
                </li>
                <li>
                  <Link to="/rd">R&D Laboratory Instrument</Link>
                </li>
                <li>
                  <Link to="/industrial">Industrial Equipment’s</Link>
                </li>
                <li>
                  <Link to="/wastewater">Water/Waste Water Testing Equipments</Link>
                </li>
                <li>
                  <Link to="/textile">Textile Testing</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className={`nav-link scrollto ${location.pathname === '/services' ? 'active' : ''}`} to="/services">
                Service
              </Link>
            </li>
            <li>
              <Link className={`nav-link scrollto ${location.pathname === '/about' ? 'active' : ''}`} to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className={`nav-link scrollto ${location.pathname === '/careers' ? 'active' : ''}`} to="/careers">
                Careers
              </Link>
            </li>
            <li>
              <Link className="getstarted scrollto" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <i
            className={`fa ${navbarMobile ? 'fa-times' : 'fa-bars'} mobile-nav-toggle`}
            aria-label="Toggle navigation"
            onClick={toggleMobileNav}
          ></i>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
