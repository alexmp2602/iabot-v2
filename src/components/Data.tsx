'use client';

import { useEffect, useState, useRef } from 'react';
import { useSpring } from 'framer-motion';
import CalendarIcon from './icons/Calendar';
import UsersIcon from './icons/Users';

function AnimatedCount({
  targetNumber,
  isVisible,
}: {
  targetNumber: number;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);
  const springValue = useSpring(0, { stiffness: 100, damping: 20 });

  useEffect(() => {
    if (isVisible) {
      springValue.set(targetNumber); // Inicia la animación solo si el elemento es visible
      springValue.onChange((latest) => {
        setCount(Math.round(latest)); // Actualiza el estado con el valor animado
      });
    }
  }, [targetNumber, isVisible, springValue]);

  return <span>{count}</span>;
}

export default function Data() {
  const [isVisibleAlumnos, setIsVisibleAlumnos] = useState(false);
  const [isVisibleInicio, setIsVisibleInicio] = useState(false);
  const alumnosRef = useRef<HTMLDivElement>(null);
  const inicioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5, // El 50% del elemento debe estar visible para que se active
    };

    const currentAlumnosRef = alumnosRef.current;
    const currentInicioRef = inicioRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === currentAlumnosRef) {
          setIsVisibleAlumnos(entry.isIntersecting);
        }
        if (entry.target === currentInicioRef) {
          setIsVisibleInicio(entry.isIntersecting);
        }
      });
    }, observerOptions);

    if (currentAlumnosRef) observer.observe(currentAlumnosRef);
    if (currentInicioRef) observer.observe(currentInicioRef);

    return () => {
      if (currentAlumnosRef) observer.unobserve(currentAlumnosRef);
      if (currentInicioRef) observer.unobserve(currentInicioRef);
    };
  }, []);

  return (
    <div className="bg-lightGray">
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Alumnos */}
            <div
              ref={alumnosRef}
              className="flex flex-col items-center transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              <div className="flex items-center space-x-2 mb-2">
                <UsersIcon
                  aria-label="Número de alumnos"
                  className="h-12 w-12 text-primary"
                />
                <h3 className="text-5xl font-bold text-primary">
                  +
                  <AnimatedCount
                    targetNumber={300}
                    isVisible={isVisibleAlumnos}
                  />{' '}
                  {/* Contador animado con + */}
                </h3>
              </div>
              <p className="text-lg text-gray-800">
                Alumnos pasaron por nuestros talleres desde nuestros comienzos
              </p>
            </div>

            {/* Año de inicio */}
            <div
              ref={inicioRef}
              className="flex flex-col items-center transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              <div className="flex items-center space-x-2 mb-2">
                <CalendarIcon
                  aria-label="Año de inicio"
                  className="h-12 w-12 text-primary"
                />
                <h3 className="text-5xl font-bold text-primary">
                  <AnimatedCount
                    targetNumber={2021}
                    isVisible={isVisibleInicio}
                  />{' '}
                  {/* Contador animado para el año de inicio */}
                </h3>
              </div>
              <p className="text-lg text-gray-800">
                Año en el que dimos inicio a nuestra academia educativa
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
