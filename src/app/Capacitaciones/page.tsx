import { CardContent, Card } from "@/components/ui/card";

export default function Component() {
  return (
    <div className="bg-white text-black">
      <header className="text-black text-center py-20 px-4 bg-[#d9e778]">
        <h2 className="text-4xl font-bold mb-4">CAPACITACIONES</h2>
        <p className="text-xl font-semibold">
          Transforma la Educación con Nuestro Servicio de Asesoramiento y
          Capacitación en Robótica Educativa
        </p>
      </header>
      <main>
        <section className="text-black py-20">
          <div className="container mx-auto px-4">
            <p className="text-xl text-center mb-20">
              En IABOT nos enorgullece ofrecer un servicio integral de
              asesoramiento y capacitación en robótica educativa diseñado
              especialmente para instituciones educativas. Creemos firmemente
              que la incorporación de la robótica en el aula es clave para
              preparar a las nuevas generaciones para los desafíos del presente
              y el futuro.
            </p>
            <h1 className="text-3xl font-bold text-center mb-12">
              Nuestros servicios
            </h1>
          </div>
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="shadow-lg rounded-lg overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-12">
                  Asesoramiento personalizado
                </h3>
                <p className="text-lg text-center mb-12">
                  Nuestro equipo de expertos en robótica educativa trabaja mano
                  a mano con las instituciones para comprender sus necesidades
                  específicas. Desarrollamos estrategias adaptadas que integran
                  la robótica de manera efectiva en el plan de estudios
                  existente.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg rounded-lg overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-12">
                  Capacitación Docente
                </h3>
                <p className="text-lg text-center mb-12">
                  Impartimos talleres y cursos especializados para el personal
                  docente. Desde conceptos básicos hasta avanzados, nuestros
                  programas de formación garantizan que los educadores adquieran
                  las habilidades necesarias para guiar a los estudiantes en el
                  emocionante mundo de la robótica.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg rounded-lg overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-12">
                  Recursos Didácticos Innovadores
                </h3>
                <p className="text-lg text-center mb-12">
                  Proporcionamos materiales didácticos actualizados y recursos
                  educativos de calidad que facilitan la enseñanza de la
                  robótica de manera práctica y atractiva. Estos recursos están
                  alineados con los estándares educativos y fomentan el
                  aprendizaje experiencial.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg rounded-lg overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-12">
                  Seguimiento y Evaluación Continua
                </h3>
                <p className="text-lg text-center mb-12">
                  Nos comprometemos a acompañar a las instituciones en cada paso
                  del camino. Realizamos seguimientos regulares para evaluar el
                  progreso, resolver desafíos y adaptar nuestras estrategias
                  según sea necesario.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="container mx-auto px-4 pt-20">
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
            <h3 className="text-2xl font-bold text-center py-12">
              Transforma la experiencia educativa en tu institución con nuestro
              servicio de asesoramiento y capacitación en robótica educativa.
            </h3>
          </div>
        </section>
      </main>
    </div>
  );
}
