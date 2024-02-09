import {
  CardContent,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Cursos() {
  return (
    <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="dark:border-grey bg-white dark:bg-white shadow-lg py-4">
          <CardContent className="dark:text-black pb-2">
            <h2 className="text-2xl font-bold mb-2">Introducción a la Robótica con LEGO WeDo 2.0</h2>
            <p className="text-sm mb-4">Requisitos: Tener entre 6 y 12 años de edad.</p>
            <Button className="bg-verde-iabot dark:bg-verde-iabot text-white">Inscribirse</Button>
          </CardContent>
        </Card>
        <Card className="dark:border-grey bg-white dark:bg-white shadow-lg py-4">
          <CardContent className="dark:text-black pb-2">
            <h2 className="text-2xl font-bold mb-2">Robótica Avanzada con LEGO Spike Essential</h2>
            <p className="text-sm mb-4">Requisitos: 1er año secundario o Introducción a Robótica con LEGO WeDo 2.0</p>
            <Button className="bg-verde-iabot dark:bg-verde-iabot text-white">Inscribirse</Button>
          </CardContent>
        </Card>
        <Card className="dark:border-grey bg-white dark:bg-white shadow-lg py-4">
          <CardContent className="dark:text-black pb-2">
            <h2 className="text-2xl font-bold mb-2">Robótica Experta con LEGO Spike Prime</h2>
            <p className="text-sm mb-4">Requisitos: Robótica Avanzada con LEGO Spike Essential.</p>
            <Button className="bg-verde-iabot dark:bg-verde-iabot text-white">Inscribirse</Button>
          </CardContent>
        </Card>
        <Card className=" dark:border-grey bg-white dark:bg-white shadow-lg py-4">
          <CardContent className="dark:text-black pb-2">
            <h2 className="text-2xl font-bold mb-2">Robótica con Lego EV3</h2>
            <p className="text-sm mb-4">Requisitos: 2do año secundario o haber cursado todos los niveles anteriores.</p>
            <Button className="bg-verde-iabot dark:bg-verde-iabot text-white">Inscribirse</Button>
          </CardContent>
        </Card>
        <Card className="dark:border-grey bg-white dark:bg-white shadow-lg py-4">
          <CardContent className="dark:text-black pb-2">
            <h2 className="text-2xl font-bold mb-2">Capacitación para Docentes</h2>
            <p className="text-sm mb-4">Capacitación y asesoramiento especializado para docentes de instituciones</p>
            <Button className="bg-verde-iabot dark:bg-verde-iabot text-white">Inscribirse</Button>
          </CardContent>
        </Card>
    </div>
  );
}
