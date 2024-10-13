'use client';

import { CardContent, Card } from '@/components/ui/card';
import { useEffect } from 'react';

export default function Capacitaciones() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Bruno+Ace&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="bg-lightGray dark:bg-dark-bg text-gray-900 dark:text-gray-900 min-h-screen">
      <header className="text-dark bg-primary px-4 py-20 text-center">
        <h1 className="mb-10 font-bruno text-3xl  text-gray-900 dark:text-gray-900">
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

        <section className="py-12 pb-4">
          <h2 className="mb-12 px-4 text-center font-bruno text-4xl  text-primary">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 gap-6 px-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Asesoramiento Personalizado',
                description:
                  'Trabajamos con instituciones para integrar la robótica en el plan de estudios de manera efectiva.',
              },
              {
                title: 'Capacitación Docente',
                description:
                  'Ofrecemos talleres para que educadores adquieran habilidades esenciales en robótica, desde lo básico hasta lo avanzado.',
              },
              {
                title: 'Recursos Didácticos Innovadores',
                description:
                  'Proporcionamos materiales alineados con estándares educativos, facilitando una enseñanza atractiva de la robótica.',
              },
              {
                title: 'Seguimiento y Evaluación Continua',
                description:
                  'Acompañamos a las instituciones con seguimientos regulares, evaluando progresos y ajustando estrategias según sea necesario.',
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border border-gray-700 dark:border-gray-300 transform overflow-hidden rounded-lg dark:bg-dark-gray bg-lightGray shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <CardContent className="p-6 text-black dark:text-white">
                  <h3 className="mb-6 text-2xl ">{service.title}</h3>
                  <p className="text-xl">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="container mx-auto px-4 pt-14">
            <h2 className="mb-12 text-center font-bruno text-4xl  text-primary">
              Beneficios para las Instituciones
            </h2>
            <ul className="mb-4 list-disc pl-5 text-xl text-gray-900 dark:text-gray-300">
              {[
                {
                  title: 'Fomento de la Creatividad',
                  description:
                    'La robótica educativa estimula la creatividad y el pensamiento crítico.',
                },
                {
                  title: 'Aprendizaje Práctico',
                  description:
                    'Nuestro enfoque permite a los estudiantes aplicar conocimientos teóricos a través de proyectos de robótica.',
                },
                {
                  title: 'Preparación para el Futuro',
                  description:
                    'Integrar la robótica contribuye a formar estudiantes listos para un mundo digital en evolución.',
                },
              ].map((benefit, index) => (
                <li key={index} className="mb-2">
                  <strong>{benefit.title}:</strong> {benefit.description}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
