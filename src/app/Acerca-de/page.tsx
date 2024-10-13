'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { CardContent, Card } from '@/components/ui/card';
import HeartIcon from '@/components/icons/Heart';
import LightbulbIcon from '@/components/icons/Lightbulb';
import SmileIcon from '@/components/icons/Smile';
import StarIcon from '@/components/icons/Star';

export default function About() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Bruno+Ace&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="bg-light-gray dark:bg-dark-gray text-gray-900 dark:text-gray-900 min-h-screen">
      <header className="bg-primary py-16 text-center">
        <h2 className="mb-4 font-bruno text-4xl  text-gray-900 dark:text-gray-900">
          ACERCA DE
        </h2>
        <h1 className="mb-10 font-bruno text-4xl  text-gray-900 dark:text-gray-900">
          IABOT
        </h1>
        <p className="font-bruno text-2xl text-gray-900 dark:text-gray-900">
          CONOCE MÁS SOBRE NOSOTROS
        </p>
      </header>
      <main>
        <section>
          <div className="bg-light-gray dark:bg-dark-bg">
            <h2 className="py-12 text-center font-bruno text-4xl  text-primary">
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
                  <h3 className="mb-4 font-bruno text-2xl  text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-xl lg:pb-12 text-gray-700 dark:text-gray-300">
                    {value.description}
                  </p>{' '}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-light-gray dark:bg-dark-bg">
          <h2 className="py-12 text-center font-bruno text-3xl  text-primary">
            CONOCE A NUESTRO EQUIPO
          </h2>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-12 text-center text-xl text-gray-700 dark:text-gray-300">
              En IABOT, contamos con un equipo altamente capacitado y
              comprometido con la educación y la robótica. Nos capacitamos
              continuamente en nuevas tecnologías...
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  name: 'Franco',
                  title:
                    'Técnico en Informática y Profesor de Tecnología. Especializado en la enseñanza de robótica educativa a nivel básico y avanzado, con un enfoque en el desarrollo de habilidades prácticas en los estudiantes. (Postítulo en Programación y Robótica Educativa, UNER).',
                  image: '/assets/img/equipo/fran-modified.png',
                },
                {
                  name: 'Adrián',
                  title:
                    'Profesor de Matemática y Tecnología. Enfocado en la enseñanza de robótica educativa, combinando sus conocimientos matemáticos con la robótica para crear un aprendizaje integral. (Postítulo en Programación y Robótica Educativa, UNER).',
                  image: '/assets/img/equipo/adri-modified.png',
                },
                {
                  name: 'Alex',
                  title:
                    'Desarrollador Web y Profesor de Robótica Educativa. Especializado en la enseñanza de programación y robótica con kits LEGO, integrando tecnologías digitales en el aula. (Certificación en LEGO Education Academy).',
                  image: '/assets/img/equipo/alex-modified.png',
                },
              ].map((member) => (
                <Card
                  className="border border-gray-700 dark:border-gray-300 w-full transform bg-white dark:bg-dark-gray py-8 transition-transform hover:scale-105"
                  key={member.name}
                >
                  <CardContent>
                    <Image
                      alt={member.name}
                      className="mx-auto h-48 w-48 rounded-full object-cover"
                      height={200}
                      loading="lazy"
                      src={member.image}
                      style={{
                        aspectRatio: '200/200',
                        objectFit: 'cover',
                        backgroundColor: 'white',
                      }}
                      width={200}
                    />
                    <h3 className="my-4 text-center text-2xl font-bruno leading-6 text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="mt-6 text-center text-xl text-gray-700 dark:text-gray-300">
                      {member.title}
                    </p>{' '}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-light-gray dark:bg-dark-bg py-12">
          <h2 className="py-12 text-center font-bruno text-4xl  text-primary">
            Testimonios
          </h2>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {[
                {
                  quote:
                    'Las clases de robótica son espectaculares! Mi hijo empezó con 5 años. Es la única actividad de la semana que espera con tanto entusiasmo! El profe es una masa, todas las clases vuelve con nuevas ideas, feliz de participar. ¡Recomiendo! 👏',
                  author: 'Sara, Madre de Estudiante',
                },
                {
                  quote:
                    'Cambió la dinámica en el aula. Mis chicos se entusiasman mucho más con las actividades y aprenden de manera divertida. Es un recurso que realmente ayuda a que se sientan más involucrados.',
                  author: 'María, Docente de Primaria',
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-700 dark:border-gray-300 bg-white dark:bg-dark-gray p-6"
                >
                  <p className="text-xl italic text-gray-800 dark:text-gray-300">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <p className="mt-4 text-right text-sm  text-gray-900 dark:text-white">
                    - {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
