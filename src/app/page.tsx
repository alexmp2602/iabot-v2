import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BookIcon from "@/components/icons/Book";

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
            <h2 className="text-4xl font-bold text-center mb-8 text-green-500">
              Recursos Didácticos y Capacitaciones
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center px-4 md:px-0 mx-auto max-w-7xl">
              <Card className="w-full md:w-[280px] bg-[#1F2937] rounded-lg shadow-lg overflow-hidden flex flex-col justify-between">
                <div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-2xl font-semibold">
                      Introducción a la Robótica con LEGO WeDo 2.0
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-300">
                      Requisitos: Tener entre 6 y 12 años de edad.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 flex justify-center">
                    <BookIcon  />
                  </CardContent>
                </div>
                <CardFooter className="flex justify-between p-4">
                  <Button variant="ghost">Más Info</Button>
                  <Button>Inscribirse</Button>
                </CardFooter>
              </Card>
              <Card className="w-full md:w-[280px] bg-[#1F2937] rounded-lg shadow-lg overflow-hidden flex flex-col justify-between">
                <div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-2xl font-semibold">
                      Robótica avanzada con LEGO Spike Essential
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-300">
                      Requisitos: 1er año secundario o Introducción a Robótica
                      con LEGO WeDo 2.0.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 flex justify-center">
                    <BookIcon />
                  </CardContent>
                </div>
                <CardFooter className="flex justify-between p-4">
                  <Button variant="ghost">Más Info</Button>
                  <Button>Inscribirse</Button>
                </CardFooter>
              </Card>
              <Card className="w-full md:w-[280px] bg-[#1F2937] rounded-lg shadow-lg overflow-hidden flex flex-col justify-between">
                <div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-2xl font-semibold">
                      Robótica experta con LEGO Spike Prime
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-300">
                      Requisitos: Robótica avanzada con LEGO Spike Essential.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 flex justify-center">
                    <BookIcon />
                  </CardContent>
                </div>
                <CardFooter className="flex justify-between p-4">
                  <Button variant="ghost">Más Info</Button>
                  <Button>Inscribirse</Button>
                </CardFooter>
              </Card>
              <Card className="w-full md:w-[280px] bg-[#1F2937] rounded-lg shadow-lg overflow-hidden flex flex-col justify-between">
                <div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-2xl font-semibold">
                      Robótica Experta con EV3
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-300">
                      Requisitos: Robótica avanzada con LEGO Spike Essential.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 flex justify-center">
                    <BookIcon />
                  </CardContent>
                </div>
                <CardFooter className="flex justify-between p-4">
                  <Button variant="ghost">Más Info</Button>
                  <Button>Inscribirse</Button>
                </CardFooter>
              </Card>
              <Card className="w-full md:w-[280px] bg-[#1F2937] rounded-lg shadow-lg overflow-hidden flex flex-col justify-between">
                <div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-2xl font-semibold">
                      Capacitación para Docentes
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-300">
                      Capacitación y asesoramiento especializado para docentes
                      de instituciones
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 flex justify-center">
                    <BookIcon />
                  </CardContent>
                </div>
                <CardFooter className="flex justify-between p-4">
                  <Button variant="ghost">Más Info</Button>
                  <Button>Inscribirse</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
