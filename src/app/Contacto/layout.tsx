import "@/app/globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Inscription from "@/components/Inscription";
import Data from "@/components/Data";

export const metadata = {
  title: "IABOT - Contacto",
  description:
    "Contáctanos en IABOT para consultas sobre robótica educativa y capacitaciones para docentes. Estamos aquí para ayudarte.",
  keywords: "contacto, robótica educativa, capacitaciones, IABOT",
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
