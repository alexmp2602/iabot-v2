import { CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Cursos() {
  return (
    <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="dark:border-grey bg-white dark:bg-white shadow-lg rounded">
        <CardContent className="dark:text-black p-4">
          <Image
            src="/assets/img/cursos/lego-wedo.jpg"
            alt="Introducción a la Robótica con LEGO WeDo 2.0"
            layout='responsive'
            height="150"
            width="300"
          />
          <h3 className="font-bold mt-2">
            Introducción a la Robótica con LEGO WeDo 2.0
          </h3>
          <p className="text-sm mt-4">
            Requisitos: Tener entre 6 y 12 años de edad.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdOqv7K6jisyiLCJLVaXudGCL6BHCZAoo2DCNjW-XlSP99MwQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="mt-4 bg-verde-iabot dark:bg-verde-iabot text-white">
              Inscribirse
            </Button>
          </a>
        </CardContent>
      </Card>
      <Card className="dark:border-grey bg-white dark:bg-white shadow-lg rounded">
        <CardContent className="dark:text-black p-4">
          <Image
            src="/assets/img/cursos/lego-spike-essential.jpg"
            alt="Robótica Avanzada con LEGO Spike Essential"
            layout='responsive'
            height="150"
            width="300"
          />
          <h3 className="font-bold mt-2">
            Robótica Avanzada con LEGO Spike Essential
          </h3>
          <p className="text-sm mt-4">
            Requisitos: 1er año secundario o Introducción a Robótica con LEGO
            WeDo 2.0
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdOqv7K6jisyiLCJLVaXudGCL6BHCZAoo2DCNjW-XlSP99MwQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="mt-4 bg-verde-iabot dark:bg-verde-iabot text-white">
              Inscribirse
            </Button>
          </a>
        </CardContent>
      </Card>
      <Card className="dark:border-grey bg-white dark:bg-white shadow-lg rounded">
        <CardContent className="dark:text-black p-4">
          <Image
            src="/assets/img/cursos/lego-spike-prime.jpg"
            alt="Robótica Experta con LEGO Spike Prime"
            layout='responsive'
            height="150"
            width="300"
          />
          <h3 className="font-bold mt-2">
            Robótica Experta con LEGO Spike Prime
          </h3>
          <p className="text-sm mt-4">
            Requisitos: Robótica Avanzada con LEGO Spike Essential.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdOqv7K6jisyiLCJLVaXudGCL6BHCZAoo2DCNjW-XlSP99MwQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="mt-4 bg-verde-iabot dark:bg-verde-iabot text-white">
              Inscribirse
            </Button>
          </a>
        </CardContent>
      </Card>
      <Card className="dark:border-grey bg-white dark:bg-white shadow-lg rounded">
        <CardContent className="dark:text-black p-4">
          <Image
            src="/assets/img/cursos/lego-ev3.jpg"
            alt="Robótica con Lego EV3"
            layout='responsive'
            height="150"
            width="300"
          />
          <h3 className="font-bold mt-2">Robótica con Lego EV3</h3>
          <p className="text-sm mt-4">
            Requisitos: 2do año secundario o haber cursado todos los niveles
            anteriores.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdOqv7K6jisyiLCJLVaXudGCL6BHCZAoo2DCNjW-XlSP99MwQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="mt-4 bg-verde-iabot dark:bg-verde-iabot text-white">
              Inscribirse
            </Button>
          </a>
        </CardContent>
      </Card>
      <Card className="dark:border-grey bg-white dark:bg-white shadow-lg rounded">
        <CardContent className="dark:text-black p-4">
          <Image
            src="/assets/img/cursos/lego-education.jpg"
            alt="Capacitación para Docentes"
            layout='responsive'
            height="150"
            width="300"
          />
          <h3 className="font-bold mt-2">Capacitación para Docentes</h3>
          <p className="text-sm mt-4">
            Capacitación y asesoramiento especializado para docentes de
            instituciones
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdOqv7K6jisyiLCJLVaXudGCL6BHCZAoo2DCNjW-XlSP99MwQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="mt-4 bg-verde-iabot dark:bg-verde-iabot text-white">
              Inscribirse
            </Button>
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
