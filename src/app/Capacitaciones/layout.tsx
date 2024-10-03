import "@/app/globals.css";
import { Bruno_Ace } from "next/font/google";
import { Metadata } from "next";

const brunoAce = Bruno_Ace({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IABOT - Capacitaciones en Robótica Educativa",
  description:
    "En IABOT, ofrecemos capacitaciones especializadas en robótica educativa para docentes, brindando herramientas y recursos innovadores para transformar el aprendizaje en el aula.",
  keywords: [
    "capacitaciones",
    "robótica educativa",
    "formación docente",
    "IABOT",
  ],
  authors: [{ name: "IABOT Team", url: "https://www.iabot.com.ar" }],
  robots: "index, follow",
  metadataBase: new URL("https://www.iabot.com.ar"),
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
