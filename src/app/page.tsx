"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { ArrowRightIcon } from "lucide-react";
import Reels from "@/components/Reels";
import Cursos from "@/components/Cursos";

export default function Home() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Bruno+Ace&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <>
      {/* Video de Presentación */}
      <section className="relative flex items-center justify-center overflow-hidden pt-8 md:py-16 text-left bg-[#1c1c1c]">
        <video
          autoPlay
          muted
          loop
          preload="auto"
          className="absolute inset-0 w-full h-auto transform object-cover opacity-40"
          aria-label="Video de bienvenida a IABOT"
        >
          <source src="assets/video-header.webm" type="video/webm" />
        </video>
        <div className="relative z-10 flex flex-col items-center py-6 md:py-0">
          <h2 className="mb-4 text-center font-bruno text-3xl font-bold text-[#78eb2c] md:text-5xl">
            BIENVENIDOS A
          </h2>
          <Image
            src="/assets/img/logo/PNG/iabot-PNG-06.png"
            alt="Logo de IABOT - Robótica Educativa"
            width={200}
            height={200}
            loading="lazy"
            className="focus:outline-none"
          />
        </div>
      </section>

      <main>
        {/* Sección de Presentación */}
        <section className="pb-8 pt-12 bg-[#f9f9f9] text-gray-700">
          <div className="container mx-auto px-6">
            <p className="mb-4 text-center font-avenir">
              En IABOT, exploramos el emocionante mundo de la Robótica Educativa a través de los innovadores kits de LEGO, líderes en la industria. Estos kits no solo desatan la creatividad de los alumnos, sino que también les permiten desarrollar habilidades esenciales al construir y programar robots.
            </p>
            <p className="mb-4 text-center font-avenir">
              Nuestra misión es cultivar destrezas clave para el futuro a través de clases educativas de alta calidad. Utilizamos los recursos pedagógicos e innovadores de LEGO EDUCATION como nuestra herramienta principal.
            </p>
            <p className="mb-4 text-center font-avenir">
              ¡Unite a nosotros y descubrí el fascinante universo de la Robótica Educativa!
            </p>
            <div className="container mx-auto max-w-2xl text-center">
              <div className="mt-8 flex justify-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdOqv7K6jisyiLCJLVaXudGCL6BHCZAoo2DCNjW-XlSP99MwQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Formulario de inscripción para los cursos de robótica"
                >
                  <Button
                    className="text-white flex transform items-center justify-center bg-[#78eb2c] text-lg font-bold shadow-md transition-transform duration-500 ease-in-out hover:scale-105 hover:bg-[#32cddb] hover:shadow-lg focus:ring focus:ring-[#32cddb] focus:outline-none"
                    aria-label="Botón de inscripción"
                  >
                    INSCRIBITE
                    <ArrowRightIcon className="ml-2 h-6 w-6" aria-hidden="true" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Reels */}
        <section className="py-6 bg-[#e6e6e6]">
          <h2 className="mb-6 py-12 text-center font-bruno text-4xl font-bold text-primary">
            ¡Mira Nuestros Reels!
          </h2>
          <Reels />
        </section>

        {/* Sección de Recursos Didácticos */}
        <section className="py-6 bg-white">
          <h2 className="mb-6 py-12 text-center font-bruno text-4xl font-bold text-primary">
            Recursos Didácticos y Capacitaciones
          </h2>
          <Cursos />
        </section>
      </main>
    </>
  );
}
