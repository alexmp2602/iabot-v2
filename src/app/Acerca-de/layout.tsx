import "@/app/globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Inscription from "@/components/Inscription";
import Data from "@/components/Data";

export const metadata = {
  title: "IABOT - Acerca de | Robótica Educativa y Capacitación",
  description:
    "Descubre IABOT, una empresa líder en robótica educativa que ofrece capacitación de docentes y recursos innovadores para la enseñanza de STEM. Conoce nuestros programas y cómo podemos ayudar a mejorar la educación.",
  keywords: "robótica educativa, capacitación docente, educación STEM, IABOT",
  authors: "IABOT Team",
};

export const viewport = {
  width: "device-width",
  initialScale: "1",
};

export default function AcercaDeLayout({
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
