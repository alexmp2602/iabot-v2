import InstagramIcon from "./icons/Instagram";
import FacebookIcon from "./icons/Facebook";
import WhatsappIcon from "./icons/Whatsapp";

interface SvgProps extends React.SVGProps<SVGSVGElement> {}

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://www.facebook.com/iabot.robotica/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.instagram.com/iabot.robotica/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
          <a
          href="https://api.whatsapp.com/send?phone=5492324468366&text=Hola,%20%C2%BFc%C3%B3mo%20est%C3%A1s?%20%F0%9F%98%8A%20Estamos%20interesados%20en%20inscribir%20a%20nuestros%20hijos%20en%20los%20talleres%20de%20rob%C3%B3tica.%20%C2%BFPodr%C3%ADas%20proporcionarnos%20informaci%C3%B3n%20sobre%20los%20cupos%20disponibles?%20%C2%A1Agradecemos%20su%20ayuda!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappIcon />
          </a>
        </div>
        <p>Estamos en C 21 N 336, Mercedes, Provincia de Buenos Aires</p>
      </div>
    </footer>
  );
}
