import { CardContent, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contacto() {
  return (
    <div className="bg-white text-black">
      <header className="text-center py-20 bg-verde-iabot">
        <h2 className="text-4xl font-bold mb-4">CONTÁCTANOS</h2>
        {/*<p className="text-xl font-semibold">
          Completa el formulario para ponerte en contacto con nosotros
        </p>*/}
      </header>
      <main>
        <section className="py-12">
          <div className="container px-4 gap-8">
            <div className="flex justify-center">
              <div className="w-full lg:w-2/3">
                <Card className="shadow-lg rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-center mb-6">
                      Información de Contacto
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col items-center justify-center border-b border-gray-300 pb-4">
                        <p className="text-lg font-semibold mb-2">Teléfono</p>
                        <a href="tel:+5492324468366" className="text-lg">
                          +54 9 2324 46-8366
                        </a>
                      </div>
                      <div className="flex flex-col items-center justify-center border-b border-gray-300 pb-4">
                        <p className="text-lg font-semibold mb-2">
                          Correo Electrónico
                        </p>
                        <a
                          href="mailto:Info@iabot.com.ar"
                          className="text-lg"
                        >
                          Info@iabot.com.ar
                        </a>
                      </div>
                      <div className="flex flex-col items-center justify-center border-b border-gray-300 pb-4 md:col-span-2">
                        <p className="text-lg font-semibold mb-2">
                          Dirección
                        </p>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=C+23+N+336,+Mercedes,+Provincia+de+Buenos+Aires"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg"
                        >
                          C. 23 336, Mercedes, Provincia de Buenos Aires
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            {/*<Card className="shadow-lg rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-12">
                  Envíanos un Mensaje
                </h3>
                <p className="text-lg text-center mb-12">
                  Completa el siguiente formulario y nos pondremos en contacto
                  contigo lo más pronto posible.
                </p>
                <Input
                  className="w-full mb-4 px-4 py-2 bg-gray-100 dark:bg-gray-100 dark:text-black placeholder-black border border-gray-300 rounded-md"
                  placeholder="Tu nombre"
                />
                <Input
                  className="w-full mb-4 px-4 py-2 bg-gray-100 dark:bg-gray-100 dark:text-black border border-gray-300 rounded-md"
                  placeholder="Correo electrónico"
                />
                <Input
                  className="w-full mb-4 px-4 py-2 bg-gray-100 dark:bg-gray-100 dark:text-black border border-gray-300 rounded-md"
                  placeholder="Asunto"
                />
                <Textarea
                  className="w-full mb-4 px-4 py-2 bg-gray-100 dark:bg-gray-100 dark:text-black border border-gray-300 rounded-md"
                  placeholder="Mensaje"
                  rows={4}
                />
                <Button className="w-full bg-green-600 text-white hover:bg-green-700 transition-colors duration-200 py-2 rounded-md">
                  Enviar Mensaje
                </Button>
              </CardContent>
            </Card>*/}
          </div>
        </section>
      </main>
    </div>
  );
}
