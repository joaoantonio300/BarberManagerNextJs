import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  async function handleLogin(formData: FormData) {
    "use server";
    console.log("Login attempt...");
  }

  return (
    <main
      className="relative min-h-screen w-full bg-[#121212] flex items-center justify-center font-sans overflow-hidden
    "
      style={{
        backgroundImage: "url('/images/login.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
        <div className="flex-shrink-0">
          <h1 className="text-5xl md:text-7xl uppercase flex items-center gap-2 text-white">
            <span className="font-black tracking-tighter">Barber</span>
            <span className="font-light tracking-widest opacity-90">Shop</span>
          </h1>
        </div>
        <form
          action={handleLogin}
          className="w-full max-w-lg flex flex-col gap-4"
        >
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="relative w-full group">
              <input
                type="email"
                name="email"
                placeholder="EMAIL |"
                className="w-full bg-transparent border border-gray-400/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors text-sm tracking-wide uppercase"
                required
              />
            </div>

            <div className="relative w-full group">
              <input
                type="password"
                name="password"
                placeholder="SENHA |"
                className="w-full bg-transparent border border-gray-400/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors text-sm tracking-wide uppercase"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full border border-gray-400/50 hover:bg-white hover:text-black! hover:border-white text-white font-bold uppercase tracking-widest text-sm rounded-xl py-3 transition-all duration-300"
          >
            Entrar
          </button>
          <div className="text-center mt-2">
            <Link
              href="/"
              className="text-gray-500 text-xs hover:text-white transition-colors uppercase tracking-widest"
            >
              Voltar
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
