import { CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const cursos = [
  {
    imgSrc: "/assets/img/cursos/lego-wedo.jpg",
    alt: "Introducción a la Robótica con LEGO WeDo 2.0",
    title: "Introducción a la Robótica con LEGO WeDo 2.0",
    requisitos:
      "Requisitos: 1° año secundario o Introducción a Robótica con LEGO WeDo 2.0",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdOqv7K6jisyiLCJLVaXudGCL6BHCZAoo2DCNjW-XlSP99MwQ/viewform",
  },
  {
    imgSrc: "/assets/img/cursos/lego-spike-essential.jpg",
    alt: "Robótica Avanzada con LEGO Spike Essential",
    title: "Robótica Avanzada con LEGO Spike Essential",
    requisitos:
      "Requisitos: 1er año secundario o Introducción a Robótica con LEGO WeDo 2.0",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdOqv7K6jisyiLCJLVaXudGCL6BHCZAoo2DCNjW-XlSP99MwQ/viewform",
  },
  {
    imgSrc: "/assets/img/cursos/lego-spike-prime.jpg",
    alt: "Robótica Experta con LEGO Spike Prime",
    title: "Robótica Experta con LEGO Spike Prime",
    requisitos: "Requisitos: Robótica Avanzada con LEGO Spike Essential",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdOqv7K6jisyiLCJLVaXudGCL6BHCZAoo2DCNjW-XlSP99MwQ/viewform",
  },
  {
    imgSrc: "/assets/img/cursos/lego-ev3.jpg",
    alt: "Robótica Aplicada con Lego EV3",
    title: "Robótica con Lego EV3",
    requisitos:
      "Requisitos: 2° año secundario o haber cursado todos los niveles anteriores",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdOqv7K6jisyiLCJLVaXudGCL6BHCZAoo2DCNjW-XlSP99MwQ/viewform",
  },
  {
    imgSrc: "/assets/img/cursos/capacitaciones.jpg",
    alt: "Capacitación para Docentes",
    title: "Capacitación para Docentes",
    requisitos:
      "Capacitación y asesoramiento especializado para docentes de instituciones",
    formLink:
      "https://api.whatsapp.com/send?phone=5492324468366&text=Hola,%20quiero%20consultar%20por%20las%20capacitaciones%20para%20docentes.%20¿Podrías%20darme%20más%20información%20sobre%20los%20cursos%20disponibles?%20¡Gracias!",
  },
  {
    imgSrc: "/assets/img/cursos/family-day.jpg",
    alt: "Family Day: Experiencia de Robótica Educativa para Empresas",
    title: "Family Day: Experiencia de Robótica Educativa para Empresas",
    requisitos:
      "Una jornada donde empleados y sus familias disfrutan creando y programando robots con kits LEGO, promoviendo el trabajo en equipo y la diversión en un ambiente innovador.",
    formLink:
      "https://api.whatsapp.com/send?phone=5492324468366&text=Hola,%20quiero%20consultar%20por%20el%20Family%20Day.%20%C2%BFPodr%C3%ADas%20darme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20esta%20experiencia?%20%C2%A1Gracias!",
  },
];

export default function Cursos() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-8 md:grid-cols-2 lg:grid-cols-3">
      {cursos.map((curso, index) => (
        <Card
          key={index}
          className="transform rounded bg-[#E8F5E9] shadow-lg transition-transform duration-200 hover:scale-105 dark:bg-[#E8F5E9]"
        >
          <CardContent className="flex h-full flex-col justify-between space-y-3 p-5 text-black">
            <div>
              <Image
                src={curso.imgSrc}
                alt={curso.alt}
                width="400"
                height="200"
                className="rounded-lg object-cover object-center"
              />
              <h3 className="mt-2 text-lg font-bold">{curso.title}</h3>
              <p className="mt-2 text-sm">{curso.requisitos}</p>
            </div>
            <a href={curso.formLink} target="_blank" rel="noopener noreferrer">
              <Button className="mt-4 bg-[#78eb2c] text-white transition-colors duration-200 hover:bg-[#32cddb] dark:bg-[#78eb2c] dark:hover:bg-[#32cddb]">
                {curso.title === "Capacitación para Docentes" ||
                curso.title.startsWith("Family Day")
                  ? "Consúltanos"
                  : "Inscribirse"}
              </Button>
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
