import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface SvgProps extends React.SVGProps<SVGSVGElement> {}

export default function Index() {
  return (
    <div className="bg-white text-black">
      <header className="text-center py-20 bg-[#d9e778]">
        <h2 className="text-4xl font-bold mb-4">BIENVENIDOS A</h2>
        <h1 className="text-6xl font-bold mb-4">IA BOT</h1>
        <p className="text-xl font-semibold">ROBÓTICA EDUCATIVA Y CAPACITACIONES PARA DOCENTES</p>
      </header>
      <main>
        <section className="py-20">
          <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Recursos Didácticos y Capacitaciones</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Curso Básico</CardTitle>
                  <CardDescription>Aprende los fundamentos de la robótica educativa.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    alt="Curso Básico"
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
                  <CardTitle>Curso de Verano</CardTitle>
                  <CardDescription>Disfruta aprendiendo robótica en verano.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    alt="Curso de Verano"
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
                  <CardDescription>Capacitación especializada para docentes de otras escuelas.</CardDescription>
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
                  <Button>Inscribirse</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h5 className="text-2xl font-bold mb-2">2022</h5>
                <p className="text-lg">Año en el que dimos comienzo a nuestras actividades educativas.</p>
              </div>
              <div>
                <h5 className="text-2xl font-bold mb-2">135</h5>
                <p className="text-lg">Experiencias de Estudiantes con nuestro Enfoque de Aprendizaje</p>
              </div>
              <div>
                <h5 className="text-2xl font-bold mb-2">95%</h5>
                <p className="text-lg">Tasa de satisfacción en nuestros cursos de robótica</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

