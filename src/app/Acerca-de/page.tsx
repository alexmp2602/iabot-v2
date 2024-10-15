'use client';

import { useEffect } from 'react';
import Background from '@/components/Background';
import HeartIcon from '@/components/icons/Heart';
import LightbulbIcon from '@/components/icons/Lightbulb';
import SmileIcon from '@/components/icons/Smile';
import StarIcon from '@/components/icons/Star';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';

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

      <header className="bg-primary dark:bg-primary py-16 text-center">
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

      <main>
        <section>
          <div className="bg-transparent dark:bg-transparent">
            <h2 className="py-12 text-center font-bruno text-4xl text-primary">
              Nuestra Misión y Valores
            </h2>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <LightbulbIcon aria-label="Innovación" />,
                  title: 'Innovación',
                  description:
                    'Nos mantenemos al día en las últimas tendencias y tecnologías de la robótica para ofrecer a nuestros estudiantes una educación de calidad en esta disciplina en constante evolución.',
                },
                {
                  icon: <HeartIcon aria-label="Pasión" />,
                  title: 'Pasión',
                  description:
                    'Transmitimos nuestra pasión por la robótica y la educación, motivando a nuestros estudiantes y fomentando su interés en ciencia y tecnología.',
                },
                {
                  icon: <StarIcon aria-label="Excelencia" />,
                  title: 'Excelencia',
                  description:
                    'Nos dedicamos a brindar un servicio excepcional, cuidando cada detalle, desde el diseño del curso hasta la atención a nuestros estudiantes y sus familias.',
                },
                {
                  icon: <SmileIcon aria-label="Diversión" />,
                  title: 'Diversión',
                  description:
                    'Creamos un ambiente de enseñanza amigable y relajado, donde los estudiantes se sienten cómodos y disfrutan de un aprendizaje divertido.',
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  {value.icon}
                  <h3 className="mb-4 font-bruno text-2xl text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-xl lg:pb-12 text-gray-700 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Team />
        <Testimonials />
      </main>
    </div>
  );
}
