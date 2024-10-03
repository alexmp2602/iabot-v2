import "@/app/globals.css";
import { Bruno_Ace } from "next/font/google";
import { Metadata } from "next";

const brunoAce = Bruno_Ace({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IABOT - Acerca de | Robótica Educativa y Capacitación",
  description:
    "Descubre IABOT, una empresa líder en robótica educativa que ofrece capacitación de docentes y recursos innovadores para la enseñanza de STEM. Conoce nuestros programas y cómo podemos ayudar a mejorar la educación.",
  keywords: [
    "robótica educativa",
    "capacitación docente",
    "educación STEM",
    "IABOT",
  ],
  authors: [{ name: "IABOT Team", url: "https://www.iabot.com.ar" }],
  robots: "index, follow",
  metadataBase: new URL("https://www.iabot.com.ar"),
  openGraph: {
    title: "IABOT - Acerca de | Robótica Educativa y Capacitación",
    description:
      "Descubre IABOT, una empresa líder en robótica educativa que ofrece capacitación de docentes y recursos innovadores para la enseñanza de STEM. Conoce nuestros programas y cómo podemos ayudar a mejorar la educación.",
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
  twitter: {
    card: "summary_large_image",
    site: "@iabot",
    title: "IABOT - Acerca de | Robótica Educativa y Capacitación",
    description:
      "Descubre IABOT, una empresa líder en robótica educativa que ofrece capacitación de docentes y recursos innovadores para la enseñanza de STEM.",
    images: "/assets/img/logo/JPG/iabot.jpg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default RootLayout;
