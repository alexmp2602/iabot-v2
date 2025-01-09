import { CardContent, Card } from '@/components/ui/card';
import Button from '@/components/ui/button';
import Image from 'next/image';

const cursos = [
  {
    imgSrc: '/assets/img/cursos/webp/400x400/lego-wedo.webp',
    alt: 'Introducción a la Robótica con LEGO WeDo 2.0',
    title: 'Introducción a la Robótica con LEGO WeDo 2.0',
    requisitos: 'Tener 6 años o experiencia previa en Robótica Básica.',
    formLink:
      'https://docs.google.com/forms/d/e/1FAIpQLSdOqv7K6jisyiLCJLVaXudGCL6BHCZAoo2DCNjW-XlSP99MwQ/viewform',
  },
  {
    imgSrc: '/assets/img/cursos/webp/400x400/lego-spike-essential.webp',
    alt: 'Robótica Avanzada con LEGO Spike Essential',
    title: 'Robótica Avanzada con LEGO Spike Essential',
    requisitos:
      '1º año secundario o Introducción a Robótica con LEGO WeDo 2.0.',
    formLink:
      'https://docs.google.com/forms/d/e/1FAIpQLSdOqv7K6jisyiLCJLVaXudGCL6BHCZAoo2DCNjW-XlSP99MwQ/viewform',
  },
  {
    imgSrc: '/assets/img/cursos/webp/400x400/lego-spike-prime.webp',
    alt: 'Robótica Experta con LEGO Spike Prime',
    title: 'Robótica Experta con LEGO Spike Prime',
    requisitos: 'Robótica Avanzada con LEGO Spike Essential.',
    formLink:
      'https://docs.google.com/forms/d/e/1FAIpQLSdOqv7K6jisyiLCJLVaXudGCL6BHCZAoo2DCNjW-XlSP99MwQ/viewform',
  },
  {
    imgSrc: '/assets/img/cursos/webp/400x400/lego-ev3.webp',
    alt: 'Robótica Aplicada con Lego EV3',
    title: 'Robótica Aplicada con Lego EV3',
    requisitos:
      '2° año secundario o haber cursado todos los niveles anteriores.',
    formLink:
      'https://docs.google.com/forms/d/e/1FAIpQLSdOqv7K6jisyiLCJLVaXudGCL6BHCZAoo2DCNjW-XlSP99MwQ/viewform',
  },
  {
    imgSrc: '/assets/img/cursos/webp/400x400/capacitaciones.webp',
    alt: 'Capacitación para Docentes',
    title: 'Capacitación para Docentes',
    requisitos:
      'Capacitación y Asesoramiento Especializado para Docentes de Instituciones.',
    formLink:
      'https://api.whatsapp.com/send?phone=5492324468366&text=Hola,%20quiero%20consultar%20por%20las%20capacitaciones%20para%20docentes.%20¿Podrías%20darme%20más%20información%20sobre%20los%20cursos%20disponibles?%20¡Gracias!',
  },
  {
    imgSrc: '/assets/img/cursos/webp/400x400/family-day.webp',
    alt: 'Family Day: Experiencia de Robótica Educativa para Empresas',
    title: 'Family Day: Experiencia de Robótica Educativa para Empresas',
    requisitos:
      'Una jornada en la que empleados y sus familias disfrutan creando y programando robots con kits LEGO.',
    formLink:
      'https://api.whatsapp.com/send?phone=5492324468366&text=Hola,%20quiero%20consultar%20por%20el%20Family%20Day.%20%C2%BFPodr%C3%ADas%20darme%20más%20informaci%C3%B3n%20sobre%20esta%20experiencia?%20%C2%A1Gracias!',
  },
];

export default function Cursos() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
      {cursos.map((curso, index) => (
        <Card
          key={index}
          className="transform rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg transition-transform duration-300 hover:scale-105"
        >
          <CardContent className="flex h-full flex-col justify-between p-5 text-black dark:text-white">
            <div>
              <Image
                src={curso.imgSrc}
                alt={curso.alt}
                width={400}
                height={400}
                sizes="(max-width: 600px) 100vw, 400px"
                className="rounded-lg object-cover"
              />
              <h3 className="mt-3 text-xl font-bold text-black dark:text-white">
                {curso.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {curso.requisitos}
              </p>
            </div>
            <a
              href={curso.formLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Más información sobre ${curso.title}`}
            >
              <Button className="mt-4 w-full bg-primary text-white dark:bg-secondary dark:text-black rounded-lg py-2 hover:bg-secondary hover:dark:bg-primary transition-colors duration-200">
                {curso.title.startsWith('Family Day') ||
                curso.title === 'Capacitación para Docentes'
                  ? 'Consultar'
                  : 'Inscribirse'}
              </Button>
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
