import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface SvgProps extends React.SVGProps<SVGSVGElement> {}

export default function Index() {
  return (
    <div className="bg-white text-black">
      <header className="text-center py-20 bg-[#d9e778]">
        <h2 className="text-4xl font-bold mb-4">BIENVENIDOS A</h2>
        <h1 className="text-6xl font-bold mb-4">IA BOT</h1>
        <p className="text-xl font-semibold">ROBÓTICA EDUCATIVA</p>
      </header>
      <main>
        <section className="py-16">
          <div className="container mx-auto px-6">
            <p className="mb-20 text-pretty text-center">
              En IABOT, nos sumergimos en el emocionante mundo de la Robótica
              Educativa con los innovadores kits de la reconocida marca LEGO,
              líder en la industria. Estos kits no solo permiten a los alumnos
              dar rienda suelta a su creatividad, sino también desarrollar
              habilidades fundamentales a medida que construyen y programan
              robots. Nuestra misión es cultivar destrezas clave para el futuro
              de los alumnos mediante clases educativas de alta calidad,
              aprovechando los recursos pedagógicos e innovadores de LEGO
              EDUCATION como nuestra herramienta principal.
            </p>
            <h3 className="text-3xl font-bold text-center mb-12">
              Recursos Didácticos y Capacitaciones
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>
                    Introducción a la Robótica con LEGO WeDo 2.0
                  </CardTitle>
                  <CardDescription>
                    Requisitos: Tener entre 6 y 12 años de edad.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    alt="Introducción a la Robótica con LEGO WeDo 2.0"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Más Info</Button>
                  <Button>Inscribirse</Button>
                </CardFooter>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>
                    Robótica avanzada con LEGO Spike Essential
                  </CardTitle>
                  <CardDescription>
                    Requisitos: 1er año secundario o Introducción a Robótica con
                    LEGO WeDo 2.0.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    alt="Robótica avanzada con LEGO Spike Essential"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Más Info</Button>
                  <Button>Inscribirse</Button>
                </CardFooter>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Robótica experta con LEGO Spike Prime</CardTitle>
                  <CardDescription>
                    Requisitos: Robótica avanzada con LEGO Spike Essential.{" "}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    alt="Robótica experta con LEGO Spike Prime"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Más Info</Button>
                  <Button>Inscribirse</Button>
                </CardFooter>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Capacitación para Docentes</CardTitle>
                  <CardDescription>
                    Capacitación y asesoramiento especializado para docentes de
                    instituciones
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    alt="Capacitación para Docentes"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Más Info</Button>
                  <a href="/Inscripcion">
                    <Button>Inscribirse</Button>
                  </a>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
