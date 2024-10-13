import { Button } from '@/components/ui/button';
import ArrowRightIcon from './icons/Arrow';

export default function Inscription() {
  return (
    <section className="bg-white p-8 text-black">
      <div className="container mx-auto max-w-2xl text-center">
        {/* Título */}
        <h2 className="mb-8 text-2xl font-bold">
          ¡Consulta los cupos disponibles y completa nuestro formulario de
          inscripción! ¡No dejes pasar esta oportunidad!
        </h2>

        {/* Botón de Inscripción */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdOqv7K6jisyiLCJLVaXudGCL6BHCZAoo2DCNjW-XlSP99MwQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Formulario de inscripción para los cursos de robótica"
          >
            <Button
              className="text-dark flex transform items-center justify-center bg-primary text-lg font-bold shadow-md transition-transform duration-500 ease-in-out hover:scale-105 hover:bg-secondary hover:shadow-lg focus:ring focus:ring-secondary focus:outline-none dark:bg-primary dark:hover:bg-secondary"
              aria-label="Botón de inscripción"
            >
              INSCRIBITE
              <ArrowRightIcon className="ml-2 h-6 w-6" aria-hidden="true" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
