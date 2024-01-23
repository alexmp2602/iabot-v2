import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="bg-white">
      <header className="text-center py-20 bg-[#d9e778]">
        <h2 className="text-4xl font-bold mb-4">Nuestros Cursos</h2>
        <p className="text-xl font-semibold">Explora nuestros cursos y encuentra el que más te interesa</p>
      </header>
      <main>
        <section className="py-20">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-lg rounded-lg overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-12">Curso de Robótica Básica</h3>
                <p className="text-lg text-center mb-12">
                  Aprende los fundamentos de la robótica y comienza tu camino en este fascinante mundo.
                </p>
                <Button className="bg-green-600 text-white">Inscríbete</Button>
              </CardContent>
            </Card>
            <Card className="shadow-lg rounded-lg overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-12">Curso de Robótica Intermedia</h3>
                <p className="text-lg text-center mb-12">
                  Amplía tus conocimientos y habilidades en robótica con nuestro curso intermedio.
                </p>
                <Button className="bg-green-600 text-white">Inscríbete</Button>
              </CardContent>
            </Card>
            <Card className="shadow-lg rounded-lg overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-12">Curso de Robótica Avanzada</h3>
                <p className="text-lg text-center mb-12">
                  Lleva tus habilidades en robótica al siguiente nivel con nuestro curso avanzado.
                </p>
                <Button className="bg-green-600 text-white">Inscríbete</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
