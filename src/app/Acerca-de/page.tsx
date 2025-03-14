'use client';

import { useEffect } from 'react';
import Background from '@/components/Background';
import MissionAndValues from '@/components/About/MissionAndValues';
import Team from '@/components/About/Team';
import Testimonials from '@/components/About/Testimonials';
import Inscription from '@/components/Inscription';
import Data from '@/components/Data';

export default function About() {
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

      {/* Header */}
      <header className="bg-primary dark:bg-primary py-12 text-center">
        <h2 className="mb-4 font-bruno text-4xl text-gray-900 dark:text-gray-900">
          ACERCA DE
        </h2>
        <h1 className="mb-10 font-bruno text-4xl text-gray-900 dark:text-gray-900">
          IABOT
        </h1>
        <p className="font-bruno text-2xl text-gray-900 dark:text-gray-900">
          CONOCE MÁS SOBRE NOSOTROS
        </p>
      </header>

      {/* Main Content */}
      <main>
        {/* Nuestra Misión y Valores */}
        <MissionAndValues />

        {/* Testimonios */}
        <Testimonials />

        {/* Equipo */}
        <Team />

        {/* Sección de Inscripción */}
        <Inscription />

        {/* Sección de Datos */}
        <Data />
      </main>
    </div>
  );
}
