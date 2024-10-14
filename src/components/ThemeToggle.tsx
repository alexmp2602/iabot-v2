import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTheme } from 'next-themes';

interface SwitchProps {
  onThemeChange: (newTheme: 'light' | 'dark') => void;
}

const Switch: React.FC<SwitchProps> = ({ onThemeChange }) => {
  const { theme, setTheme } = useTheme(); // Obtener el tema actual
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Evitar problemas de renderizado en SSR

  const handleToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme); // Actualiza el tema con `next-themes`
    onThemeChange(newTheme); // Llamar la función que se pasa como prop
  };

  return (
    <StyledWrapper>
      <label
        className="theme-switch"
        htmlFor="theme-toggle"
        aria-label="Toggle theme"
      >
        <input
          id="theme-toggle"
          type="checkbox"
          className="theme-switch__checkbox"
          checked={theme === 'dark'}
          onChange={handleToggle}
          role="switch"
          aria-checked={theme === 'dark'}
        />
        <div className="theme-switch__container">
          <div className="theme-switch__circle-container">
            <div className={`theme-switch__sun-moon-container ${theme}`}>
              <div className="theme-switch__moon">
                {theme === 'dark' && (
                  <>
                    <div className="theme-switch__spot" />
                    <div className="theme-switch__spot" />
                    <div className="theme-switch__spot" />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </label>
    </StyledWrapper>
  );
};

// Aquí están los estilos usando styled-components
const StyledWrapper = styled.div`
  .theme-switch {
    --toggle-size: 18px;
    --container-width: 3.5em;
    --container-height: 1.75em;
    --container-radius: 4em;
    --container-light-bg: #3d7eae;
    --container-night-bg: #1d1f2c;
    --circle-container-diameter: 1.75em;
    --sun-moon-diameter: 1.25em;
    --sun-bg: #ecca2f;
    --moon-bg: #c4c9d1;
    --spot-color: #959db1;
    --circle-container-offset: calc(
      (var(--circle-container-diameter) - var(--container-height)) / 2 * -1
    );
    --transition: 0.4s cubic-bezier(0, 0, 0.2, 1);
    --circle-transition: 0.3s ease-in-out;
  }

  .theme-switch__container {
    width: var(--container-width);
    height: var(--container-height);
    background-color: var(--container-light-bg);
    border-radius: var(--container-radius);
    overflow: hidden;
    cursor: pointer;
    transition: var(--transition);
    position: relative;
  }

  .theme-switch__checkbox {
    display: none;
  }

  .theme-switch__circle-container {
    width: var(--circle-container-diameter);
    height: var(--circle-container-diameter);
    background-color: rgba(255, 255, 255, 0.1);
    position: absolute;
    left: var(--circle-container-offset);
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    transition: var(--circle-transition);
    pointer-events: none;
  }

  .theme-switch__sun-moon-container {
    pointer-events: auto;
    position: relative;
    z-index: 2;
    width: var(--sun-moon-diameter);
    height: var(--sun-moon-diameter);
    margin: auto;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    background-color: var(--sun-bg);
    transition: var(--transition);
  }

  .theme-switch__sun-moon-container.dark {
    background-color: var(--moon-bg);
  }

  .theme-switch__moon {
    transform: translateX(100%);
    width: 100%;
    height: 100%;
    border-radius: inherit;
    transition: var(--transition);
    position: relative;
  }

  .theme-switch__spot {
    position: absolute;
    background-color: var(--spot-color);
    border-radius: 50%;
    width: 0.2em;
    height: 0.2em;
  }

  .theme-switch__spot:nth-child(1) {
    top: 25%;
    left: 35%;
  }

  .theme-switch__spot:nth-child(2) {
    top: 50%;
    left: 70%;
  }

  .theme-switch__spot:nth-child(3) {
    top: 75%;
    left: 45%;
  }

  /* Acciones al hacer toggle */

  .theme-switch__checkbox:checked + .theme-switch__container {
    background-color: var(--container-night-bg);
  }

  .theme-switch__checkbox:checked
    + .theme-switch__container
    .theme-switch__circle-container {
    left: calc(
      100% - var(--circle-container-offset) - var(--circle-container-diameter)
    );
  }

  .theme-switch__checkbox:checked
    + .theme-switch__container
    .theme-switch__sun-moon-container {
    background-color: var(--moon-bg);
  }

  .theme-switch__checkbox:checked
    + .theme-switch__container
    .theme-switch__moon {
    transform: translate(0);
  }
`;

export default Switch;
