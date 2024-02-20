import { Button } from "@/components/ui/button";

export default function Inscription() {
  return (
    <section className="p-4 pb-0 bg-white dark:bg-white text-black dark:text-black">
      <div className="container mx-auto text-center rounded">
        <h3 className="text-2xl font-bold mb-8">
          ¡Descubre los cupos disponibles y regístrate en nuestro formulario de
          inscripción! ¡No te pierdas esta gran oportunidad!
        </h3>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdOqv7K6jisyiLCJLVaXudGCL6BHCZAoo2DCNjW-XlSP99MwQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-[#FF9800] dark:bg-[#FF9800] hover:bg-[#FB8C00] dark:hover:bg-[#FB8C00] text-white dark:text-white font-bold text-lg transition-transform duration-500 ease-in-out transform hover:scale-105">
            INSCRIBETE
          </Button>
        </a>
      </div>
    </section>
  );
}
