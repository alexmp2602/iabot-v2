import { Metadata, Viewport } from "next";
import { Bruno_Ace } from "next/font/google";
import { Roboto } from "next/font/google";
import "@/app/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Inscription from "@/components/Inscription";
import Data from "@/components/Data";

const brunoAce = Bruno_Ace({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

// Definición de metadatos
export const metadata: Metadata = {
  title: "IABOT - Robótica Educativa y Capacitaciones para Docentes",
  description:
    "IABOT es una empresa dedicada a la robótica educativa y a la capacitación de docentes.",
  keywords: [
    "robótica",
    "educación",
    "capacitación",
    "docentes",
    "IABOT",
    "LEGO",
    "SPIKE",
    "Prime",
    "EV3",
    "WeDo",
    "cursos de robótica para docentes",
    "kits de robótica educativa",
    "capacitación en robótica educativa",
  ],
  authors: [{ name: "IABOT Team", url: "https://www.iabot.com.ar" }],
  robots: "index, follow",
  metadataBase: new URL("https://www.iabot.com.ar"),
  openGraph: {
    title: "IABOT - Robótica Educativa y Capacitaciones para Docentes",
    description:
      "IABOT es una empresa dedicada a la robótica educativa y a la capacitación de docentes.",
    url: "https://www.iabot.com.ar",
    type: "website",
    images: [
      {
        url: "/assets/img/logo/JPG/iabot.jpg",
        width: 1200,
        height: 630,
        alt: "IABOT logo",
      },
    ],
  },
};

// Definición del viewport
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Los metadatos se aplican automáticamente en la nueva versión de Next*/}
      </head>
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Inscription />
        <Data />
        <Footer />
      </body>
    </html>
  );
}
