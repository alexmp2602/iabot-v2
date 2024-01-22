import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#f8f8f8] p-4 text-center">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image
            alt="IA Bot Logo"
            className="h-10"
            height="40"
            src="/placeholder.svg"
            style={{
              aspectRatio: "100/40",
              objectFit: "cover",
            }}
            width="100"
          />
          <h1 className="text-black text-xl font-bold">IA BOT</h1>
        </div>
        <div className="flex space-x-4">
          <Link className="text-green-600 hover:text-green-700" href="/">
            INICIO
          </Link>
          <Link className="text-green-600 hover:text-green-700" href="/About">
            ACERCA DE
          </Link>
          <Link className="text-green-600 hover:text-green-700" href="#">
            CURSOS
          </Link>
          <Link className="text-green-600 hover:text-green-700" href="#">
            CAPACITACIONES
          </Link>
          <Link className="text-green-600 hover:text-green-700" href="#">
            INSCRIPCIÓN
          </Link>
          <Link className="text-green-600 hover:text-green-700" href="#">
            CONTACTO
          </Link>
        </div>
      </div>
    </nav>
  );
}
