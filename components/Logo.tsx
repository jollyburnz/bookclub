import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

interface LogoProps {
  animate?: boolean;
}

const Logo: React.FC<LogoProps> = ({ animate = true }) => {
  const logoRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (logoRef.current && animate) {
      const paths = logoRef.current.querySelectorAll('.cls-3');
      const pathAnimations: anime.AnimeInstance[] = []; // Explicit type annotation

      paths.forEach((path, index) => {
        const pathLength = path.getTotalLength();
        path.setAttribute('stroke-dasharray', pathLength);
        path.setAttribute('stroke-dashoffset', pathLength);

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
    <svg ref={logoRef} id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="46.26" height="48.48" viewBox="0 0 46.26 48.48">
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
      <path className="cls-1" d="M25.8.57C18.82.05,12,2.45,7.69,8.19c-2.42,3.22-2.77,5.79-3.96,8.64-.7,1.68-3.63,7.2-3.17,8.54.99,2.87,4.19,1.27,4.92,2.34.65.96-.39,6.5.73,8.54,2.35,4.24,7.57,1.25,8.84,2.95.57.76-.09,7.49.45,8.23.17.24.32.24.55.33.87.32,17.59.25,18.5.08.23-.04.63-.1.79-.24.71-.63.11-7,.33-8.4.49-3.23,3.59-3.78,6.85-8.84C51.33,16.66,41.04,1.71,25.8.57Z"/>
      <polyline className="cls-3" points="10.48 23.51 10.48 17.5 12.39 17.5 12.95 17.53 13.51 17.74 13.97 18.14 14.11 18.61 14.11 19.15 13.88 19.65 13.38 19.98 12.95 20.16 12.36 20.26 10.55 20.26 12.39 20.26 12.95 20.35 13.61 20.51 14.14 20.85 14.43 21.15 14.54 21.58 14.54 22.19 14.26 22.77 13.8 23.14 12.99 23.45 12.39 23.51 10.55 23.51"/>
      <polyline className="cls-3" points="20.85 22.84 20.16 23.33 19.24 23.63 18.32 23.51 17.46 23.08 16.8 22.35 16.48 21.58 16.38 20.42 16.48 19.34 16.91 18.45 17.56 17.78 18.32 17.44 19.17 17.38 19.94 17.53 20.46 17.84 20.62 18.02"/>
      <polyline className="cls-3" points="25.13 23.63 25.13 17.65 22.07 21.64 26.21 21.64"/>
      <polyline className="cls-3" points="28.25 23.63 28.25 17.47 30.59 17.47 31.18 17.62 31.61 17.93 31.94 18.33 32.07 18.94 32.04 19.49 31.77 20.11 31.28 20.48 30.59 20.72 29.81 20.75 28.22 20.75"/>
      <polyline className="cls-3" points="34.28 23.48 34.28 17.5 36.13 17.5 36.88 17.68 37.44 17.97 37.83 18.33 38.3 19.04 38.45 19.83 38.45 20.32 38.42 20.96 38.33 21.7 38.07 22.22 37.6 22.87 36.88 23.26 36.19 23.45 35.67 23.48 34.31 23.48"/>
      <path className="cls-1" d="M39.19,12.28c-2.84-5.32-8.44-8.94-14.89-8.94"/>
      <path className="cls-1" d="M41.17,20.21c0,2.87-.72,5.57-1.98,7.93"/>
      <path className="cls-1" d="M39.19,28.14c-2.84,5.32-8.44,8.94-14.89,8.94"/>
      <path className="cls-1" d="M39.19,12.28c1.26,2.36,1.98,5.06,1.98,7.93"/>
      <path className="cls-1" d="M32.4,15.53c-.16-1.13-.38-2.23-.65-3.25"/>
      <path className="cls-1" d="M24.31,37.08c3.22,0,6.02-3.62,7.44-8.94"/>
      <path className="cls-1" d="M31.75,12.28c-1.42-5.32-4.22-8.94-7.44-8.94"/>
      <path className="cls-1" d="M31.75,28.14c.28-1.07.5-2.21.67-3.39"/>
      <path className="cls-1" d="M24.31,28.14v-3.39"/>
      <path className="cls-1" d="M24.31,37.08v-8.94"/>
      <path className="cls-2" d="M24.31,12.28V3.34"/>
      <path className="cls-1" d="M24.31,12.28v3.25"/>
      <path className="cls-1" d="M24.31,37.08c-3.22,0-6.02-3.62-7.44-8.94"/>
      <path className="cls-1" d="M16.86,28.14c-.28-1.07-.5-2.21-.67-3.39"/>
      <path className="cls-1" d="M16.21,15.53c.16-1.13.38-2.23.65-3.25"/>
      <path className="cls-1" d="M16.86,12.28c1.42-5.32,4.22-8.94,7.44-8.94"/>
      <path className="cls-1" d="M24.31,37.08c-6.45,0-12.05-3.62-14.89-8.94"/>
      <path className="cls-1" d="M9.42,12.28c2.84-5.32,8.44-8.94,14.89-8.94"/>
      <path className="cls-1" d="M7.44,20.21c0,2.87.72,5.57,1.98,7.93"/>
      <path className="cls-1" d="M9.42,12.28c-1.26,2.36-1.98,5.06-1.98,7.93"/>
      <line className="cls-1" x1="16.86" y1="12.28" x2="24.31" y2="12.28"/>
      <line className="cls-1" x1="39.19" y1="12.28" x2="31.75" y2="12.28"/>
      <line className="cls-1" x1="16.86" y1="12.28" x2="9.42" y2="12.28"/>
      <line className="cls-1" x1="24.31" y1="12.28" x2="31.75" y2="12.28"/>
      <line className="cls-1" x1="16.86" y1="28.14" x2="24.31" y2="28.14"/>
      <line className="cls-1" x1="31.75" y1="28.14" x2="24.31" y2="28.14"/>
      <line className="cls-1" x1="39.19" y1="28.14" x2="31.75" y2="28.14"/>
      <line className="cls-1" x1="16.86" y1="28.14" x2="9.42" y2="28.14"/>
    </svg>
  );
};

export default Logo;
