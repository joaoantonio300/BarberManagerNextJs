"use client";

import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { Calendar, Clock, User, CheckCircle2, Briefcase, Save } from "lucide-react";

type Props = {
  people: { name: string; code: string }[];
  services: { name: string; code: string }[];
  professionals: { name: string; code: string }[];
};

export default function AppointmentForm({ people, services, professionals }: Props) {
  const [person, setPerson] = useState(null);
  const [service, setService] = useState(null);
  const [professional, setProfessional] = useState(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ person, service, professional });
  };

  return (
    <div className="bg-zinc-900/50 rounded-xl border border-zinc-800 overflow-hidden">
      <form onSubmit={handleSubmit} className="p-6 md:p-8 flex flex-col gap-6">
            
        <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-zinc-300 font-medium">
                <User size={18} className="text-[#AA612C]" />
                <span>Cliente</span>
              </label>
              <Dropdown
                value={person}
                onChange={(e) => setPerson(e.value)}
                options={people}
                optionLabel="name"
                placeholder="Selecione o cliente"
                filter
                showClear
                className="w-full"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-zinc-300 font-medium">
                  <Briefcase size={18} className="text-[#AA612C]" /> 
                  <span>Serviço</span>
                </label>
                <Dropdown
                  value={service}
                  onChange={(e) => setService(e.value)}
                  options={services}
                  optionLabel="name"
                  placeholder="Selecione o serviço"
                  className="w-full"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-zinc-300 font-medium">
                  <CheckCircle2 size={18} className="text-[#AA612C]" />
                  <span>Profissional</span>
                </label>
                <Dropdown
                  value={professional}
                  onChange={(e) => setProfessional(e.value)}
                  options={professionals}
                  optionLabel="name"
                  placeholder="Selecione o profissional"
                  className="w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-zinc-300 font-medium">
                  <Calendar size={18} className="text-[#AA612C]" />
                  <span>Data</span>
                </label>
                <input
                  type="date"
                  name="date"
                  className="w-full bg-zinc-950 border border-zinc-800 text-zinc-100 text-sm rounded-lg focus:ring-1 focus:ring-[#AA612C] focus:border-[#AA612C] block p-3 outline-none transition-all [color-scheme:dark]"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-zinc-300 font-medium">
                  <Clock size={18} className="text-[#AA612C]" />
                  <span>Horário</span>
                </label>
                <input
                  type="time"
                  name="time"
                  className="w-full bg-zinc-950 border border-zinc-800 text-zinc-100 text-sm rounded-lg focus:ring-1 focus:ring-[#AA612C] focus:border-[#AA612C] block p-3 outline-none transition-all [color-scheme:dark]"
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
                    Agendar Serviço
                </button>
            </div>
      </form>
    </div>
  );
}