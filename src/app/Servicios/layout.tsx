import '@/app/globals.css';
import { Metadata } from 'next';
import { ThemeProvider } from 'next-themes'; // Importamos ThemeProvider para gestionar los temas

export const metadata: Metadata = {
  title: 'Servicios - IABOT | Robótica Educativa y Capacitación',
  description:
    'Descubre los servicios de IABOT en robótica educativa, capacitación docente y desarrollo de soluciones tecnológicas para instituciones y empresas.',
  keywords: [
    'servicios robótica educativa',
    'capacitación docente',
    'educación STEM',
    'IABOT',
    'soluciones tecnológicas educativas',
  ],
  authors: [{ name: 'IABOT Team', url: 'https://www.iabot.com.ar' }],
  robots: 'index, follow',
  metadataBase: new URL('https://www.iabot.com.ar'),
  openGraph: {
    title: 'Servicios - IABOT | Robótica Educativa y Capacitación',
    description:
      'Explora nuestros servicios en robótica educativa y capacitación para docentes con soluciones innovadoras y personalizadas.',
    url: 'https://www.iabot.com.ar/servicios',
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
    title: 'Servicios - IABOT | Robótica Educativa y Capacitación',
    description:
      'Explora nuestros servicios en robótica educativa y capacitación docente con soluciones innovadoras y personalizadas.',
    images: '/assets/img/logo/JPG/iabot.jpg',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const ServicesLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="font-roboto bg-light-gray dark:bg-dark-bg min-h-screen relative z-10">
        <main>{children}</main>
      </div>
    </ThemeProvider>
  );
};

export default ServicesLayout;
