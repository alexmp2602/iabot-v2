import CalendarIcon from "./icons/Calendar";
import UsersIcon from "./icons/Users";

export default function Data() {
  return (
    <div className="bg-white text-black">
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2 mb-2">
                <UsersIcon />
                <h5 className="text-2xl font-bold">+200</h5>
              </div>
              <p className="text-lg">
                Alumnos pasaron por nuestros talleres desde nuestros comienzos
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2 mb-2">
                <CalendarIcon />
                <h5 className="text-2xl font-bold">2021</h5>
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
