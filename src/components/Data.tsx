import CalendarIcon from "./icons/Calendar";
import UsersIcon from "./icons/Users";

export default function Data() {
  return (
    <div className="bg-white">
      <section className="py-6 ">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
              <div className="flex items-center space-x-2 mb-2">
                <UsersIcon aria-label="Número de alumnos" className="h-8 w-8 text-primary" />
                <h3 className="text-4xl font-bold text-secondary">+300</h3>
              </div>
              <p className="text-lg">
                Alumnos pasaron por nuestros talleres desde nuestros comienzos
              </p>
            </div>

            <div className="flex flex-col items-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
              <div className="flex items-center space-x-2 mb-2">
                <CalendarIcon aria-label="Año de inicio" className="h-8 w-8 text-primary" />
                <h3 className="text-4xl font-bold text-secondary">2021</h3>
              </div>
              <p className="text-lg">
                Año en el que dimos inicio a nuestra academia educativa
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
