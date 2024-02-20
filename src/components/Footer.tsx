import InstagramIcon from "./icons/Instagram";
import FacebookIcon from "./icons/Facebook";
import WhatsappIcon from "./icons/Whatsapp";

interface SvgProps extends React.SVGProps<SVGSVGElement> {}

export default function Footer() {
  return (
    <footer className="text-black bg-[#333333] dark:bg-[#333333] dark:text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a
            className="hover:text-[#4CAF50]"
            href="https://www.facebook.com/iabot.robotica/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            className="hover:text-[#4CAF50]"
            href="https://www.instagram.com/iabot.robotica/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
          <a
            className="hover:text-[#4CAF50]"
            href="https://api.whatsapp.com/send?phone=5492324468366&text=Hola,%20%C2%BFc%C3%B3mo%20est%C3%A1s?%20%F0%9F%98%8A%20Estamos%20interesados%20en%20inscribir%20a%20nuestros%20hijos%20en%20los%20talleres%20de%20rob%C3%B3tica.%20%C2%BFPodr%C3%ADas%20proporcionarnos%20informaci%C3%B3n%20sobre%20los%20cupos%20disponibles?%20%C2%A1Agradecemos%20su%20ayuda!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappIcon />
          </a>
        </div>
        <a
          className="hover:text-[#4CAF50]"
          href="https://www.google.com.ar/maps/place/C.+21+336,+Mercedes,+Provincia+de+Buenos+Aires/@-34.6550336,-59.4293762,586m/data=!3m2!1e3!4b1!4m6!3m5!1s0x95bc730b045eab23:0xda1891be9a9ab566!8m2!3d-34.6550336!4d-59.4293762!16s%2Fg%2F11h7s0b1vd?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Estamos en C 21 N 336, Mercedes, Provincia de Buenos Aires
        </a>
      </div>
    </footer>
  );
}
