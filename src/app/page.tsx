import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Inscription from "@/components/Inscription";
import Data from "@/components/Data";
import Cursos from "@/components/Cursos";
import AIChatButton from "@/components/AIChatButton";

export default function Home() {
  return (
    <div>
      <header className="sticky top-0 z-10 bg-white shadow">
        <Navbar />
      </header>

      <div className="bg-white text-black">
        <header className="relative text-left py-12 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover transform scale-125 opacity-50"
          >
            <source src="assets/video-header.mp4" type="video/mp4" />
          </video>
          <div className="flex flex-col relative z-2 items-center">
            <h2 className="text-4xl font-bold">
              <span>BIENVENIDOS A</span>
            </h2>
            <div>
              <img
                src="assets/img/logo/PNG/iabot-PNG-06.png"
                alt="IABOT"
                style={{ width: '200px', height: 'auto' }}
              ></img>
            </div>
            <p className="text-xl font-semibold">
              <span>ROBÓTICA EDUCATIVA</span>
            </p>
          </div>
        </header>

        <main>
          <section className="pt-12">
            <div className="container mx-auto px-6">
              <p className="text-pretty text-center">
                En IABOT, exploramos el emocionante mundo de la Robótica
                Educativa con los innovadores kits de la reconocida marca LEGO,
                líder en la industria. Estos kits no solo desatan la creatividad
                de los alumnos, sino que también les permiten desarrollar
                habilidades esenciales al construir y programar robots.
              </p>
              <br />
              <p className="text-pretty text-center">
                Nuestra misión es cultivar destrezas clave para el futuro de los
                alumnos a través de clases educativas de alta calidad.
                Utilizamos los recursos pedagógicos e innovadores de LEGO
                EDUCATION como nuestra herramienta principal. ¡Descubre con
                nosotros el fascinante universo de la Robótica Educativa!
              </p>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-4xl font-bold text-center mb-12">
              Recursos Didácticos y Capacitaciones
            </h2>
            <Cursos />
          </section>
        </main>

        <Inscription />
        <Data />
        <Footer />

      </div>
    </div>
  );
}
