"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import ArrowRightIcon from "@/components/icons/Arrow";
import Inscription from "@/components/Inscription";
import Data from "@/components/Data";
import Cursos from "@/components/Cursos";
import Image from "next/image";

export default function Home() {
  console.log("Página de inicio montada");
  return (
    <div className="bg-custom-radial text-text relative">
      <header className="sticky top-0 z-20 bg-white shadow">
        <Navbar />
      </header>

      {/* Video de Presentación */}
      <section className="relative flex items-center justify-center overflow-hidden pb-8 pt-16 text-left">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 h-auto max-h-[60vh] w-full scale-125 transform object-cover opacity-50"
        >
          <source src="assets/video-header.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="font-bruno text-secondary mb-4 text-center text-3xl font-bold md:text-5xl">
            BIENVENIDOS A
          </h2>
          <Image
            src="/assets/img/logo/PNG/iabot-PNG-06.png"
            alt="IABOT"
            width="200"
            height="80"
            className="my-2"
          />
        </div>
      </section>

      <main>
        {/* Sección de Presentación */}
        <section className="pb-8 pt-12">
          <div className="container mx-auto px-6">
            <p className="font-avenir text-text mb-4 text-pretty text-center">
              En IABOT, exploramos el emocionante mundo de la Robótica Educativa
              a través de los innovadores kits de LEGO, líderes en la industria.
              Estos kits no solo desatan la creatividad de los alumnos, sino que
              también les permiten desarrollar habilidades esenciales al
              construir y programar robots.
            </p>
            <p className="font-avenir text-text mb-4 text-pretty text-center">
              Nuestra misión es cultivar destrezas clave para el futuro a través
              de clases educativas de alta calidad. Utilizamos los recursos
              pedagógicos e innovadores de LEGO EDUCATION como nuestra
              herramienta principal.
            </p>
            <p className="font-avenir text-text text-center text-lg">
              ¡Únete a nosotros y descubre el fascinante universo de la Robótica
              Educativa! <br />
            </p>
            <div className="container mx-auto max-w-2xl text-center">
              <div className="mt-8 flex justify-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdOqv7K6jisyiLCJLVaXudGCL6BHCZAoo2DCNjW-XlSP99MwQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Formulario de inscripción"
                >
                  <Button className="flex transform items-center justify-center bg-[#78eb2c] text-lg font-bold text-white shadow-md transition-transform duration-500 ease-in-out hover:scale-105 hover:bg-[#32cddb] hover:shadow-lg dark:bg-[#78eb2c] dark:text-white dark:hover:bg-[#32cddb]">
                    INSCRIBETE
                    <ArrowRightIcon
                      className="ml-2 h-6 w-6"
                      aria-hidden="true"
                    />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Reels */}
        <section className="py-6">
          <h2 className="font-bruno text-secondary mb-12 text-center text-4xl font-bold">
            ¡Mira Nuestros Reels!
          </h2>
          <div className="container mx-auto grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
            {["C_3-X3WObC1", "C-NV_UGOPuW", "C_MTDYOO40T"].map((reelId, index) => (
              <div key={index} className="flex justify-center">
                <div className="relative w-full" style={{ paddingTop: '200%' }}>
                  <iframe
                    src={`https://www.instagram.com/reel/${reelId}/embed`}
                    width="100%"
                    height="100%"
                    style={{ position: "absolute", top: 0, left: 0, border: "none", objectFit: 'contain' }}
                    allow="encrypted-media"
                    title={`Reel ${index + 1}`}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de Recursos Didácticos */}
        <section className="py-6">
          <h2 className="font-bruno text-secondary mb-12 text-center text-4xl font-bold">
            Recursos Didácticos y Capacitaciones
          </h2>
          <Cursos />
        </section>
      </main>

      <Inscription />
      <Data />
      <Footer />
    </div>
  );
}
