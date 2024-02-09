import { Button } from "@/components/ui/button";

export default function Inscription() {
  return (
    <section className="bg-gray-50 text-black py-4">
      <div className="container mx-auto px-4 text-center">
        <h4 className="text-2xl font-bold mb-12">
          ¡Descubre los cupos disponibles y regístrate en nuestro formulario de
          inscripción! ¡No te pierdas esta gran oportunidad!
        </h4>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdOqv7K6jisyiLCJLVaXudGCL6BHCZAoo2DCNjW-XlSP99MwQ/viewform" target="_blank" rel="noopener noreferrer">
        <Button className="bg-verde-iabot dark:bg-verde-iabot">INSCRIBETE</Button>
        </a>
      </div>
    </section>
  );
}
