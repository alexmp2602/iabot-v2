'use client';

import HeartIcon from '@/components/icons/Heart';
import LightbulbIcon from '@/components/icons/Lightbulb';
import SmileIcon from '@/components/icons/Smile';
import StarIcon from '@/components/icons/Star';

export default function MissionAndValues() {
  const values = [
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
  ];

  return (
    <section className="py-16 bg-transparent dark:bg-transparent">
      <h2 className="pb-8 text-center font-bruno text-4xl text-primary dark:text-dark-primary">
        Nuestra Misión y Valores
      </h2>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-8 md:grid-cols-2 lg:grid-cols-4">
        {values.map((value, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
          >
            {value.icon}
            <h3 className="my-4 font-bruno text-2xl text-gray-900 dark:text-white">
              {value.title}
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
