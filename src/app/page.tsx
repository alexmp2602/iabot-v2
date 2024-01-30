import Cursos from "@/components/Cursos";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link';

interface SvgProps extends React.SVGProps<SVGSVGElement> {}

export default async function Index() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({cookies: () => cookieStore});

  const {data: {user}} = await supabase.auth.getUser()

  if (!user){
    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Link href={'/Login'}>
          You are not logged in. Click here to go login.
        </Link>
      </main>
    )
  }


  return (
    <div className="bg-white text-black">
      <header className="text-center py-20 bg-[#d9e778]">
        <h2 className="text-4xl font-bold mb-4">BIENVENIDOS A</h2>
        <h1 className="text-6xl font-bold mb-4">IA BOT</h1>
        <p className="text-xl font-semibold">ROBÓTICA EDUCATIVA</p>
      </header>
      <main>
        <section className="pt-16">
          <div className="container mx-auto px-6">
            <p className="text-pretty text-center">
              En IABOT, nos sumergimos en el emocionante mundo de la Robótica
              Educativa con los innovadores kits de la reconocida marca LEGO,
              líder en la industria. Estos kits no solo permiten a los alumnos
              dar rienda suelta a su creatividad, sino también desarrollar
              habilidades fundamentales a medida que construyen y programan
              robots. Nuestra misión es cultivar destrezas clave para el futuro
              de los alumnos mediante clases educativas de alta calidad,
              aprovechando los recursos pedagógicos e innovadores de LEGO
              EDUCATION como nuestra herramienta principal.
            </p>
          </div>
        </section>

        <section className="py-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            Recursos Didácticos y Capacitaciones
          </h2>
          <Cursos />
        </section>
      </main>
    </div>
  );
}
