import {
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="bg-white">
      <header className="text-center py-20 bg-[#d9e778]">
        <h2 className="text-4xl font-bold mb-4">Nuestros Cursos</h2>
        <p className="text-xl font-semibold">
          Explora nuestros cursos y encuentra el que más te interesa
        </p>
      </header>
      <main>
        <section>
          <div className="flex justify-center space-x-8 bg-gray-100 py-16">
            <Card className="w-[250px] bg-black text-white">
              <CardHeader>
                <CardTitle>Curso de Robótica Básica</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-between h-[200px]">
                <CardDescription>
                  Aprende los fundamentos de la robótica y comienza tu camino en
                  este fascinante mundo.
                </CardDescription>
                <Button className="mt-auto bg-white text-black">
                  Inscríbete
                </Button>
              </CardContent>
            </Card>
            <Card className="w-[250px] bg-black text-white">
              <CardHeader>
                <CardTitle>Curso de Robótica Intermedia</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-between h-[200px]">
                <CardDescription>
                  Amplía tus conocimientos y habilidades en robótica con nuestro
                  curso intermedio.
                </CardDescription>
                <Button className="mt-auto bg-white text-black">
                  Inscríbete
                </Button>
              </CardContent>
            </Card>
            <Card className="w-[250px] bg-black text-white">
              <CardHeader>
                <CardTitle>Curso de Robótica Avanzada</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-between h-[200px]">
                <CardDescription>
                  Lleva tus habilidades en robótica al siguiente nivel con
                  nuestro curso avanzado.
                </CardDescription>
                <Button className="mt-auto bg-white text-black">
                  Inscríbete
                </Button>
              </CardContent>
            </Card>
            <Card className="w-[250px] bg-black text-white">
              <CardHeader>
                <CardTitle>Curso de EV3</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-between h-[200px]">
                <CardDescription>
                  Lleva tus habilidades en robótica al siguiente nivel con
                  nuestro curso avanzado.
                </CardDescription>
                <Button className="mt-auto bg-white text-black">
                  Inscríbete
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
