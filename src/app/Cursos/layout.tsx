import "@/app/globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Inscription from "@/components/Inscription";
import Data from "@/components/Data";

export const metadata = {
  title: "IABOT - Cursos",
  description:
    "Descubre nuestros cursos de robótica educativa en IABOT, diseñados para capacitar docentes y estudiantes con las últimas tecnologías.",
  keywords: "cursos, robótica educativa, capacitación docente, IABOT",
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
