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
    <div className="bg-lightGray text-black min-h-screen">
      <header className="text-dark bg-primary px-4 py-20 text-center">
        <h2 className="mb-4 font-bruno text-4xl font-bold text-black">
          CAPACITACIONES
        </h2>
        <p className="text-2xl font-semibold text-black">
          Transforma la educación con nuestro servicio de asesoramiento y
          capacitación en robótica educativa.
        </p>
      </header>

      <main>
        <section className="pt-12">
          <div className="container mx-auto px-4">
            <p className="text-center text-2xl">
              En IABOT, ofrecemos asesoramiento y capacitación en robótica
              educativa para instituciones educativas. Creemos que la robótica
              es clave para preparar a las nuevas generaciones para los desafíos
              del futuro.
            </p>
          </div>
        </section>

        <section className="py-12 pb-4">
          <h2 className="mb-12 px-4 text-center font-bruno text-4xl font-bold text-primary">
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
                className="transform overflow-hidden rounded-lg dark:bg-white bg-[#E8F5E9] shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <CardContent className="p-6 text-black">
                  <h3 className="mb-6 text-2xl font-bold">{service.title}</h3>
                  <p className="text-xl">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="container mx-auto px-4 pt-14">
            <h1 className="mb-12 text-center font-bruno text-4xl font-bold text-primary">
              Beneficios para las Instituciones
            </h1>
            <ul className="mb-4 list-disc pl-5 text-xl">
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
