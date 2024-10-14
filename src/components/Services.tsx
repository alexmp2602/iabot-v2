import { CardContent, Card } from '@/components/ui/card';

const services = [
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
];

const Services = () => {
  return (
    <section className="py-12 pb-4">
      <h2 className="mb-12 px-4 text-center font-bruno text-4xl text-primary">
        Nuestros Servicios
      </h2>
      <div className="grid grid-cols-1 gap-6 px-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <Card
            key={index}
            className="border border-gray-700 dark:border-gray-300 transform overflow-hidden rounded-lg dark:bg-dark-gray bg-transparent shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <CardContent className="p-6 text-black dark:text-white">
              <h3 className="mb-6 text-2xl">{service.title}</h3>
              <p className="text-xl">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
