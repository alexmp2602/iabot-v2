
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Inscripcion() {
  return (
    <div className="bg-white text-black">
      <header className="text-center py-20 bg-[#d9e778]">
        <h2 className="text-4xl font-bold mb-4">INSCRIPCIONES</h2>
        <p className="text-xl font-semibold">
          Completa el formulario para inscribir a tu hijo/a en uno de nuestros cursos
        </p>
      </header>
      <main>
        <section className="py-20">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-lg rounded-lg overflow-hidden bg-[#f3f4f6]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-12">Información de la Capacitación</h3>
                <p className="text-lg text-center mb-12">
                  Selecciona el curso al que deseas inscribir a tu hijo/a.
                </p>
                <div className="flex flex-col space-y-4">
                  <Button className="bg-green-600 text-white hover:bg-green-700 transition-colors duration-200">
                    Capacitación en Robótica Básica
                  </Button>
                  <Button className="bg-green-600 text-white hover:bg-green-700 transition-colors duration-200">
                    Capacitación en Robótica Intermedia
                  </Button>
                  <Button className="bg-green-600 text-white hover:bg-green-700 transition-colors duration-200">
                    Capacitación en Robótica Avanzada
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg rounded-lg overflow-hidden bg-[#f3f4f6]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-12">Información Personal</h3>
                <p className="text-lg text-center mb-12">
                  Ingresa tus datos y los de tu hijo/a para completar la inscripción.
                </p>
                <Input
                  className="w-full mb-8 bg-white border border-gray-300 rounded-md"
                  placeholder="Nombre del padre/madre"
                />
                <Input
                  className="w-full mb-8 bg-white border border-gray-300 rounded-md"
                  placeholder="Correo electrónico"
                />
                <Input
                  className="w-full mb-8 bg-white border border-gray-300 rounded-md"
                  placeholder="Número de teléfono"
                />
                <Input
                  className="w-full mb-8 bg-white border border-gray-300 rounded-md"
                  placeholder="Nombre del hijo/a"
                />
                <Button className="bg-green-600 text-white hover:bg-green-700 transition-colors duration-200">
                  Inscríbete
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}

