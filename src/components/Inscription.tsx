import AnimatedButton from './AnimatedButton';

export default function Inscription() {
  return (
    <section className="bg-light-gray dark:bg-dark-bg p-8 text-text dark:text-dark-text">
      <div className="container mx-auto max-w-2xl text-center">
        {/* Título */}
        <h2 className="mb-8 text-2xl">
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
            <AnimatedButton />
          </a>
        </div>
      </div>
    </section>
  );
}
