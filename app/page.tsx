import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="relative min-h-screen w-full bg-[#1c1c1c] text-white overflow-hidden flex flex-col justify-between font-poppins"
      style={{
        backgroundImage: "url('/images/barber-tools.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <header className="w-full px-10 py-8 flex justify-between items-start z-20">
        <nav className="flex gap-8 text-[11px] tracking-widest text-gray-400 text-sm font-thin">
          <Link href="/" className="hover:text-white transition-colors">
            HOME
          </Link>
          <Link href="/ajuda" className="hover:text-white transition-colors">
            AJUDA
          </Link>
          <Link href="/suporte" className="hover:text-white transition-colors">
            SUPORTE
          </Link>
        </nav>

        <div className="hidden sm:block relative w-21 h-12">
          <div className="absolute w-12! h-12! left-0 rounded-full bg-linear-to-b from-[#555555] via-[#4A4A4A] to-[#444444] z-10">
            <span className="absolute font-bold text-xl text-white/90 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              J
            </span>
          </div>
          <div
            className="absolute w-12! h-12! left-9 rounded-full bg-linear-to-b from-[#888888] to-[#c9c9c9]
 z-10"
          >
            <span className="absolute text-[#1c1c1c] font-bold text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              J
            </span>
          </div>
        </div>
      </header>

      <section className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full max-w-4xl aspect-video flex items-center justify-center">
          <div className="relative z-10 flex items-center justify-center gap-3">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase drop-shadow-xl">
              Barber
            </h1>
            <span className="text-6xl md:text-8xl font-thin tracking-widest text-white uppercase opacity-90">
              Shop
            </span>
          </div>
        </div>
      </section>

      <div className="w-full px-10 py-10 flex justify-end z-20">
        <Link
          href="/views/login"
          className="border border-gray-500/50 rounded-md px-10 py-2 text-sm text-gray-300 hover:text-white hover:border-white transition-all uppercase tracking-wider bg-transparent"
        >
          Login
        </Link>
      </div>
    </main>
  );
}
