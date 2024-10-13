'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark'); // Tema predeterminado oscuro
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Verifica el modo de tema almacenado
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme as 'light' | 'dark');
      document.documentElement.classList.toggle('dark', storedTheme === 'dark'); // Aplica la clase 'dark' según el tema
    }
  }, []);

  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Almacena el tema
    document.documentElement.classList.toggle('dark', newTheme === 'dark'); // Cambia la clase 'dark' en <html>
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const logoSrc =
    theme === 'light'
      ? '/assets/img/logo/edits/iabot-webp-06.webp' // Logo para modo claro
      : '/assets/img/logo/edits/iabot-webp-09.webp'; // Logo para modo oscuro

  const linkClass =
    'text-black dark:text-white transition-colors duration-300 py-2 hover:text-primary dark:hover:text-dark-primary';

  return (
    <nav className="sticky top-0 z-50 bg-light-gray dark:bg-dark-bg px-4 py-2 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Ir a inicio"
          className="flex items-center space-x-4"
        >
          <Image
            alt="IA Bot Logo"
            src={logoSrc} // Cambia el logo dinámicamente según el tema
            width={100}
            height={40}
            priority={true}
            className="object-cover"
          />
        </Link>

        {/* Toggle del tema */}
        <ThemeToggle onThemeChange={handleThemeChange} />

        {/* Links del menú y toggle del tema alineados a la derecha */}
        <div className="flex items-center justify-end space-x-6">
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link className={linkClass} href="/" aria-label="Ir a inicio">
              INICIO
            </Link>
            <Link
              className={linkClass}
              href="/Acerca-de"
              aria-label="Ir a Acerca de"
            >
              ACERCA DE
            </Link>
            <Link className={linkClass} href="/Cursos" aria-label="Ir a Cursos">
              CURSOS
            </Link>
            <Link
              className={linkClass}
              href="/Capacitaciones"
              aria-label="Ir a Capacitaciones"
            >
              CAPACITACIONES
            </Link>
            <Link
              className={linkClass}
              href="/Contacto"
              aria-label="Ir a Contacto"
            >
              CONTACTO
            </Link>
          </div>
        </div>

        {/* Menú móvil */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Abrir menú móvil"
            className="text-black dark:text-white"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 6.75h16.5m-16.5 6.75h16.5"
                />
              </svg>
            )}
          </button>

          {/* Panel del menú móvil */}
          {isMobileMenuOpen && (
            <div className="absolute right-0 top-0 w-full h-screen bg-light-gray dark:bg-dark-bg p-4 flex flex-col items-end space-y-4">
              <button
                onClick={toggleMobileMenu}
                aria-label="Cerrar menú móvil"
                className="self-end text-black dark:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <Link
                className={linkClass}
                href="/"
                onClick={toggleMobileMenu}
                aria-label="Ir a inicio"
              >
                INICIO
              </Link>
              <Link
                className={linkClass}
                href="/Acerca-de"
                onClick={toggleMobileMenu}
                aria-label="Ir a Acerca de"
              >
                ACERCA DE
              </Link>
              <Link
                className={linkClass}
                href="/Cursos"
                onClick={toggleMobileMenu}
                aria-label="Ir a Cursos"
              >
                CURSOS
              </Link>
              <Link
                className={linkClass}
                href="/Capacitaciones"
                onClick={toggleMobileMenu}
                aria-label="Ir a Capacitaciones"
              >
                CAPACITACIONES
              </Link>
              <Link
                className={linkClass}
                href="/Contacto"
                onClick={toggleMobileMenu}
                aria-label="Ir a Contacto"
              >
                CONTACTO
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
