import "@/app/globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Inscription from "@/components/Inscription";
import Data from "@/components/Data";

export const metadata = {
  title: "IABOT - Capacitaciones en Robótica Educativa",
  description:
    "En IABOT, ofrecemos capacitaciones especializadas en robótica educativa para docentes, brindando herramientas y recursos innovadores para transformar el aprendizaje en el aula.",
  keywords: "capacitaciones, robótica educativa, formación docente, IABOT",
  authors: "IABOT Team",
};

export const viewport = {
  width: "device-width",
  initialScale: "1",
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
      <Inscription />
      <Data />
      <Footer />
    </>
  );
}
