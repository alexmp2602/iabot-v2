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

export default function Cursos () {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-4 md:px-0 mx-auto max-w-7xl">
              <Card className="w-full md:w-[280px] bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden flex flex-col justify-between">
                <div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-2xl font-semibold">
                      Introducción a la Robótica con LEGO WeDo 2.0
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-300 dark:text-white">
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
              <Card className="w-full md:w-[280px] bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden flex flex-col justify-between">
                <div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-2xl font-semibold">
                      Robótica Avanzada con LEGO Spike Essential
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-300 dark:text-white">
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
              <Card className="w-full md:w-[280px] bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden flex flex-col justify-between">
                <div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-2xl font-semibold">
                      Robótica Experta con LEGO Spike Prime
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-300 dark:text-white">
                      Requisitos: Robótica Avanzada con LEGO Spike Essential.
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
              <Card className="w-full md:w-[280px] bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden flex flex-col justify-between">
                <div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-2xl font-semibold">
                      Robótica con Lego EV3
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-300 dark:text-white">
                      Requisitos: 2do año secundario o haber cursado todos los niveles anteriores.
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
              <Card className="w-full md:w-[280px] bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden flex flex-col justify-between">
                <div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-2xl font-semibold">
                      Capacitación para Docentes
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-300 dark:text-white">
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
    )
}