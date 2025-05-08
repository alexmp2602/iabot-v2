'use client';

import { useEffect } from 'react';
import Background from '@/components/Background';
import { CardContent, Card, CardHeader, CardTitle } from '@/components/ui/card';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Inscription from '@/components/Inscription';
import Data from '@/components/Data';
import * as Accordion from '@radix-ui/react-accordion';

export default function Contacto() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Bruno+Ace&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Background />

      <header className="bg-primary py-20 text-center">
        <h1 className="mb-10 font-bruno text-4xl text-gray-900 dark:text-gray-900">
          CONTÁCTANOS
        </h1>
        <p className="font-bruno text-2xl text-gray-900 dark:text-gray-900">
          ¿Tienes alguna duda o consulta? Escríbenos y te responderemos a la
          brevedad.
        </p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="border border-gray-700 dark:border-gray-300 mx-auto w-full max-w-lg bg-white dark:bg-dark-gray p-6 shadow-md">
          <CardHeader>
            <CardTitle className="text-3xl text-gray-900 dark:text-white">
              Información de Contacto
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-y-6 text-black dark:text-gray-300 sm:grid-cols-1">
              {/* Teléfono */}
              <div className="flex items-start space-x-4">
                <FaPhone className="text-2xl text-primary" />
                <div>
                  <div className="text-xl text-gray-900 dark:text-white mb-1">
                    Teléfono
                  </div>
                  <a
                    href="tel:+5492324468366"
                    className="text-blue-500 hover:underline text-lg"
                  >
                    +54 9 2324 46-8366
                  </a>
                </div>
              </div>

              {/* Correo */}
              <div className="flex items-start space-x-4">
                <FaEnvelope className="text-2xl text-primary" />
                <div>
                  <div className="text-xl text-gray-900 dark:text-white mb-1">
                    Correo Electrónico
                  </div>
                  <a
                    href="mailto:info@iabot.com.ar"
                    className="text-blue-500 hover:underline text-lg"
                  >
                    info@iabot.com.ar
                  </a>
                </div>
              </div>

              {/* Sedes (Título con ícono) */}
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-2xl text-primary" />
                <div className="text-xl text-gray-900 dark:text-white">
                  Sedes
                </div>
              </div>

              {/* Acordeón de sedes */}
              <div>
                <Accordion.Root
                  type="multiple"
                  defaultValue={['Sede Central']}
                  className="w-full space-y-2"
                >
                  {[
                    {
                      name: 'Sede Central',
                      address: (
                        <a
                          href="https://maps.app.goo.gl/7GhMqj1oq8sywg2t9"
                          className="text-blue-500 hover:underline text-base font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          C. 9 374, Mercedes, Provincia de Buenos Aires
                        </a>
                      ),
                    },
                    {
                      name: 'Sede San Andrés de Giles',
                      address: (
                        <a
                          href="https://maps.app.goo.gl/q9mXuMx6CBuc291u9"
                          className="text-blue-500 hover:underline text-base font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Avellaneda 754, “Casa Cinco”
                        </a>
                      ),
                    },
                    {
                      name: 'Sede Luján',
                      address: (
                        <a
                          href="https://maps.app.goo.gl/DkND7Vsh3Eco2zww8"
                          className="text-blue-500 hover:underline text-base font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Esquina Olavarría y Mitre, “Taller Ojos”
                        </a>
                      ),
                    },
                  ].map((sede, i) => (
                    <Accordion.Item
                      key={i}
                      value={sede.name}
                      className="rounded-md bg-gray-50 dark:bg-gray-800 border-l-4 border-primary p-4"
                    >
                      <Accordion.Header>
                        <Accordion.Trigger className="group flex w-full items-center justify-between text-left font-semibold text-sm uppercase text-gray-800 dark:text-gray-300 focus:outline-none">
                          <div className="flex items-center space-x-2">
                            <FaMapMarkerAlt className="text-primary" />
                            <span className="pr-4 block truncate">
                              {sede.name}
                            </span>
                          </div>
                          <span className="w-4 flex-shrink-0 ml-auto transform transition-transform duration-300 group-data-[state=open]:rotate-90">
                            ▶
                          </span>
                        </Accordion.Trigger>
                      </Accordion.Header>
                      <Accordion.Content className="overflow-hidden transition-all duration-300 data-[state=open]:animate-expand data-[state=closed]:animate-collapse mt-2 text-gray-700 dark:text-gray-300">
                        {sede.address}
                      </Accordion.Content>
                    </Accordion.Item>
                  ))}
                </Accordion.Root>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sección de Inscripción */}
        <Inscription />

        {/* Sección de Datos */}
        <Data />
      </main>
    </div>
  );
}
