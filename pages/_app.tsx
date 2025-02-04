import '../src/index.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from '../components/Logo';
import React, { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

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
            <Logo animate={true} />
          </div>
          <nav>
            <Link href="/" className={router.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
            <Link href="/about" className={router.pathname === '/about' ? 'active' : ''}>
              About
            </Link>
            <Link href="/join" className={router.pathname === '/join' ? 'active' : ''}>
              Join Us
            </Link>
          </nav>
        </header>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
