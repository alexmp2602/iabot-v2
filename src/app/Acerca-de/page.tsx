import HeartIcon from "@/components/icons/Heart";
import LightbulbIcon from "@/components/icons/Lightbulb";
import SmileIcon from "@/components/icons/Smile";
import StarIcon from "@/components/icons/Star";

export default function About() {
  return (
    <div className="bg-white text-black">
      <header className="text-center py-20 bg-[#d9e778]">
        <h2 className="text-4xl font-bold mb-4">ACERCA DE</h2>
        <h1 className="text-6xl font-bold mb-4">IA BOT</h1>
        <p className="text-xl font-semibold">CONOCE MÁS SOBRE NOSOTROS</p>
      </header>
      <main>
        <section>
          <div className="bg-[#f4f4f4] pt-16">
            <h2 className="text-center text-4xl font-bold mb-12">
              Nuestra Misión y Valores
            </h2>
            <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <LightbulbIcon />
                <h3 className="text-2xl font-semibold mb-4">Innovación</h3>
                <p className="lg:pb-12">
                  Nos mantenemos al día en las últimas tendencias y tecnologías
                  de la robótica para ofrecer a nuestros estudiantes una
                  educación de calidad en esta disciplina en constante
                  evolución.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <HeartIcon />
                <h3 className="text-2xl font-semibold mb-4">Pasión</h3>
                <p className="lg:pb-12">
                  Transmitimos nuestra pasión por la robótica y la educación,
                  motivando a nuestros estudiantes y fomentando su interés en
                  ciencia y tecnología.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <StarIcon />
                <h3 className="text-2xl font-semibold mb-4">Excelencia</h3>
                <p className="lg:pb-12">
                  Nos dedicamos a brindar un servicio excepcional, cuidando cada
                  detalle, desde el diseño del curso hasta la atención a
                  nuestros estudiantes y sus familias.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <SmileIcon />
                <h3 className="text-2xl font-semibold mb-4">Diversión</h3>
                <p className="lg:pb-12">
                  Creamos un ambiente de enseñanza amigable y relajado, donde
                  los estudiantes se sienten cómodos y disfrutan de un
                  aprendizaje divertido.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-[#f8f8f8]">
          <div className="px-8">
            <h2 className="text-2xl font-bold mb-4">CONOCE A NUESTRO EQUIPO</h2>
            <p className="mb-8">
              En IABOT, contamos con un equipo altamente capacitado y
              comprometido con la educación y la robótica. Nos capacitamos
              continuamente en nuevas tecnologías. Además, nuestros cursos se
              planifican por edades y niveles, buscando proporcionar una óptima
              experiencia educativa a cada alumno. Siempre trabajamos de manera
              transversal con otras áreas para enriquecer el aprendizaje.
            </p>
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Franco</h3>
                <p>
                  Técnico en Informática. Profesor de Tecnología, (Postítulo en
                  Programación y Robótica Educativa, UNER).
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Adrián</h3>
                <p>
                  Profesor de Matemática y Tecnología, (Postítulo en
                  Programación y Robótica Educativa, UNER).
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Alex</h3>
                <p>Desarrollador Web, (Certificaciones Lego Education Academy).</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
