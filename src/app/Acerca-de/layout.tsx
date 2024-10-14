import '@/app/globals.css';
import { Metadata } from 'next';
import { ThemeProvider } from 'next-themes'; // Importamos ThemeProvider para gestionar los temas

export const metadata: Metadata = {
  title: 'IABOT - Acerca de | Robótica Educativa y Capacitación',
  description:
    'Descubre IABOT, una empresa líder en robótica educativa que ofrece capacitación de docentes y recursos innovadores para la enseñanza de STEM. Conoce nuestros programas y cómo podemos ayudar a mejorar la educación.',
  keywords: [
    'robótica educativa',
    'capacitación docente',
    'educación STEM',
    'IABOT',
  ],
  authors: [{ name: 'IABOT Team', url: 'https://www.iabot.com.ar' }],
  robots: 'index, follow',
  metadataBase: new URL('https://www.iabot.com.ar'),
  openGraph: {
    title: 'IABOT - Acerca de | Robótica Educativa y Capacitación',
    description:
      'Descubre IABOT, una empresa líder en robótica educativa que ofrece capacitación de docentes y recursos innovadores para la enseñanza de STEM. Conoce nuestros programas y cómo podemos ayudar a mejorar la educación.',
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
    title: 'IABOT - Acerca de | Robótica Educativa y Capacitación',
    description:
      'Descubre IABOT, una empresa líder en robótica educativa que ofrece capacitación de docentes y recursos innovadores para la enseñanza de STEM.',
    images: '/assets/img/logo/JPG/iabot.jpg',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const AboutLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="font-roboto bg-light-gray dark:bg-dark-bg min-h-screen relative z-10">
        <main>{children}</main>
      </div>
    </ThemeProvider>
  );
};

export default AboutLayout;
