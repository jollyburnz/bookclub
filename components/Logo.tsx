import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

interface LogoProps {
  animate?: boolean;
}

const Logo: React.FC<LogoProps> = ({ animate = true }) => {
  const logoRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (logoRef.current && animate) {
      const paths = logoRef.current.querySelectorAll('.cls-3') as NodeListOf<SVGPathElement | SVGPolylineElement>; // Correct type
      const pathAnimations: anime.AnimeInstance[] = []; // Explicit type annotation

      paths.forEach((path, index) => {
        const pathLength = path.getTotalLength();
        path.setAttribute('stroke-dasharray', pathLength.toString());
        path.setAttribute('stroke-dashoffset', pathLength.toString());

        pathAnimations.push(
          anime({
            targets: path,
            strokeDashoffset: [0, anime.setDashoffset],
            easing: 'easeInOutSine',
            duration: 1000,
            autoplay: false,
            direction: 'alternate',
          })
        );
      });

      const animateSequentially = (index: number) => {
        if (index < pathAnimations.length) {
          pathAnimations[index].play();
          pathAnimations[index].finished.then(() => {
            animateSequentially(index + 1);
          });
        } else {
          // loop
          paths.forEach((path, index) => {
            pathAnimations[index].play();
            pathAnimations[index].finished.then(() => {
              animateSequentially(0);
            });
          });
        }
      };
      animateSequentially(0);
    }
  }, [animate]);

  return (
    <svg ref={logoRef} id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
      <defs>
        <style>
          {`
            .cls-1, .cls-2 {
              stroke-miterlimit: 10;
            }

            .cls-1, .cls-2, .cls-3 {
              fill: none;
              stroke: #231f20;
            }

            .cls-2, .cls-3 {
              stroke-width: 1px;
            }

            .cls-3 {
              stroke-linecap: square;
            }
          `}
        </style>
      </defs>
      <path className="cls-1" d="M27.12,1.33c-6.98-.52-13.8,1.88-18.12,7.62-2.42,3.22-2.77,5.79-3.96,8.64-.7,1.68-3.63,7.2-3.17,8.54.99,2.87,4.19,1.27,4.92,2.34.65.96-.39,6.5.73,8.54,2.35,4.24,7.57,1.25,8.84,2.95.57.76-.09,7.49.45,8.23.17.24.32.24.55.33.87.32,17.59.25,18.5.08.23-.04.63-.1.79-.24.71-.63.11-7,.33-8.4.49-3.23,3.59-3.78,6.85-8.84,8.81-13.69-1.48-28.64-16.71-29.79Z"/>
      <polyline className="cls-3" points="11.8 24.27 11.8 18.26 13.71 18.26 14.27 18.29 14.83 18.5 15.29 18.9 15.43 19.37 15.43 19.91 15.2 20.41 14.69 20.74 14.27 20.92 13.68 21.02 11.86 21.02 13.71 21.02 14.27 21.11 14.92 21.26 15.46 21.61 15.75 21.91 15.85 22.34 15.85 22.95 15.58 23.53 15.12 23.9 14.31 24.21 13.71 24.27 11.86 24.27"/>
      <polyline className="cls-3" points="22.17 23.59 21.48 24.09 20.55 24.39 19.63 24.27 18.78 23.84 18.12 23.1 17.8 22.34 17.7 21.18 17.8 20.1 18.22 19.21 18.88 18.54 19.63 18.2 20.49 18.14 21.25 18.29 21.78 18.6 21.94 18.78"/>
      <polyline className="cls-3" points="26.44 24.39 26.44 18.41 23.39 22.4 27.53 22.4"/>
      <polyline className="cls-3" points="29.57 24.39 29.57 18.23 31.91 18.23 32.5 18.38 32.93 18.69 33.25 19.08 33.39 19.7 33.36 20.25 33.09 20.87 32.6 21.24 31.91 21.48 31.12 21.51 29.54 21.51"/>
      <polyline className="cls-3" points="35.59 24.24 35.59 18.26 37.44 18.26 38.2 18.44 38.76 18.72 39.15 19.08 39.62 19.8 39.77 20.59 39.77 21.08 39.74 21.72 39.65 22.46 39.39 22.98 38.92 23.62 38.2 24.02 37.51 24.21 36.98 24.24 35.63 24.24"/>
      <path className="cls-1" d="M40.51,13.04c-2.84-5.32-8.44-8.94-14.89-8.94"/>
      <path className="cls-1" d="M42.49,20.97c0,2.87-.72,5.57-1.98,7.93"/>
      <path className="cls-1" d="M40.51,28.9c-2.84,5.32-8.44,8.94-14.89,8.94"/>
      <path className="cls-1" d="M40.51,13.04c1.26,2.36,1.98,5.06,1.98,7.93"/>
      <path className="cls-1" d="M33.72,16.29c-.16-1.13-.38-2.23-.65-3.25"/>
      <path className="cls-1" d="M25.62,37.84c3.22,0,6.02-3.62,7.44-8.94"/>
      <path className="cls-1" d="M33.07,13.04c-1.42-5.32-4.22-8.94-7.44-8.94"/>
      <path className="cls-1" d="M33.07,28.9c.28-1.07.5-2.21.67-3.39"/>
      <path className="cls-1" d="M25.62,28.9v-3.39"/>
      <path className="cls-1" d="M25.62,37.84v-8.94"/>
      <path className="cls-1" d="M25.62,13.04V4.1"/>
      <path className="cls-1" d="M25.62,13.04v3.25"/>
      <path className="cls-1" d="M25.62,37.84c-3.22,0-6.02-3.62-7.44-8.94"/>
      <path className="cls-1" d="M18.18,28.9c-.28-1.07-.5-2.21-.67-3.39"/>
      <path className="cls-1" d="M17.53,16.29c.16-1.13.38-2.23.65-3.25"/>
      <path className="cls-1" d="M18.18,13.04c1.42-5.32,4.22-8.94,7.44-8.94"/>
      <path className="cls-1" d="M25.62,37.84c-6.45,0-12.05-3.62-14.89-8.94"/>
      <path className="cls-1" d="M10.74,13.04c2.84-5.32,8.44-8.94,14.89-8.94"/>
      <path className="cls-1" d="M8.75,20.97c0,2.87.72,5.57,1.98,7.93"/>
      <path className="cls-1" d="M10.74,13.04c-1.26,2.36-1.98,5.06-1.98,7.93"/>
      <line className="cls-1" x1="18.18" y1="13.04" x2="25.62" y2="13.04"/>
      <line className="cls-2" x1="40.51" y1="13.04" x2="33.07" y2="13.04"/>
      <line className="cls-1" x1="18.18" y1="13.04" x2="10.74" y2="13.04"/>
      <line className="cls-1" x1="25.62" y1="13.04" x2="33.07" y2="13.04"/>
      <line className="cls-1" x1="18.18" y1="28.9" x2="25.62" y2="28.9"/>
      <line className="cls-1" x1="33.07" y1="28.9" x2="25.62" y2="28.9"/>
      <line className="cls-1" x1="40.51" y1="28.9" x2="33.07" y2="28.9"/>
      <line className="cls-1" x1="18.18" y1="28.9" x2="10.74" y2="28.9"/>
    </svg>
  );
};

export default Logo;
