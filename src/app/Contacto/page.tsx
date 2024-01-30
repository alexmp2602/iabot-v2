import { CardContent, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";

export default function Contacto() {
  return (
    <div className="bg-white text-black">
      <header className="text-center py-20 bg-[#d9e778]">
        <h2 className="text-4xl font-bold mb-4">CONTÁCTANOS</h2>
        <p className="text-xl font-semibold">
          Completa el formulario para ponerte en contacto con nosotros
        </p>
      </header>
      <main>
        <section className="py-20">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-lg rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-12">
                  Información de Contacto
                </h3>
                <p className="text-lg text-center mb-12">
                  Aquí están nuestras formas de contacto. Nos pondremos en
                  contacto contigo lo más pronto posible.
                </p>
                <div className="flex flex-col space-y-4">
                  <p className="text-lg text-center mb-12">
                    Teléfono:{" "}
                    <a href="tel:+5492324468366">+54 9 2324 46-8366</a>
                  </p>
                  <p className="text-lg text-center mb-12">
                    Correo Electrónico: {""}
                    <a href="mailto:Info@iabot.com.ar">Info@iabot.com.ar</a>
                  </p>
                  <a
                    className="text-lg text-center mb-12"
                    href="https://www.google.com/maps/search/?api=1&query=C+23+N+336,+Mercedes,+Provincia+de+Buenos+Aires"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    C. 23 336, Mercedes, Provincia de Buenos Aires
                  </a>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-12">
                  Envíanos un Mensaje
                </h3>
                <p className="text-lg text-center mb-12">
                  Completa el siguiente formulario y nos pondremos en contacto
                  contigo lo más pronto posible.
                </p>
                <Input
                  className="w-full mb-8 bg-gray-100 dark:bg-gray-100 dark:text-black placeholder-black border border-gray-300 rounded-md"
                  placeholder="Tu nombre"
                />
                <Input
                  className="w-full mb-8 bg-gray-100 dark:bg-gray-100 dark:text-black border border-gray-300 rounded-md"
                  placeholder="Correo electrónico"
                />
                <Input
                  className="w-full mb-8 bg-gray-100 dark:bg-gray-100 dark:text-black border border-gray-300 rounded-md"
                  placeholder="Asunto"
                />
                <Textarea
                  className="w-full mb-8 bg-gray-100 dark:bg-gray-100 dark:text-black border border-gray-300 rounded-md"
                  placeholder="Mensaje"
                  rows={4}
                />
                <Button className="bg-green-600 text-white hover:bg-green-700 transition-colors duration-200">
                  Enviar Mensaje
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
