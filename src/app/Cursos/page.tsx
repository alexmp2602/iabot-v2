"use client";

import Cursos from "@/components/Cursos";
import { useState } from "react";
import { useEffect } from "react";

const faqs = [
  {
    question: "¿Qué cursos ofrecen?",
    answer:
      "Ofrecemos cursos de robótica, programación y STEM para todas las edades.",
  },
  {
    question: "¿Cómo puedo inscribirme?",
    answer:
      "Puedes inscribirte completando el formulario de inscripción en nuestra página web. También puedes contactarnos por correo electrónico o teléfono para más información.",
  },
  {
    question: "¿Cuál es la duración de los cursos?",
    answer:
      "La duración de nuestros cursos varía según el nivel y la temática.",
  },
  {
    question: "¿Cuál es la edad mínima para participar en los cursos?",
    answer: "La edad mínima para participar en nuestros cursos es de 6 años.",
  },
  {
    question: "¿Qué materiales necesito para los cursos?",
    answer:
      "Proporcionamos todos los materiales necesarios para nuestros cursos. No necesitas traer nada.",
  },
  {
    question: "¿Cuál es el horario de los cursos?",
    answer:
      "Los horarios de los cursos varían según el nivel y la temática. Consulta por los horarios disponibles.",
  },
  {
    question: "¿Hay descuentos para grupos?",
    answer: "Sí, ofrecemos descuentos especiales para grupos de estudiantes.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos pagos en efectivo y transferencias bancarias.",
  },
  {
    question: "¿Ofrecen cursos para docentes?",
    answer:
      "Sí, ofrecemos cursos de capacitación en robótica y programación para docentes.",
  },
  {
    question: "¿Otorgan algún tipo de certificado?",
    answer:
      "Sí, entregamos un certificado digital de participación por cada nivel completado.",
  },
];

export default function Component() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Bruno+Ace&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-custom-radial text-black">
      <header className="text-dark bg-primary px-4 py-20 text-center">
        <h2 className="mb-4 font-bruno text-3xl font-bold">NUESTROS CURSOS</h2>
        <p className="font-bruno text-xl font-semibold">
          Explora nuestros cursos y encuentra el que más te interesa
        </p>
      </header>
      <main>
        <section >
          <h2 className="mb-6 py-12 text-center font-bruno text-4xl font-bold text-secondary bg-darkBackground">
            Descubre Nuestros Cursos
          </h2>
          <p className="mb-12  text-center text-gray-500">
            Cada uno de nuestros cursos está diseñado para brindar la mejor
            experiencia de aprendizaje, adaptándose a las necesidades y niveles
            de cada estudiante.
          </p>
          <Cursos />
        </section>

        <section className="bg-[#f8f8f8] py-12">
          <h2 className="mb-6 py-12 text-center font-bruno text-4xl font-bold text-secondary bg-darkBackground">
            Preguntas Frecuentes
          </h2>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full justify-between rounded-lg bg-white p-4 shadow-md hover:bg-gray-100"
                >
                  <span className="text-left font-semibold">
                    {faq.question}
                  </span>
                  <span>{openIndex === index ? "-" : "+"}</span>
                </button>
                {openIndex === index && (
                  <div className="mt-2 rounded-lg bg-gray-100 p-4">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
