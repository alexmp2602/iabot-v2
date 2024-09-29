"use client";

import { Metadata } from 'next';
import "@/app/globals.css";
import Head from 'next/head';

export const metadata: Metadata = {
  title: "IABOT - Robótica Educativa y Capacitaciones para Docentes",
  description: "IABOT es una empresa dedicada a la robótica educativa y a la capacitación de docentes.",
  keywords: "robótica, educación, capacitación, docentes, IABOT, LEGO, SPIKE, Prime, EV3, WeDo, cursos de robótica para docentes, kits de robótica educativa, capacitación en robótica educativa",
  authors: [{ name: "IABOT Team", url: "https://www.iabot.com.ar" }],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const keywords = Array.isArray(metadata.keywords) ? metadata.keywords.join(', ') : metadata.keywords ?? '';

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bruno+Ace&family=Avenir+LT+Std:wght@400&display=swap" />
        <meta name="description" content={metadata.description ?? ''} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={String(metadata.title) ?? ''} />
        <meta property="og:description" content={metadata.description ?? ''} />
        <meta property="og:url" content="https://www.iabot.com.ar" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/img/logo/JPG/iabot.jpg" />
      </Head>
      <body>
        {children}
      </body>
    </>
  );
}

export default RootLayout;
