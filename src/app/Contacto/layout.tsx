import "@/app/globals.css";
import { Bruno_Ace } from "next/font/google";
import { Metadata } from "next";

const brunoAce = Bruno_Ace({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IABOT - Contacto",
  description:
    "Contáctanos en IABOT para consultas sobre robótica educativa y capacitaciones para docentes. Estamos aquí para ayudarte.",
  keywords: ["contacto", "robótica educativa", "capacitaciones", "IABOT"],
  authors: [{ name: "IABOT Team", url: "https://www.iabot.com.ar" }],
  robots: "index, follow",
  metadataBase: new URL("https://www.iabot.com.ar"),
  openGraph: {
    title: "IABOT - Contacto",
    description:
      "Contáctanos en IABOT para consultas sobre robótica educativa y capacitaciones para docentes.",
    url: "https://www.iabot.com.ar/contacto",
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
    title: "IABOT - Contacto",
    description:
      "Contáctanos en IABOT para consultas sobre robótica educativa y capacitaciones para docentes.",
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
