import React from "react";

import { Button } from "primereact/button";

const NavigationBar: React.FC = () => {
  const navItems = [
    { name: "HOME", href: "#" },
    { name: "AJUDA", href: "#" },
    { name: "SUPORTE", href: "#" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-10 p-6 flex justify-between items-center text-white">
      <nav className="flex space-x-8 text-sm font-semibold tracking-wider">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="hover:text-gray-300 transition-colors"
          >
            {item.name}
          </a>
        ))}
      </nav>
      <div className="flex -space-x-3">
        <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center font-bold text-sm z-10">
          J
        </div>

        <div
          className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center font-bold text-sm z-0">
          J
        </div>
      </div>
    </header>
  );
};

const BarberShopHomePage: React.FC = () => {

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <NavigationBar />
      <main className="relative z-0 min-h-screen flex flex-col justify-center items-center">

        <div className="absolute inset-0 flex items-center justify-center opacity-60">
          
            <img
                src="/images/barber-tools.png"
                alt="Ferramentas de barbearia"
                className="w-full h-full object-cover"
            />
           

          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <h1 className="relative text-7xl md:text-9xl font-extrabold text-white tracking-widest z-10">
          BARBER <span className="font-light">SHOP</span>
        </h1>

        <div className="absolute bottom-10 right-10 z-10">
          <button className="bg-transparent border border-white text-white px-8 py-3 text-sm font-semibold hover:bg-white hover:text-black transition-colors">
            Login
          </button>
        </div>
      </main>
    </div>
  );
};

export default BarberShopHomePage;
