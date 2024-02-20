import { CardContent, Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contacto() {
  return (
    <div className="bg-white text-black">
      <header className="text-center py-20 bg-green-600 dark:bg-green-600 text-white dark:text-white">
        <h2 className="text-4xl font-bold">CONTÁCTANOS</h2>
        <p className="mt-4 text-lg">
          ¿Tienes alguna duda o consulta? Escríbenos y te responderemos a la
          brevedad.
        </p>
      </header>
      <main className="container mx-auto py-8 px-4">
        <Card className="w-full max-w-4xl mx-auto bg-white dark:bg-white dark:border-gray text-black dark:text-black p-6 shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Información de Contacto
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h2 className="text-lg font-semibold">Teléfono</h2>
                <p className="mt-1">+54 9 2324 46-8366</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Correo Electrónico</h2>
                <p className="mt-1">Info@iabot.com.ar</p>
              </div>
              <div className="col-span-2">
                <h2 className="text-lg font-semibold">Dirección</h2>
                <p className="mt-1">
                  C. 21 336, Mercedes, Provincia de Buenos Aires
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
