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
      springValue.set(targetNumber); // Inicia la animación solo si es visible
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
      threshold: 0.5, // El 50% del elemento debe estar visible para activarse
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === alumnosRef.current) {
          setIsVisibleAlumnos(entry.isIntersecting);
        }
        if (entry.target === inicioRef.current) {
          setIsVisibleInicio(entry.isIntersecting);
        }
      });
    }, observerOptions);

    const alumnosNode = alumnosRef.current;
    const inicioNode = inicioRef.current;

    if (alumnosNode) observer.observe(alumnosNode);
    if (inicioNode) observer.observe(inicioNode);

    return () => {
      if (alumnosNode) observer.unobserve(alumnosNode);
      if (inicioNode) observer.unobserve(inicioNode);
    };
  }, []);

  return (
    <div className="bg-lightGray dark:bg-dark-bg">
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
                  className="h-12 w-12 text-primary dark:text-dark-primary"
                />
                <h3 className="text-5xl  text-primary dark:text-dark-primary">
                  +
                  <AnimatedCount
                    targetNumber={300}
                    isVisible={isVisibleAlumnos}
                  />{' '}
                </h3>
              </div>
              <p className="text-lg text-foreground dark:text-white">
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
                  className="h-12 w-12 text-primary dark:text-dark-primary"
                />
                <h3 className="text-5xl  text-primary dark:text-dark-primary">
                  <AnimatedCount
                    targetNumber={2021}
                    isVisible={isVisibleInicio}
                  />{' '}
                </h3>
              </div>
              <p className="text-lg text-foreground dark:text-white">
                Año en el que dimos inicio a nuestra academia educativa
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
