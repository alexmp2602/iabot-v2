"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Component() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const supabase = createClientComponentClient();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: "$(location.origin)/auth/callback" },
    });
    router.refresh();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="Website Logo"
          className="mx-auto h-12 w-auto"
          height="48"
          src="/assets/img/logo.png"
          style={{
            aspectRatio: "48/48",
            objectFit: "cover",
          }}
          width="48"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Crear una cuenta
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          O {""}
          <a
            className="font-medium text-green-600 hover:text-green-500"
            href="/SignIn"
          >
            iniciar sesión
          </a>
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form action="#" className="space-y-6" method="POST">
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Correo electrónico
              </label>
              <div className="mt-1">
                <Input
                  autoComplete="email"
                  className="dark:bg-slate-50 dark:text-black appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  id="email"
                  name="email"
                  placeholder="Tu correo electrónico"
                  required
                  type="email"
                />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="password"
              >
                Contraseña
              </label>
              <div className="mt-1">
                <Input
                  autoComplete="new-password"
                  className="dark:bg-slate-50 dark:text-black appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  id="password"
                  name="password"
                  placeholder="Tu contraseña"
                  required
                  type="password"
                />
              </div>
            </div>
            <div>
              <Button
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                type="submit"
                onClick={handleSignUp}
              >
                Crear cuenta
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
