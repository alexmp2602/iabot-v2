'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function TrustedBrands() {
  const brands = [
    { src: '/assets/img/marcas/swiss-medical-logo.png', alt: 'Swiss Medical' },
    {
      src: '/assets/img/marcas/colegio-los-robles-logo.png',
      alt: 'Colegio Los Robles',
    },
    { src: '/assets/img/marcas/sm-gusta-logo.jpg', alt: 'SM Gusta' },
    { src: '/assets/img/marcas/mas-cerca-logo.jpg', alt: 'Más Cerca' },
    { src: '/assets/img/marcas/red-full-logo.jpg', alt: 'Red Full' },
    { src: '/assets/img/marcas/colegio-sm.png', alt: 'Colegio Santa María' },
    { src: '/assets/img/marcas/on-axion.jpg', alt: 'On Axion Energy' },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('trusted-brands');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 px-6 transition-opacity duration-700 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {brands.map((brand, index) => (
        <div
          key={index}
          className="flex items-center justify-center bg-transparent transition-transform duration-300 hover:scale-105 hover:brightness-110"
          aria-label={`Logo de ${brand.alt}`}
        >
          <Image
            src={brand.src}
            alt={`Logo de ${brand.alt}`}
            width={150}
            height={150}
            className="object-contain aspect-square rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}
