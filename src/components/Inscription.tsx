import { Button } from "@/components/ui/button";

export default function Inscription() {
  return (
    <section className="bg-green-600 dark:bg-green-600 text-white dark:text-white p-4">
      <div className="container mx-auto text-center rounded">
        <h3 className="text-2xl font-bold mb-8">
          ¡Descubre los cupos disponibles y regístrate en nuestro formulario de
          inscripción! ¡No te pierdas esta gran oportunidad!
        </h3>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdOqv7K6jisyiLCJLVaXudGCL6BHCZAoo2DCNjW-XlSP99MwQ/viewform" target="_blank" rel="noopener noreferrer">
        <Button className="bg-white dark:bg-white">INSCRIBETE</Button>
        </a>
      </div>
    </section>
  );
}
