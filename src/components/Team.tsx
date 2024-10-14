import { CardContent, Card } from '@/components/ui/card';
import Image from 'next/image';

const teamMembers = [
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
              className="border border-gray-700 dark:border-gray-300 w-full transform bg-transparent dark:bg-transparent py-8 transition-transform hover:scale-105"
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
