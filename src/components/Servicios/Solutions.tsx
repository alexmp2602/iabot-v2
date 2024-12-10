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
        'Diseñados para niños desde los 6 años, nuestros kits fomentan el aprendizaje práctico y divertido de la robótica y la programación. Compatibles con dispositivos Android, tablets y celulares, ideales para escuelas, jardines de infantes y familias. Trabajamos con kits de marcas reconocidas como LEGO Education y desarrollos propios.',
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
        'Ofrecemos formación online especializada para instituciones educativas, enfocándonos en pensamiento computacional e inteligencia artificial. Diseñamos experiencias prácticas y adaptadas a las necesidades de docentes y alumnos.',
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
        'Colaboramos con jardines, colegios y empresas para desarrollar estrategias tecnológicas adaptadas a sus objetivos educativos. Diseñamos propuestas que integran recursos innovadores y plataformas digitales, garantizando experiencias de aprendizaje efectivas y atractivas.',
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
        'Brindamos formación especializada para docentes y equipos educativos que buscan incorporar herramientas tecnológicas en sus aulas. Desde talleres prácticos hasta asesoramiento en la implementación de programas STEAM.',
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
        '¿Tenés una idea? ¡Nosotros la hacemos realidad! Creamos soluciones a medida, desde kits personalizados hasta desarrollos tecnológicos únicos, adaptados a las necesidades específicas de cada cliente.',
      icon: (
        <WrenchIcon
          aria-label="Proyectos a Medida"
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
