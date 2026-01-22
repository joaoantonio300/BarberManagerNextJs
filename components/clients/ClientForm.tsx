"use client";

import React, { useState, useEffect } from "react";
import { User, Mail, Phone, Save, Hash } from "lucide-react";

export type ClientData = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

type Props = {
  initialData?: ClientData | null;
};

export default function ClientForm({ initialData }: Props) {
  const [formData, setFormData] = useState<ClientData>({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        id: initialData.id,
        name: initialData.name,
        email: initialData.email,
        phone: initialData.phone,
      });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-zinc-900/50 rounded-xl border border-zinc-800 overflow-hidden">
      <div className="p-6 border-b border-zinc-800">
        <h2 className="text-zinc-100 font-bold text-lg flex items-center gap-2">
          <User className="text-[#AA612C]" size={20} />
          {initialData ? "Editar Cliente" : "Novo Cliente"}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="p-6 md:p-8 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-zinc-300 font-medium">
            <User size={18} className="text-[#AA612C]" />
            <span>Nome Completo</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ex: João da Silva"
            className="w-full bg-zinc-950 border border-zinc-800 text-zinc-100 text-sm rounded-lg focus:ring-1 focus:ring-[#AA612C] focus:border-[#AA612C] block p-3 outline-none transition-all placeholder:text-zinc-600"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 text-zinc-300 font-medium">
              <Mail size={18} className="text-[#AA612C]" />
              <span>Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="cliente@email.com"
              className="w-full bg-zinc-950 border border-zinc-800 text-zinc-100 text-sm rounded-lg focus:ring-1 focus:ring-[#AA612C] focus:border-[#AA612C] block p-3 outline-none transition-all placeholder:text-zinc-600"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 text-zinc-300 font-medium">
              <Phone size={18} className="text-[#AA612C]" />
              <span>Telefone / Celular</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
              className="w-full bg-zinc-950 border border-zinc-800 text-zinc-100 text-sm rounded-lg focus:ring-1 focus:ring-[#AA612C] focus:border-[#AA612C] block p-3 outline-none transition-all placeholder:text-zinc-600"
              required
            />
          </div>
        </div>

        <div className="flex justify-end mt-4 pt-4 border-t border-zinc-800">
          <button
            type="submit"
            className="flex items-center gap-2 bg-[#36261A] text-[#AA612C] hover:bg-[#AA612C] hover:text-[#36261A] transition-colors px-6 py-3 rounded-lg font-bold border border-[#AA612C]/30"
          >
            <Save size={20} />
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}
