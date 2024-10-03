import InstagramIcon from "./icons/Instagram";
import FacebookIcon from "./icons/Facebook";
import WhatsappIcon from "./icons/Whatsapp";
import LinkedInIcon from "./icons/LinkedIn";

const socialLinks = [
  {
    href: "https://www.facebook.com/iabot.robotica/",
    Icon: FacebookIcon,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/iabot.robotica/",
    Icon: InstagramIcon,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/company/iabot-robotica/",
    Icon: LinkedInIcon,
    label: "LinkedIn",
  },
  {
    href: "https://api.whatsapp.com/send?phone=5492324468366&text=Hola,%20quiero%20consultar%20sobre%20los%20talleres%20de%20robótica%20para%20nuestros%20hijos.%20¿Podrías%20informarnos%20sobre%20los%20cupos%20disponibles?%20¡Gracias!",
    Icon: WhatsappIcon,
    label: "WhatsApp",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#333333] py-6 text-white">
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
              className="transition-colors duration-300 hover:text-[#78eb2c]"
            >
              <Icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>

        {/* Dirección */}
        <a
          href="https://www.google.com.ar/maps/place/C.+9+374,+Mercedes,+Provincia+de+Buenos+Aires/@-34.6555113,-59.4235156,19z/data=!3m1!4b1!4m6!3m5!1s0x95bc73a126fdd949:0xfd5456eb2b3bd4f7!8m2!3d-34.6555124!4d-59.4228719!16s%2Fg%2F11gbl3jz4b?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Dirección de Iabot"
          className="text-white transition-colors duration-300 hover:text-[#78eb2c]"
        >
          Estamos en C. 9 N 374, Mercedes, Provincia de Buenos Aires
        </a>
      </div>
    </footer>
  );
}
