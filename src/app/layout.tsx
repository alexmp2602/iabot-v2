import Head from "next/head";
import "@/app/globals.css";

export const metadata = {
  title: "IABOT - Robótica Educativa y Capacitaciones para Docentes",
  description:
    "IABOT es una empresa dedicada a la robótica educativa y a la capacitación de docentes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link href="https://fonts.googleapis.com/css2?family=Bruno+Ace&display=swap" rel="stylesheet" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
