"use client";

import React, { useState } from "react";
import { Dropdown, DropdownProps } from "primereact/dropdown";
import { Calendar, Clock, User, CheckCircle2, Briefcase, Save, Phone, Star, LucideIcon } from "lucide-react";

export type Client = {
  nome: string;
  phone: string;
  loyaltyPoints: number;
  lastVisit: string;
};

type Props = {
  clients: Client[];
  services: { name: string; code: string }[];
  professionals: { name: string; code: string }[];
};


const clientOptionTemplate = (option: Client) => (
  <div className="flex flex-col gap-1 py-1">
    <span className="font-medium text-zinc-800 dark:text-zinc-100">{option.nome}</span>
    <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
      <span className="flex items-center gap-1">
        <Phone size={12} /> {option.phone}
      </span>
      <span className="flex items-center gap-1 text-[#AA612C]">
        <Star size={12} fill="#AA612C" /> {option.loyaltyPoints} pts
      </span>
    </div>
  </div>
);

const selectedClientTemplate = (option: Client, props: DropdownProps) => {
  if (option) {
    return (
      <div className="flex items-center gap-2">
        <span>{option.nome}</span>
        <span className="text-xs text-[#AA612C] bg-[#AA612C]/10 px-1.5 py-0.5 rounded ml-auto md:ml-2">
          {option.loyaltyPoints} pts
        </span>
      </div>
    );
  }
  return <span className="text-zinc-500">{props.placeholder}</span>;
};

const FormField = ({ 
  label, 
  icon: Icon, 
  children 
}: { 
  label: string; 
  icon: LucideIcon; 
  children: React.ReactNode 
}) => (
  <div className="flex flex-col gap-2 w-full">
    <label className="flex items-center gap-2 text-zinc-300 font-medium text-sm">
      <Icon size={16} className="text-[#AA612C]" />
      <span>{label}</span>
    </label>
    {children}
  </div>
);

export default function AppointmentForm({ clients, services, professionals }: Props) {
  const [formData, setFormData] = useState({
    client: null as Client | null,
    service: null,
    professional: null,
    date: "",
    time: ""
  });

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do Agendamento:", formData);
  };

  const inputBaseClasses = "w-full bg-zinc-950 border border-zinc-800 text-zinc-100 text-sm rounded-lg focus:ring-1 focus:ring-[#AA612C] focus:border-[#AA612C] outline-none transition-all [color-scheme:dark]";

  return (
    <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl">
      <form onSubmit={handleSubmit} className="w-full p-6 md:p-8 flex flex-col gap-6">
        
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <FormField label="Cliente" icon={User}>
            <Dropdown
              value={formData.client}
              onChange={(e) => handleChange("client", e.value)}
              options={clients}
              optionLabel="nome"
              filter
              filterBy="nome,phone"
              itemTemplate={clientOptionTemplate}
              valueTemplate={selectedClientTemplate}
              placeholder="Selecione o cliente"
              showClear
              className="w-full"
              pt={{
                root: { className: inputBaseClasses + 'flex items-center justify-between p-3'},
                input: { className: 'w-full bg-transparent border-none outline-none p-0' },
                panel: { className: 'bg-zinc-900 border border-zinc-800 text-zinc-100' },
                item: { className: 'hover:bg-zinc-800 p-2 cursor-pointer transition-colors' },
                filterInput: { className: 'bg-zinc-950 border border-zinc-700 text-zinc-100 p-2 rounded mb-2 w-full' },
                header: { className: 'bg-zinc-900 p-2' }
              }}
            />
          </FormField>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <FormField label="Serviço" icon={Briefcase}>
            <Dropdown
              value={formData.service}
              onChange={(e) => handleChange("service", e.value)}
              options={services}
              optionLabel="name"
              placeholder="Selecione o serviço"
              className="w-full"
              pt={{
                root: { className: inputBaseClasses + ' flex items-center justify-between p-3' },
                input: { className: 'w-full bg-transparent border-none outline-none p-0' },
                panel: { className: 'bg-zinc-900 border border-zinc-800 text-zinc-100' },
                item: { className: 'hover:bg-zinc-800 p-2 cursor-pointer' }
              }}
            />
          </FormField>

          <FormField label="Profissional" icon={CheckCircle2}>
            <Dropdown
              value={formData.professional}
              onChange={(e) => handleChange("professional", e.value)}
              options={professionals}
              optionLabel="name"
              placeholder="Selecione o profissional"
              className="w-full"
              pt={{
                root: { className: inputBaseClasses + ' flex items-center justify-between p-3' },
                input: { className: 'w-full bg-transparent border-none outline-none p-0' },
                panel: { className: 'bg-zinc-900 border border-zinc-800 text-zinc-100' },
                item: { className: 'hover:bg-zinc-800 p-2 cursor-pointer' }
              }}
            />
          </FormField>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <FormField label="Data" icon={Calendar}>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={(e) => handleChange("date", e.target.value)}
              className={`${inputBaseClasses} p-3`}
              required
            />
          </FormField>

          <FormField label="Horário" icon={Clock}>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={(e) => handleChange("time", e.target.value)}
              className={`${inputBaseClasses} p-3`}
              required
            />
          </FormField>
        </div>

        <div className="flex justify-center mt-4 pt-6 ">
          <button
            type="submit"
            className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#36261A] text-[#ca8553] hover:bg-[#AA612C] hover:text-[#36261A] transition-all duration-300 px-8 py-3 rounded-lg font-bold border border-[#AA612C]/30 active:scale-95"
          >
            <Save size={20} />
            Agendar Serviço
          </button>
        </div>
      </form>
    </div>
  );
}