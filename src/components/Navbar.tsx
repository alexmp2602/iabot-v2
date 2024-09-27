"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface SvgProps {
  className?: string;
  style?: React.CSSProperties;
}

function MenuIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function PanelTopCloseIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" x2="6" y1="6" y2="18" />
      <line x1="6" x2="18" y1="6" y2="18" />
    </svg>
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Deshabilitar scroll al abrir el menú móvil
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  const linkClass = "text-green-600 hover:text-green-700 transition-colors duration-300";

  return (
    <nav className="sticky top-0 z-50 bg-[#f8f8f8] px-4 py-2 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Ir a inicio" className="flex items-center space-x-4">
          <Image
            alt="IA Bot Logo"
            src="/assets/img/logo/PNG/iabot-PNG-06.png"
            width={100}
            height={40}
            priority={true}
            className="h-10 object-cover"
            style={{ aspectRatio: "100/40" }}
          />
        </Link>

        {/* Links del menú en versión de escritorio */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <Link className={linkClass} href="/" aria-label="Ir a inicio">
            INICIO
          </Link>
          <Link className={linkClass} href="/Acerca-de" aria-label="Ir a Acerca de">
            ACERCA DE
          </Link>
          <Link className={linkClass} href="/Cursos" aria-label="Ir a Cursos">
            CURSOS
          </Link>
          <Link className={linkClass} href="/Capacitaciones" aria-label="Ir a Capacitaciones">
            CAPACITACIONES
          </Link>
          <Link className={linkClass} href="/Contacto" aria-label="Ir a Contacto">
            CONTACTO
          </Link>
        </div>

        {/* Menú móvil */}
        <div className="md:hidden">
          <button
            className="text-green-600 hover:text-green-700 transition-transform duration-300"
            onClick={toggleMobileMenu}
            aria-label="Abrir menú"
            aria-expanded={isMobileMenuOpen}
          >
            <MenuIcon className="h-6 w-6" />
          </button>
          {isMobileMenuOpen && (
            <div className="absolute right-0 top-0 z-10 h-screen w-full bg-white p-4 transition-transform duration-300">
              <div className="flex justify-end">
                <button
                  className="mb-4 text-green-600 hover:text-green-700"
                  onClick={closeMobileMenu}
                  aria-label="Cerrar menú"
                >
                  <PanelTopCloseIcon className="h-6 w-6" />
                </button>
              </div>
              <div className="flex flex-col items-end">
                <Link className={linkClass} href="/" onClick={closeMobileMenu} aria-label="Ir a inicio">
                  INICIO
                </Link>
                <Link className={linkClass} href="/Acerca-de" onClick={closeMobileMenu} aria-label="Ir a Acerca de">
                  ACERCA DE
                </Link>
                <Link className={linkClass} href="/Cursos" onClick={closeMobileMenu} aria-label="Ir a Cursos">
                  CURSOS
                </Link>
                <Link className={linkClass} href="/Capacitaciones" onClick={closeMobileMenu} aria-label="Ir a Capacitaciones">
                  CAPACITACIONES
                </Link>
                <Link className={linkClass} href="/Contacto" onClick={closeMobileMenu} aria-label="Ir a Contacto">
                  CONTACTO
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
