import { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const brunoAce = Inter({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: "IABOT - Robótica Educativa y Capacitaciones para Docentes",
  description: "IABOT es una empresa dedicada a la robótica educativa y a la capacitación de docentes.",
  keywords: "robótica, educación, capacitación, docentes, IABOT, LEGO, SPIKE, Prime, EV3, WeDo, cursos de robótica para docentes, kits de robótica educativa, capacitación en robótica educativa",
  authors: [{ name: "IABOT Team", url: "https://www.iabot.com.ar" }],
  viewport: "width=device-width, initial-scale=1.0",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={brunoAce.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
