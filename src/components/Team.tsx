import { CardContent, Card } from '@/components/ui/card';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Franco',
    title:
      'Técnico en Informática y Profesor de Tecnología especializado en robótica educativa, aplicando tecnología y creatividad en sus clases. Postítulo en Programación y Robótica Educativa (UNER).',
    image: '/assets/img/equipo/fran-modified.png',
  },
  {
    name: 'Adrián',
    title:
      'Profesor de Matemática y Tecnología especializado en robótica educativa, integrando matemática con robótica para un aprendizaje completo. Postítulo en Programación y Robótica Educativa (UNER).',
    image: '/assets/img/equipo/adri-modified.png',
  },
  {
    name: 'Alex',
    title:
      'Desarrollador Web y Profesor de Robótica Educativa especializado en la enseñanza de programación y robótica, aplicando tecnologías digitales en el aula. Tecnicatura en Programación (UTN).',
    image: '/assets/img/equipo/alex-modified.png',
  },
];

const Team = () => {
  return (
    <section className="bg-transparent dark:bg-transparent">
      <h2 className="py-12 text-center font-bruno text-3xl text-primary">
        CONOCE A NUESTRO EQUIPO
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-12 text-center text-xl text-gray-700 dark:text-gray-300">
          En IABOT, contamos con un equipo altamente capacitado y comprometido
          con la educación y la robótica. Nos capacitamos continuamente en
          nuevas tecnologías...
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {teamMembers.map((member) => (
            <Card
              className="border border-gray-700 dark:border-gray-300 w-full transform bg-white dark:bg-gray-800 py-8 transition-transform hover:scale-105 hover:shadow-lg"
              key={member.name}
            >
              <CardContent>
                <Image
                  alt={member.name}
                  className="mx-auto h-48 w-48 rounded-full object-cover border-4 border-gray-300 dark:border-gray-700"
                  height={200}
                  loading="lazy"
                  src={member.image}
                  style={{
                    aspectRatio: '1/1',
                    objectFit: 'cover',
                    backgroundColor: 'white',
                  }}
                  width={200}
                />
                <h3 className="my-4 text-center text-2xl font-bruno leading-6 text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="mt-4 px-4 text-center text-lg text-gray-700 dark:text-gray-300">
                  {member.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
