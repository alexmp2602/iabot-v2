import AnimatedButton from './AnimatedButton';

export default function Inscription() {
  return (
    <section className="text-text dark:text-dark-text z-10">
      <div className="container mx-auto max-w-2xl text-center">
        {/* Título */}
        <h2 className="py-12 text-2xl">
          ¡Consulta los cupos disponibles y completa nuestro formulario de
          inscripción! ¡No dejes pasar esta oportunidad!
        </h2>

        {/* Botón de Inscripción */}
        <div className="flex justify-center">
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
    </section>
  );
}
