import { Metadata } from 'next'
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "IABOT - Robótica Educativa y Capacitaciones para Docentes",
  description:
    "IABOT es una empresa dedicada a la robótica educativa y a la capacitación de docentes.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
        <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;