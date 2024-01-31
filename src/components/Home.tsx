import '@/app/globals.css'

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Inscription from "@/components/Inscription";
import Data from "@/components/Data";

export const metadata = {
  title: "IABOT - Robótica Educativa y Capacitaciones para Docentes",
  description: "IABOT es una empresa dedicada a la robótica educativa y a la capacitación de docentes.",
};

export default function Home({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Inscription />
        <Data />
        <Footer />
      </body>
    </html>
  );
}
