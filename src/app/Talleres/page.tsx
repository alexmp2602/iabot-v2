'use client';

import Background from '@/components/Background';
import Data from '@/components/Data';
import Inscription from '@/components/Inscription';
import Talleres from '@/components/Talleres';
import { useState, useEffect } from 'react';

const faqs = [
  {
    question: '¿Qué talleres ofrecen?',
    answer:
      'Ofrecemos talleres de robótica, programación y STEM para todas las edades.',
  },
  {
    question: '¿Cómo puedo inscribirme?',
    answer:
      'Puedes inscribirte completando el formulario de inscripción en nuestra página web. También puedes contactarnos por correo electrónico o teléfono para más información.',
  },
  {
    question: '¿Cuál es la duración de los talleres?',
    answer:
      'La duración de nuestros talleres varía según el nivel y la temática.',
  },
  {
    question: '¿Cuál es la edad mínima para participar en los talleres?',
    answer: 'La edad mínima para participar en nuestros talleres es de 6 años.',
  },
  {
    question: '¿Qué materiales necesito para los talleres?',
    answer:
      'Proporcionamos todos los materiales necesarios para nuestros talleres. No necesitas traer nada.',
  },
  {
    question: '¿Cuál es el horario de los talleres?',
    answer:
      'Los horarios de los talleres varían según el nivel y la temática. Consulta por los horarios disponibles.',
  },
  {
    question: '¿Hay descuentos para grupos?',
    answer: 'Sí, ofrecemos descuentos especiales para grupos de estudiantes.',
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos pagos en efectivo y transferencias bancarias.',
  },
  {
    question: '¿Ofrecen talleres para docentes?',
    answer:
      'Sí, ofrecemos talleres de capacitación en robótica y programación para docentes.',
  },
  {
    question: '¿Otorgan algún tipo de certificado?',
    answer:
      'Sí, entregamos un certificado digital de participación por cada nivel completado.',
  },
];

export default function TalleresComponent() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Bruno+Ace&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const commonClasses =
    'rounded-lg bg-transparent dark:bg-transparent border border-gray-700 dark:border-gray-300 p-4 shadow-md';

  return (
    <div className="relative min-h-screen bg-transparent dark:bg-transparent">
      <Background />

      <header className="bg-primary py-20 text-center">
        <h2 className="mb-10 font-bruno text-4xl text-gray-900 dark:text-gray-900">
          NUESTROS TALLERES
        </h2>
        <p className="font-bruno text-2xl text-gray-900 dark:text-gray-900">
          Explora nuestros talleres y encuentra el que más te interesa
        </p>
      </header>

      <main>
        <section>
          <h2 className="py-12 text-center font-bruno text-5xl text-primary">
            Descubre Nuestros talleres
          </h2>
          <p className="mb-12 text-center text-xl text-gray-900 dark:text-white">
            Cada uno de nuestros talleres está diseñado para brindar la mejor
            experiencia de aprendizaje.
          </p>
          <Talleres />
        </section>

        <section className="bg-transparent dark:bg-transparent">
          <h2 className="py-12 text-center font-bruno text-5xl text-primary">
            Preguntas Frecuentes
          </h2>
          <div className="pb-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`flex w-full justify-between ${commonClasses} hover:bg-gray-100 dark:hover:bg-dark-gray dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary`}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-${index}`}
                  aria-live="polite"
                >
                  <span className="text-left text-lg text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <span>{openIndex === index ? '-' : '+'}</span>
                </button>
                {openIndex === index && (
                  <div
                    id={`faq-${index}`}
                    className="mt-2 rounded-lg bg-gray-100 dark:bg-dark-gray p-4 text-lg text-gray-700 dark:text-gray-300"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        {/* Sección de Inscripción */}
        <Inscription />

        {/* Sección de Datos */}
        <Data />
      </main>
    </div>
  );
}
