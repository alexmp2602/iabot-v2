import InstagramIcon from "./icons/Instagram";
import FacebookIcon from "./icons/Facebook";

interface SvgProps extends React.SVGProps<SVGSVGElement> {}

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
        <a href="https://www.facebook.com/iabot.robotica/" target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/iabot.robotica/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
          </a>
        </div>
        <p>Estamos en C 23 N 1306, Mercedes, Provincia de Buenos Aires</p>
      </div>
    </footer>
  );
}
