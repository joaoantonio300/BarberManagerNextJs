"use client";

import { PrimeReactProvider } from "primereact/api";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrimeReactProvider value={{ ripple: true }}>
      {children}
    </PrimeReactProvider>
  );
}

// Estou sepaarando aqui o componente que será responsavel por envolver a aplicacao com o PrimeReactProvider para ativar o efeito ripple globalmente.