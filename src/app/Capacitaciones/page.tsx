'use client';

import { useEffect } from 'react';
import Background from '@/components/Background';
import Services from '@/components/Services';
import Benefits from '@/components/Benefits';

export default function Capacitaciones() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Bruno+Ace&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Background />

      <header className="text-dark bg-primary px-4 py-20 text-center">
        <h1 className="mb-10 font-bruno text-3xl text-gray-900 dark:text-gray-900">
          CAPACITACIONES
        </h1>
        <p className="font-bruno text-xl text-gray-900 dark:text-gray-900">
          Transforma la educación con nuestro servicio de asesoramiento y
          capacitación en robótica educativa.
        </p>
      </header>

      <main>
        <section className="pt-12">
          <div className="container mx-auto px-4">
            <p className="text-center text-2xl text-gray-900 dark:text-white">
              En IABOT, ofrecemos asesoramiento y capacitación en robótica
              educativa para instituciones educativas. Creemos que la robótica
              es clave para preparar a las nuevas generaciones para los desafíos
              del futuro.
            </p>
          </div>
        </section>
        <Services />
        <Benefits />
      </main>
    </div>
  );
}
