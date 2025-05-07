'use client';

import {
  AcademicCapIcon,
  PuzzlePieceIcon,
  CogIcon,
  BookOpenIcon,
  WrenchIcon,
} from '@heroicons/react/24/outline';

export default function Solutions() {
  const solutions = [
    {
      title: 'Kits de Robótica y Programación',
      description:
        'Kits para niños desde los 5 años. Aprendizaje práctico con tablets, celulares y computadoras. Usamos robots de LEGO Education y desarrollos propios.',
      icon: (
        <PuzzlePieceIcon
          aria-label="Kits de Robótica y Programación"
          className="h-12 w-12 text-primary"
        />
      ),
    },
    {
      title: 'Capacitaciones Virtuales',
      description:
        'Formación online en pensamiento computacional, robótica, programación e inteligencia artificial. Prácticas, dinámicas y adaptadas a cada institución.',
      icon: (
        <AcademicCapIcon
          aria-label="Capacitaciones Virtuales"
          className="h-12 w-12 text-primary"
        />
      ),
    },
    {
      title: 'Estrategias Educativas Personalizadas',
      description:
        'Diseñamos propuestas tecnológicas a medida para jardines, escuelas y empresas. Innovación aplicada a tus objetivos educativos.',
      icon: (
        <CogIcon
          aria-label="Estrategias Educativas Personalizadas"
          className="h-12 w-12 text-primary"
        />
      ),
    },
    {
      title: 'Capacitación y Asesoramiento',
      description:
        'Formación docente en herramientas digitales y programas STEAM. Acompañamiento desde la práctica.',
      icon: (
        <BookOpenIcon
          aria-label="Capacitación y Asesoramiento"
          className="h-12 w-12 text-primary"
        />
      ),
    },
    {
      title: 'Proyectos a Medida',
      description:
        'Desarrollamos kits y soluciones tecnológicas según tus necesidades, con el material que posean en su institución. Hacemos realidad tus ideas.',
      icon: (
        <WrenchIcon
          aria-label="Proyectos a Medida"
          className="h-12 w-12 text-primary"
        />
      ),
    },
    {
      title: 'Marketing de Fidelidad',
      description:
        'Impulsamos relaciones duraderas con alumnos y familias. Beneficios, promociones y comunicación personalizada.',
      icon: (
        <CogIcon
          aria-label="Marketing de Fidelidad"
          className="h-12 w-12 text-primary"
        />
      ),
    },
  ];

  return (
    <section className="py-12 bg-transparent dark:bg-transparent">
      <h2 className="pb-8 text-center font-bruno text-4xl text-primary dark:text-dark-primary">
        Soluciones en Tecnología Educativa
      </h2>
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border-t-4 border-primary dark:border-dark-primary shadow-lg bg-white dark:bg-gray-800 transition-transform duration-300 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div className="mb-4 flex justify-center">{solution.icon}</div>
              <h3 className="my-4 font-bruno text-2xl text-primary dark:text-dark-primary">
                {solution.title}
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
