import { Metadata } from 'next';
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "IABOT - Robótica Educativa y Capacitaciones para Docentes",
  description: "IABOT es una empresa dedicada a la robótica educativa y a la capacitación de docentes.",
  keywords: "robótica, educación, capacitación, docentes, IABOT, LEGO, SPIKE, Prime, EV3, WeDo, cursos de robótica para docentes, kits de robótica educativa, capacitación en robótica educativa",
  authors: [{ name: "IABOT Team", url: "https://www.iabot.com.ar" }],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bruno+Ace&family=Avenir+LT+Std:wght@400&display=swap" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
