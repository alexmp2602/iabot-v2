import Cursos from "@/components/Cursos";

export default function Component() {
  return (
    <div className="bg-white text-black">
      <header className="text-center py-20 px-4 bg-green-600 dark:bg-green-600 text-white dark:text-white">
        <h2 className="text-4xl font-bold mb-4">NUESTROS CURSOS</h2>
        <p className="text-xl font-semibold">
          Explora nuestros cursos y encuentra el que más te interesa
        </p>
      </header>
      <main>
        <section className="py-12">
          <Cursos />
        </section>
      </main>
    </div>
  );
}
