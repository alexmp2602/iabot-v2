'use client';

import { useEffect } from 'react';
import Background from '@/components/Background';
import Solutions from '@/components/Servicios/Solutions';
import TrustedBrands from '@/components/TrustedBrands';

export default function Services() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Bruno+Ace&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen relative">
      <Background />

      <header className="bg-primary dark:bg-primary py-12 text-center">
        <h2 className="mb-4 font-bruno text-4xl text-gray-900 dark:text-gray-900">
          SERVICIOS
        </h2>
        <h1 className="mb-10 font-bruno text-4xl text-gray-900 dark:text-gray-900">
          ¿QUÉ OFRECEMOS?
        </h1>
        <p className="font-bruno text-2xl text-gray-900 dark:text-gray-900">
          Descubre nuestras soluciones tecnológicas y educativas.
        </p>
      </header>

      <main>
        {/* Soluciones en Tecnología Educativa */}
        <Solutions />

        {/* Marcas que confían en nosotros */}
        <TrustedBrands />
      </main>
    </div>
  );
}
