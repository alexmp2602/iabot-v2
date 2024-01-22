export default function About() {
  return (
    <div className="bg-white text-black">
      <header className="text-center py-20 bg-[#d9e778]">
        <h2 className="text-4xl font-bold mb-4">ACERCA DE</h2>
        <h1 className="text-6xl font-bold mb-4">IA BOT</h1>
        <p className="text-xl font-semibold">CONOCE MÁS SOBRE NUESTRA MISIÓN, VISIÓN Y VALORES</p>
      </header>
      <main>
        <section className="py-20">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-3xl font-bold text-center mb-12">Historia</h3>
              <p className="text-lg text-center mb-12">
                Fundada en 2022, IA Bot se dedica a brindar educación de calidad en robótica para todos.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-center mb-12">Misión</h3>
              <p className="text-lg text-center mb-12">
                Proporcionamos educación de calidad en robótica, accesible para todos.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-center mb-12">Visión</h3>
              <p className="text-lg text-center mb-12">
                Aspiramos a ser líderes en la educación en robótica, inspirando a las personas a aprender y crecer.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}