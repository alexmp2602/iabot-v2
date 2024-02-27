import Head from "next/head";
import "@/app/globals.css";

export const metadata = {
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
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;