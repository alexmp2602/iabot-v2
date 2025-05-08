import InstagramIcon from './icons/Instagram';
import FacebookIcon from './icons/Facebook';
import WhatsappIcon from './icons/Whatsapp';
import LinkedInIcon from './icons/LinkedIn';

const socialLinks = [
  {
    href: 'https://www.facebook.com/iabot.robotica/',
    Icon: FacebookIcon,
    label: 'Facebook',
  },
  {
    href: 'https://www.instagram.com/iabot.robotica/',
    Icon: InstagramIcon,
    label: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/company/iabot-robotica/',
    Icon: LinkedInIcon,
    label: 'LinkedIn',
  },
  {
    href: 'https://api.whatsapp.com/send?phone=5492324468366&text=Hola,%20quiero%20consultar%20sobre%20los%20talleres%20de%20robótica%20para%20nuestros%20hijos.%20¿Podrías%20informarnos%20sobre%20los%20cupos%20disponibles?%20¡Gracias!',
    Icon: WhatsappIcon,
    label: 'WhatsApp',
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark-gray dark:bg-dark-gray py-6 text-black dark:text-white">
      <div className="container mx-auto px-4 text-center">
        {/* Sección de Redes Sociales */}
        <div className="mb-4 flex justify-center space-x-6">
          {socialLinks.map(({ href, Icon, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-white transition-colors duration-300 hover:text-primary dark:hover:text-dark-primary"
            >
              <Icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>

        {/* Dirección */}
        <a
          href="https://maps.app.goo.gl/xBv4jHXZpVAT2HH96"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Dirección de Iabot"
          className="text-white transition-colors duration-300 hover:text-primary dark:hover:text-dark-primary"
        >
          SEDE CENTRAL: C. 9 Nº 374, Mercedes, Provincia de Buenos Aires.
        </a>
      </div>
    </footer>
  );
}
