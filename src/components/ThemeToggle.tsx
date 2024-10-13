import { useState, useEffect } from 'react';

export default function ThemeToggle({
  onThemeChange,
}: {
  onThemeChange: (newTheme: 'light' | 'dark') => void;
}) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDark(true);
    }
  }, []);

  const handleToggle = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    onThemeChange(newTheme); // Llama a la función pasada desde el componente padre
  };

  return (
    <button
      onClick={handleToggle}
      aria-label="Toggle theme"
      className="transition-colors duration-300 text-primary dark:text-dark-primary"
    >
      {isDark ? '☀️ Modo claro' : '🌙 Modo oscuro'}
    </button>
  );
}
