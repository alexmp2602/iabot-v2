import "@/app/globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "IABOT - Inscripción",
  description:
    "Inscríbete en nuestros cursos de robótica educativa en IABOT. Ofrecemos capacitación para docentes y estudiantes para el desarrollo de habilidades tecnológicas.",
  keywords: "inscripción, robótica educativa, cursos, IABOT, capacitación docente",
  authors: "IABOT Team",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
