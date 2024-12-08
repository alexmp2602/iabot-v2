'use client';

import Image from 'next/image';

export default function TrustedBrands() {
  const brands = [
    {
      src: '/assets/img/logos/swiss-medical-logo.png',
      alt: 'Swiss Medical',
    },
    {
      src: '/assets/img/logos/colegio-los-robles-logo.png',
      alt: 'Colegio Los Robles',
    },
    {
      src: '/assets/img/logos/sm-gusta-logo.jpg',
      alt: 'SM Gusta',
    },
    {
      src: '/assets/img/logos/mas-cerca-logo.jpg',
      alt: 'Más Cerca',
    },
    {
      src: '/assets/img/logos/red-full-logo.jpg',
      alt: 'Red Full',
    },
  ];

  return (
    <section className="py-12 bg-light-gray dark:bg-dark-bg">
      <h2 className="pb-6 text-center font-bruno text-4xl text-primary dark:text-dark-primary">
        Marcas que Confían en Nosotros
      </h2>
      <div className="container mx-auto grid grid-cols-2 gap-4 px-8 sm:grid-cols-3 lg:grid-cols-5">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-6 rounded-lg bg-white shadow-lg dark:bg-gray-800 transition-transform duration-300 hover:scale-105"
            aria-label={`Logo de ${brand.alt}`}
          >
            <Image
              src={brand.src}
              alt={`Logo de ${brand.alt}`}
              width={120}
              height={120}
              className="object-contain aspect-square"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
