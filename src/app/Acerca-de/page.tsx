import { CardContent, Card } from "@/components/ui/card";

import HeartIcon from "@/components/icons/Heart";
import LightbulbIcon from "@/components/icons/Lightbulb";
import SmileIcon from "@/components/icons/Smile";
import StarIcon from "@/components/icons/Star";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-white text-black">
      <header className="bg-green-600 py-20 text-center text-white dark:bg-green-600 dark:text-white">
        <h2 className="mb-4 text-4xl font-bold">ACERCA DE</h2>
        <h1 className="mb-4 text-6xl font-bold">IA BOT</h1>
        <p className="text-xl font-semibold">CONOCE MÁS SOBRE NOSOTROS</p>
      </header>
      <main>
        <section>
          <div className="bg-white pt-16">
            <h2 className="mb-12 text-center text-4xl font-bold">
              Nuestra Misión y Valores
            </h2>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <LightbulbIcon />
                <h3 className="mb-4 text-2xl font-semibold">Innovación</h3>
                <p className="lg:pb-12">
                  Nos mantenemos al día en las últimas tendencias y tecnologías
                  de la robótica para ofrecer a nuestros estudiantes una
                  educación de calidad en esta disciplina en constante
                  evolución.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <HeartIcon />
                <h3 className="mb-4 text-2xl font-semibold">Pasión</h3>
                <p className="lg:pb-12">
                  Transmitimos nuestra pasión por la robótica y la educación,
                  motivando a nuestros estudiantes y fomentando su interés en
                  ciencia y tecnología.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <StarIcon />
                <h3 className="mb-4 text-2xl font-semibold">Excelencia</h3>
                <p className="lg:pb-12">
                  Nos dedicamos a brindar un servicio excepcional, cuidando cada
                  detalle, desde el diseño del curso hasta la atención a
                  nuestros estudiantes y sus familias.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <SmileIcon />
                <h3 className="mb-4 text-2xl font-semibold">Diversión</h3>
                <p className="lg:pb-12">
                  Creamos un ambiente de enseñanza amigable y relajado, donde
                  los estudiantes se sienten cómodos y disfrutan de un
                  aprendizaje divertido.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f8f8f8]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900">
              CONOCE A NUESTRO EQUIPO
            </h2>
            <p className="mb-12 text-center text-gray-500">
              En IABOT, contamos con un equipo altamente capacitado y
              comprometido con la educación y la robótica. Nos capacitamos
              continuamente en nuevas tecnologías. Además, nuestros cursos se
              planifican por edades y niveles, buscando proporcionar una óptima
              experiencia educativa a cada alumno. Siempre trabajamos de manera
              transversal con otras áreas para enriquecer el aprendizaje.
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <Card className="w-full bg-gray-100 py-8 dark:bg-gray-700">
                <CardContent>
                  <img
                    alt="Franco"
                    className="mx-auto h-48 w-48 rounded-full object-cover"
                    height="200"
                    src="/assets/img/equipo/fran-modified.png"
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                      backgroundColor: "white",
                    }}
                    width="200"
                  ></img>
                  <h3 className="mt-4 text-center text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Franco
                  </h3>
                  <p className="mt-2 text-center text-base text-gray-500 dark:text-white">
                    Técnico en Informática. Profesor de Tecnología, (Postítulo
                    en Programación y Robótica Educativa, UNER).
                  </p>
                </CardContent>
              </Card>

              <Card className="w-full bg-gray-100 py-8 dark:bg-gray-700 ">
                <CardContent>
                  <img
                    alt="Adrián"
                    className="mx-auto h-48 w-48 rounded-full object-cover"
                    height="200"
                    src="/assets/img/equipo/adri-modified.png"
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                      backgroundColor: "white",
                    }}
                    width="200"
                  ></img>
                  <h3 className="mt-4 text-center text-lg font-medium leading-6 text-gray-500 dark:text-white">
                    Adrián
                  </h3>
                  <p className="mt-2 text-center text-base text-gray-500 dark:text-white">
                    Profesor de Matemática y Tecnología, (Postítulo en
                    Programación y Robótica Educativa, UNER).
                  </p>
                </CardContent>
              </Card>
              <Card className="w-full bg-gray-100 py-8 dark:bg-gray-700">
                <CardContent>
                  <img
                    alt="Alex"
                    className="mx-auto h-48 w-48 rounded-full object-cover"
                    height="200"
                    src="/assets/img/equipo/alex-modified.png"
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                      backgroundColor: "white",
                    }}
                    width="200"
                  ></img>
                  <h3 className="mt-4 text-center text-lg font-medium leading-6 text-gray-500 dark:text-white">
                    Alex
                  </h3>
                  <p className="mt-2 text-center text-base text-gray-500 dark:text-white">
                    Desarrollador Web, (Certificaciones Lego Education Academy).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
