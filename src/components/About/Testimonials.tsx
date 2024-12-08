'use client';

const testimonials = [
  {
    quote:
      'Las clases de robótica son espectaculares! Mi hijo empezó con 5 años. Es la única actividad de la semana que espera con tanto entusiasmo! El profe es una masa, todas las clases vuelve con nuevas ideas, feliz de participar. ¡Recomiendo! 👏',
    author: 'Sara, Madre de Estudiante.',
  },
  {
    quote:
      'Fue una experiencia excelente. Aprendí a integrar la robótica en mis clases de manera práctica y creativa. Los recursos y la metodología son geniales, y me ayudaron a fomentar habilidades clave en mis estudiantes. ¡Recomiendo totalmente esta capacitación docente!',
    author: 'Rosana, Docente de Nivel Secundario.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-transparent dark:bg-transparent">
      <h2 className="pb-8 text-center font-bruno text-4xl text-primary dark:text-dark-primary">
        Testimonios
      </h2>
      <div className="mx-auto max-w-7xl px-8 sm:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-700 dark:border-gray-300 bg-gray-100 dark:bg-gray-900 p-8 shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <p className="mb-4 text-xl italic text-gray-800 dark:text-gray-300">
                &quot;{testimonial.quote}&quot;
              </p>
              <p className="text-right text-sm font-medium text-gray-900 dark:text-white">
                - {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
