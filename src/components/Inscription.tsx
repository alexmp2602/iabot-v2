import { Button } from "@/components/ui/button";
import ArrowRightIcon from "./icons/Arrow";

export default function Inscription() {
  return (
    <section className="bg-white p-8 text-black dark:bg-white dark:text-black">
      <div className="container mx-auto max-w-2xl text-center">
        {/* Título */}
        <h2 className="mb-8 text-2xl font-bold">
          ¡Descubre los cupos disponibles y regístrate en nuestro formulario de
          inscripción! ¡No te pierdas esta gran oportunidad!
        </h2>

        {/* Botón de Inscripción */}
        <div className="flex justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdOqv7K6jisyiLCJLVaXudGCL6BHCZAoo2DCNjW-XlSP99MwQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Formulario de inscripción"
          >
            <Button className="flex items-center justify-center transform dark:bg-[#78eb2c] bg-[#78eb2c] text-lg font-bold text-white shadow-md transition-transform duration-300 hover:scale-105 hover:bg-[#32cddb] dark:hover:bg-[#32cddb] hover:shadow-lg">
              INSCRÍBETE
              <ArrowRightIcon className="ml-2 h-6 w-6" aria-hidden="true" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
