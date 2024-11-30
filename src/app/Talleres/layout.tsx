import '@/app/globals.css';

import { Metadata } from 'next';
import type { Viewport } from 'next';

export const metadata: Metadata = {
  title: 'IABOT - Cursos',
  description:
    'Descubre nuestros cursos de robótica educativa en IABOT, diseñados para capacitar docentes y estudiantes con las últimas tecnologías.',
  keywords: ['cursos', 'robótica educativa', 'capacitación docente', 'IABOT'],
  authors: [{ name: 'IABOT Team', url: 'https://www.iabot.com.ar' }],
  robots: 'index, follow',
  metadataBase: new URL('https://www.iabot.com.ar'),
};

// Exporta el viewport
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
