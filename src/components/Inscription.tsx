import { Button } from "@/components/ui/button";

export default function Inscription() {
  return (
    <section className="bg-green-600 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h4 className="text-2xl font-bold mb-4">
          ¡Descubre los cupos disponibles y regístrate en nuestro formulario de
          inscripción! ¡No te pierdas esta gran oportunidad!
        </h4>
        <a href="/Inscripcion">
        <Button className="bg-white text-green-600">INSCRIBETE</Button>
        </a>
      </div>
    </section>
  );
}
