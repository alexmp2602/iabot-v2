'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import AnimatedButton from '@/components/AnimatedButton';
import Background from '@/components/Background';
import TrustedBrands from '@/components/TrustedBrands';

const Reels = dynamic(() => import('@/components/Reels'), { ssr: false });
const Talleres = dynamic(() => import('@/components/Talleres'), { ssr: false });

export default function Home() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Bruno+Ace&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen relative">
      <Background />

      {/* Video de Presentación */}
      <section className="bg-dark-gray relative flex items-center justify-center overflow-hidden h-[40vh]">
        <video
          autoPlay
          muted
          loop
          preload="metadata"
          poster="/assets/img/logo/edits/iabot-webp-04.webp"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          aria-label="Video de bienvenida a IABOT mostrando escenas de robótica"
        >
          <source src="/assets/video-header.webm" type="video/webm" />
        </video>

        <div className="relative z-10 flex flex-col items-center space-y-2 pt-14 pb-8">
          <h2 className="text-center font-bruno text-3xl md:text-4xl text-primary dark:text-dark-primary">
            BIENVENIDOS A
          </h2>
          <Image
            src="/assets/img/logo/edits/iabot-webp-06.webp"
            alt="Logo de IABOT - Robótica Educativa"
            width={256}
            height={128}
            priority={true}
            className="focus:outline-none object-contain"
          />
        </div>
      </section>

      <main className="relative z-10">
        {/* Sección de Presentación */}
        <section className="pt-12">
          <div className="container mx-auto px-6">
            <p className="mb-6 text-center text-xl font-avenir text-text dark:text-dark-text">
              En IABOT, exploramos el mundo de la Robótica Educativa utilizando
              pedagogía y robots de <b>LEGO Education</b>, líderes en la
              industria. Estos recursos fomentan la creatividad y desarrollan
              habilidades STEAM (Ciencia, Tecnología, Ingeniería, Arte y
              Matemáticas) clave para el presente y el futuro. Nuestra misión es
              preparar a los alumnos con clases educativas de alta calidad.
            </p>
            <p className="mb-6 text-center text-l font-avenir text-text dark:text-dark-text">
              ¡Unite a nuestros talleres y descubrí el fascinante universo de la
              Robótica Educativa!
            </p>
            <div className="container mx-auto max-w-2xl text-center">
              <div className="mt-8 flex justify-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdOqv7K6jisyiLCJLVaXudGCL6BHCZAoo2DCNjW-XlSP99MwQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Formulario de inscripción para los cursos de robótica"
                >
                  <AnimatedButton />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Reels */}
        <section>
          <h2 className="py-12 text-center font-bruno text-4xl text-primary dark:text-dark-primary">
            ¡Mira Nuestros Reels!
          </h2>
          <Reels />
        </section>

        {/* Sección de Recursos Didácticos */}
        <section>
          <h2 className="py-12 text-center font-bruno text-4xl text-primary dark:text-dark-primary">
            Recursos Didácticos y Talleres
          </h2>
          <Talleres />
        </section>

        {/* Sección de Marcas */}
        <TrustedBrands />
      </main>
    </div>
  );
}
