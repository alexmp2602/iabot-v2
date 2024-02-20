import { CardContent, Card } from "@/components/ui/card";

export default function Capacitaciones() {
  return (
    <div className="bg-white text-black">
      <header className="text-center py-20 px-4 bg-green-600 dark:bg-green-600 text-white dark:text-white">
        <h2 className="text-4xl font-bold mb-4">CAPACITACIONES</h2>
        <p className="text-xl font-semibold">
          Transforma la Educación con Nuestro Servicio de Asesoramiento y
          Capacitación en Robótica Educativa
        </p>
      </header>
      <main>
        <section className="text-black pt-12">
          <div className="container mx-auto px-4">
            <p className="text-xl text-center">
              En IABOT nos enorgullece ofrecer un servicio integral de
              asesoramiento y capacitación en robótica educativa diseñado
              especialmente para instituciones educativas. Creemos firmemente
              que la incorporación de la robótica en el aula es clave para
              preparar a las nuevas generaciones para los desafíos del presente
              y el futuro.
            </p>
          </div>
        </section>

        <section className="py-12 pb-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Nuestros servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
            <Card className="shadow-lg rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-100 dark:border-grey dark:text-black">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-pretty mb-6">
                  Asesoramiento personalizado
                </h3>
                <p className="text-lg text-pretty">
                  Trabajamos estrechamente con instituciones para integrar la
                  robótica en el plan de estudios de manera efectiva.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-100 dark:border-grey dark:text-black">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-pretty mb-6">
                  Capacitación Docente
                </h3>
                <p className="text-lg text-pretty">
                  Ofrecemos talleres especializados para que los educadores
                  adquieran habilidades esenciales en robótica educativa, desde
                  lo básico hasta lo avanzado.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-100 dark:border-grey dark:text-black">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-pretty mb-6">
                  Recursos Didácticos Innovadores
                </h3>
                <p className="text-lg text-pretty">
                  Proporcionamos materiales didácticos de calidad, alineados con
                  estándares educativos, para facilitar la enseñanza práctica y
                  atractiva de la robótica.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-100 dark:border-grey dark:text-black">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-pretty mb-6">
                  Seguimiento y Evaluación Continua
                </h3>
                <p className="text-lg text-pretty">
                  Acompañamos a las instituciones con seguimientos regulares,
                  evaluando progresos, resolviendo desafíos y ajustando
                  estrategias según sea necesario
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="container mx-auto px-4 pt-14">
            <h1 className="text-3xl font-bold text-center mb-12">
              Beneficios para las instituciones
            </h1>
            <ul className="list-disc pl-5 mb-4">
              <li>
                <strong>Fomento de la Creatividad: </strong>
                La robótica educativa estimula la creatividad y el pensamiento
                crítico, preparando a los estudiantes para enfrentar los
                desafíos del siglo XXI.
              </li>
              <li>
                <strong>Aprendizaje Práctico: </strong>
                Nuestro enfoque se centra en el aprendizaje práctico,
                permitiendo a los estudiantes aplicar conocimientos teóricos de
                manera concreta a través de proyectos de robótica.
              </li>
              <li>
                <strong>Preparación para el Futuro: </strong>
                Al integrar la robótica en el aula, las instituciones
                contribuyen a la formación de individuos listos para enfrentar
                un mundo digital y tecnológico en constante evolución.{" "}
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
