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
    { src: '/assets/img/marcas/medife.png', alt: 'Medife' },
  ];

  return (
    <div className="overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee space-x-8">
          {brands.concat(brands).map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-6"
              aria-label={`Logo de ${brand.alt}`}
            >
              <Image
                src={brand.src}
                alt={`Logo de ${brand.alt}`}
                width={120}
                height={120}
                priority={false}
                className="object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
