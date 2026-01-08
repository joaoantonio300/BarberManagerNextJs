"use client";
import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { Clock, Scissors, Edit } from "lucide-react";
import Link from "next/link";

type Appointment = {
  id: string;
  professional: string;
  nome: string;
  horario: string;
  servico: string;
};

type Props = {
  initialData: Appointment[];
};

const DropListCompontenT = ({ initialData }: Props) => {
  const [columns, setColumns] = useState<Record<string, Appointment[]>>(() => {
    return initialData.reduce((acc, appointment) => {
      const { professional } = appointment;
      if (!acc[professional]) acc[professional] = [];
      acc[professional].push(appointment);
      return acc;
    }, {} as Record<string, Appointment[]>);
  });

  const handleApiUpdate = (
    appointmentId: string,
    newProfessional: string,
    newIndex: number
  ) => {
    console.log("🔄 CHAMANDO API...", {
      url: `/api/appointments/${appointmentId}`,
      method: "PATCH",
      payload: {
        professional: newProfessional,
        newOrderIndex: newIndex,
      },
    });

    console.log(
      `✅ Sucesso Visual: Agendamento ${appointmentId} movido para ${newProfessional}`
    );
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const sourceColId = source.droppableId;
    const destColId = destination.droppableId;

    const sourceList = [...columns[sourceColId]];
    const destList =
      sourceColId === destColId ? sourceList : [...columns[destColId]];

    const [movedItem] = sourceList.splice(source.index, 1);

    if (sourceColId !== destColId) {
      movedItem.professional = destColId;
    }

    destList.splice(destination.index, 0, movedItem);

    setColumns({
      ...columns,
      [sourceColId]: sourceList,
      [destColId]: destList,
    });

    handleApiUpdate(movedItem.id, destColId, destination.index);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-6 overflow-x-auto pb-4 items-start">
        {Object.keys(columns).map((professionalId) => (
          <div
            key={professionalId}
            className="min-w-[320px] flex-1 flex flex-col bg-[#121212] rounded-xl p-4 "
          >
            <div className="flex justify-between items-center mb-4 border-b border-zinc-800 pb-3">
              <h3 className="font-bold text-lg text-zinc-200">
                {professionalId}
              </h3>
              <span className="bg-zinc-800 text-zinc-400 text-xs px-2 py-1 rounded-full font-mono">
                {columns[professionalId].length}
              </span>
            </div>

            <Droppable droppableId={professionalId}>
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={`flex flex-col gap-3 min-h-[150px] transition-colors rounded-lg ${
                    snapshot.isDraggingOver ? "bg-zinc-800/30" : ""
                  }`}
                >
                  {columns[professionalId].map((appt, index) => (
                    <Draggable
                      key={appt.id}
                      draggableId={appt.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{ ...provided.draggableProps.style }}
                          className={`
                                    group relative p-4 rounded-xl border transition-allshadow-sm
                                    ${
                                      snapshot.isDragging
                                        ? "bg-zinc-800 border-[#d4a873] shadow-xl rotate-2 scale-105 z-50"
                                        : "bg-zinc-900 border-zinc-800 hover:border-zinc-700 hover:shadow-md"
                                    }
                                  `}
                        >
                          <div
                            className={`absolute left-0 top-3 bottom-3 w-1 rounded-r-full transition-opacity ${
                              snapshot.isDragging
                                ? "bg-[#d4a873] opacity-100"
                                : "bg-[#d4a873] opacity-40 group-hover:opacity-100"
                            }`}
                          ></div>

                          <div className="pl-2">
                            <div className="flex justify-between items-start mb-2">
                              <span className="font-bold text-zinc-100 text-base truncate pr-2">
                                {appt.nome}
                              </span>
                              <div className="flex items-center gap-1 text-xs font-mono text-[#d4a873] bg-[#d4a873]/10 px-2 py-1 rounded">
                                <Clock size={12} />
                                {appt.horario}
                              </div>
                            </div>

                            <div className="flex justify-between items-center gap-2 text-sm text-zinc-400">
                              <div>
                                <Scissors size={14} className="text-zinc-500" />
                                {appt.servico}
                              </div>
                              <Link href={`agenda/${appt.id}/edit`}>
                              <Edit size={20} />
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
};

export default DropListCompontenT;
