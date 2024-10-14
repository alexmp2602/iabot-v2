const testimonials = [
  {
    quote:
      'Las clases de robótica son espectaculares! Mi hijo empezó con 5 años. Es la única actividad de la semana que espera con tanto entusiasmo! El profe es una masa, todas las clases vuelve con nuevas ideas, feliz de participar. ¡Recomiendo! 👏',
    author: 'Sara, Madre de Estudiante',
  },
  {
    quote:
      'Cambió la dinámica en el aula. Mis chicos se entusiasman mucho más con las actividades y aprenden de manera divertida. Es un recurso que realmente ayuda a que se sientan más involucrados.',
    author: 'María, Docente de Primaria',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-transparent dark:bg-transparent py-12">
      <h2 className="py-12 text-center font-bruno text-4xl text-primary">
        Testimonios
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-700 dark:border-gray-300 bg-transparent dark:bg-transparent p-6"
            >
              <p className="text-xl italic text-gray-800 dark:text-gray-300">
                &quot;{testimonial.quote}&quot;
              </p>
              <p className="mt-4 text-right text-sm text-gray-900 dark:text-white">
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
