import Cursos from "@/components/Cursos";

export default function Component() {
  return (
    <div className="bg-white text-black">
      <header className="text-center py-20 bg-[#d9e778]">
        <h2 className="text-4xl font-bold mb-4">NUESTROS CURSOS</h2>
        <p className="text-xl font-semibold">
          Explora nuestros cursos y encuentra el que más te interesa
        </p>
      </header>
      <main>
        <section className="py-16">
        <div className="container mx-auto px-6">
          <Cursos />
        </div>
        </section>
      </main>
    </div>
  );
}
