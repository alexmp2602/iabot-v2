const benefits = [
  {
    title: 'Fomento de la Creatividad',
    description:
      'La robótica educativa estimula la creatividad y el pensamiento crítico.',
  },
  {
    title: 'Aprendizaje Práctico',
    description:
      'Nuestro enfoque permite a los estudiantes aplicar conocimientos teóricos a través de proyectos de robótica.',
  },
  {
    title: 'Preparación para el Futuro',
    description:
      'Integrar la robótica contribuye a formar estudiantes listos para un mundo digital en evolución.',
  },
];

const Benefits = () => {
  return (
    <div className="container mx-auto px-4 pt-14">
      <h2 className="mb-12 text-center font-bruno text-4xl text-primary">
        Beneficios para las Instituciones
      </h2>
      <ul className="mb-4 list-disc pl-5 text-xl text-gray-900 dark:text-gray-300">
        {benefits.map((benefit, index) => (
          <li key={index} className="mb-2">
            <strong>{benefit.title}:</strong> {benefit.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Benefits;
