import '@/app/globals.css'

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Data from "@/components/Data";

export const metadata = {
  title: "IABOT - Inscripción",
  description: "IABOT es una empresa dedicada a la robótica educativa y a la capacitación de docente",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
