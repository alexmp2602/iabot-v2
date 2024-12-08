import { Metadata } from 'next';
import { Bruno_Ace, Roboto } from 'next/font/google';
import '@/app/globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Inscription from '@/components/Inscription';
import Data from '@/components/Data';
import { ThemeProvider } from 'next-themes';

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const brunoAce = Bruno_Ace({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

// Definición de metadatos
export const metadata: Metadata = {
  title: 'IABOT - Robótica Educativa y Soluciones Tecnológicas Educativas',
  description:
    'Somos una empresa dedicada a la robótica educativa y al desarrollo de soluciones tecnológicas personalizadas para instituciones y empresas.',
  keywords: [
    'robótica',
    'educación',
    'capacitación',
    'docentes',
    'IABOT',
    'LEGO',
    'SPIKE',
    'Prime',
    'EV3',
    'WeDo',
    'cursos de robótica para docentes',
    'kits de robótica educativa',
    'capacitación en robótica educativa',
  ],
  authors: [{ name: 'IABOT Team', url: 'https://www.iabot.com.ar' }],
  robots: 'index, follow',
  metadataBase: new URL('https://www.iabot.com.ar'),
  openGraph: {
    title: 'IABOT - Robótica Educativa y Capacitaciones para Docentes',
    description:
      'IABOT es una empresa dedicada a la robótica educativa y a la capacitación de docentes.',
    url: 'https://www.iabot.com.ar',
    type: 'website',
    images: [
      {
        url: '/assets/img/logo/JPG/iabot.jpg',
        width: 1200,
        height: 630,
        alt: 'IABOT logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@iabot',
    title: 'IABOT - Robótica Educativa y Capacitaciones para Docentes',
    description:
      'Descubre IABOT, una empresa líder en robótica educativa que ofrece capacitación y recursos innovadores.',
    images: '/assets/img/logo/JPG/iabot.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </head>
      <body className={`${roboto.className} bg-light-gray dark:bg-dark-bg`}>
        <ThemeProvider attribute="class" enableSystem defaultTheme="light">
          <Navbar />
          <main className="font-roboto relative z-10">{children}</main>
          <Inscription />
          <Data />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
