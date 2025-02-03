import React, { useEffect, useState } from 'react';
    import { Routes, Route, Link, useLocation } from 'react-router-dom';
    import Home from './Home';
    import About from './About';
    import JoinUs from './JoinUs';
    import Logo from './components/Logo';

    function App() {
      const [loading, setLoading] = useState(true);
      const location = useLocation();

      useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
          document.querySelector('.container')?.classList.add('loaded');
        }, 2000); // Match the animation duration

        return () => clearTimeout(timer);
      }, []);

      return (
        <>
          {loading && (
            <div className="logo-container">
              <div className="logo-placeholder">
                <Logo animate={false} />
              </div>
            </div>
          )}
          <div className="container">
            <header className="header">
              <div className="logo-placeholder">
                <Logo />
              </div>
              <nav>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
                <Link to="/join" className={location.pathname === '/join' ? 'active' : ''}>Join Us</Link>
              </nav>
            </header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/join" element={<JoinUs />} />
            </Routes>
          </div>
        </>
      );
    }

    export default App;
