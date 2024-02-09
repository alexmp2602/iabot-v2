"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/img/logo.png";

import { useState } from "react";

interface SvgProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-white">
      <nav className="lg:text-center bg-[#f8f8f8]  px-4 py-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="/">
              <Image
                alt="IA Bot Logo"
                className="h-10 text-black"
                height="40"
                src="/assets/img/logo/PNG/iabot-PNG-06.png"
                style={{
                  aspectRatio: "100/40",
                  objectFit: "cover",
                }}
                width="100"
              />
            </a>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <Link className=" text-green-600 hover:text-green-700" href="/">
              INICIO
            </Link>
            <Link
              className=" text-green-600 hover:text-green-700"
              href="/Acerca-de"
            >
              ACERCA DE
            </Link>
            <Link
              className=" text-green-600 hover:text-green-700"
              href="/Cursos"
            >
              CURSOS
            </Link>
            <Link
              className=" text-green-600 hover:text-green-700"
              href="/Capacitaciones"
            >
              CAPACITACIONES
            </Link>
            <Link
              className=" text-green-600 hover:text-green-700"
              href="/Contacto"
            >
              CONTACTO
            </Link>
          </div>
          <div className="md:hidden">
            <button
              className=" text-green-600 hover:text-green-700"
              onClick={toggleMobileMenu}
            >
              <MenuIcon className="h-6 w-6" />
            </button>
            {isMobileMenuOpen && (
              <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white z-10 flex flex-col p-4 items-end">
                <button
                  className="mb-4 text-green-600 hover:text-green-700"
                  onClick={closeMobileMenu}
                >
                  <PanelTopCloseIcon className="h-6 w-6" />
                </button>
                <div className="flex flex-col items-end">
                  <Link
                    className="mb-4 text-green-600 hover:text-green-700"
                    href="/"
                    onClick={closeMobileMenu}
                  >
                    INICIO
                  </Link>
                  <Link
                    className="mb-4 text-green-600 hover:text-green-700"
                    href="/Acerca-de"
                    onClick={closeMobileMenu}
                  >
                    ACERCA DE
                  </Link>
                  <Link
                    className="mb-4 text-green-600 hover:text-green-700"
                    href="/Cursos"
                    onClick={closeMobileMenu}
                  >
                    CURSOS
                  </Link>
                  <Link
                    className="mb-4 text-green-600 hover:text-green-700"
                    href="/Capacitaciones"
                    onClick={closeMobileMenu}
                  >
                    CAPACITACIONES
                  </Link>
                  <Link
                    className="mb-4 text-green-600 hover:text-green-700"
                    href="/Contacto"
                    onClick={closeMobileMenu}
                  >
                    CONTACTO
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <path d="m9 16 3-3 3 3" />
    </svg>
  );
}
