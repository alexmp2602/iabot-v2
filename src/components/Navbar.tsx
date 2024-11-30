'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(storedTheme as 'light' | 'dark');
    document.documentElement.classList.toggle('dark', storedTheme === 'dark');
  }, []);

  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const logoSrc =
    theme === 'light'
      ? '/assets/img/logo/edits/iabot-webp-06.webp'
      : '/assets/img/logo/edits/iabot-webp-09.webp';

  const linkClass =
    'text-black dark:text-white transition py-2 hover:text-primary dark:hover:text-dark-primary';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setVisible(false); // Ocultar menú al desplazarse hacia abajo
      } else if (window.scrollY < lastScrollY) {
        setVisible(true); // Mostrar menú al desplazarse hacia arriba
      }
      setLastScrollY(window.scrollY); // Actualizar la última posición de desplazamiento
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`sticky top-0 z-50 bg-light-gray dark:bg-dark-bg px-4 py-2 shadow-md transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href="/"
          aria-label="Ir a inicio"
          className="flex items-center space-x-4"
        >
          <Image
            alt="IA Bot Logo"
            src={logoSrc}
            width={100}
            height={50}
            priority={true}
          />
        </Link>

        {/* Toggle del tema */}
        <ThemeToggle onThemeChange={handleThemeChange} />

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
          <Link
            className={linkClass}
            href="/Talleres"
            aria-label="Ir a Talleres"
          >
            TALLERES
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

        {/* Menú móvil */}
        <button
          onClick={toggleMobileMenu}
          aria-label="Abrir menú móvil"
          aria-expanded={isMobileMenuOpen}
          className="md:hidden"
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 6.75h16.5m-16.5 6.75h16.5"
              />
            </svg>
          )}
        </button>

        {/* Menú móvil expandido */}
        {isMobileMenuOpen && (
          <div
            ref={menuRef}
            className="absolute right-0 top-0 w-full h-screen bg-light-gray dark:bg-dark-bg p-4 flex flex-col items-end transition duration-300 ease-in-out"
          >
            <button
              onClick={toggleMobileMenu}
              aria-label="Cerrar menú móvil"
              className="mb-4"
            >
              <svg
                className="w-6 h-6 text-black dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Link className={linkClass} href="/" onClick={toggleMobileMenu}>
              INICIO
            </Link>
            <Link
              className={linkClass}
              href="/Acerca-de"
              onClick={toggleMobileMenu}
            >
              ACERCA DE
            </Link>
            <Link
              className={linkClass}
              href="/Talleres"
              onClick={toggleMobileMenu}
            >
              TALLERES
            </Link>
            <Link
              className={linkClass}
              href="/Capacitaciones"
              onClick={toggleMobileMenu}
            >
              CAPACITACIONES
            </Link>
            <Link
              className={linkClass}
              href="/Contacto"
              onClick={toggleMobileMenu}
            >
              CONTACTO
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
