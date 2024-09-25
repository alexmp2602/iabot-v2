import { CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const cursos = [
  {
    imgSrc: "/assets/img/cursos/lego-wedo.jpg",
    alt: "Introducción a la Robótica con LEGO WeDo 2.0",
    title: "Introducción a la Robótica con LEGO WeDo 2.0",
    requisitos: "Requisitos: Tener entre 6 y 12 años de edad.",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdOqv7K6jisyiLCJLVaXudGCL6BHCZAoo2DCNjW-XlSP99MwQ/viewform",
  },
  {
    imgSrc: "/assets/img/cursos/lego-spike-essential.jpg",
    alt: "Robótica Avanzada con LEGO Spike Essential",
    title: "Robótica Avanzada con LEGO Spike Essential",
    requisitos: "Requisitos: 1er año secundario o Introducción a Robótica con LEGO WeDo 2.0",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdOqv7K6jisyiLCJLVaXudGCL6BHCZAoo2DCNjW-XlSP99MwQ/viewform",
  },
  {
    imgSrc: "/assets/img/cursos/lego-spike-prime.jpg",
    alt: "Robótica Experta con LEGO Spike Prime",
    title: "Robótica Experta con LEGO Spike Prime",
    requisitos: "Requisitos: Robótica Avanzada con LEGO Spike Essential",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdOqv7K6jisyiLCJLVaXudGCL6BHCZAoo2DCNjW-XlSP99MwQ/viewform",
  },
  {
    imgSrc: "/assets/img/cursos/lego-ev3.jpg",
    alt: "Robótica con Lego EV3",
    title: "Robótica con Lego EV3",
    requisitos: "Requisitos: 2do año secundario o haber cursado todos los niveles anteriores",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdOqv7K6jisyiLCJLVaXudGCL6BHCZAoo2DCNjW-XlSP99MwQ/viewform",
  },
  {
    imgSrc: "/assets/img/cursos/lego-education.jpg",
    alt: "Capacitación para Docentes",
    title: "Capacitación para Docentes",
    requisitos: "Capacitación y asesoramiento especializado para docentes de instituciones",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdOqv7K6jisyiLCJLVaXudGCL6BHCZAoo2DCNjW-XlSP99MwQ/viewform",
  },
];

export default function Cursos() {
  return (
    <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cursos.map((curso, index) => (
        <Card
          key={index}
          className="dark:bg-[#E8F5E9] bg-[#E8F5E9] shadow-lg rounded transition-transform transform hover:scale-105 duration-200"
        >
          <CardContent className="text-black p-5 space-y-3 flex flex-col justify-between h-full">
            <div>
              <Image
                src={curso.imgSrc}
                alt={curso.alt}
                width="400"
                height="200"
                className="rounded-lg"
              />
              <h3 className="font-bold text-lg mt-2">{curso.title}</h3>
              <p className="text-sm mt-2">{curso.requisitos}</p>
            </div>
            <a href={curso.formLink} target="_blank" rel="noopener noreferrer">
              <Button className="mt-4 dark:bg-[#78eb2c] bg-[#78eb2c] dark:hover:bg-[#32cddb] hover:bg-[#32cddb] text-white transition-colors duration-200">
                Inscribirse
              </Button>
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}