'use client'
import React from 'react'
import { useState } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";

type Props = {}

const page = (props: Props) => {

    const[tasks, setTasks] = useState([{ '_id': '1', 'name': 'Authentication', 'status': 'A faire' }]);

    const statuses = ['A faire', 'En cours', 'Terminé'];

  return (
    <div className=''>
        <h1>Drop pahorra</h1>
        <div className='flex justify-center mt-4'>
            <div className='flex gap-3'>
                <div className='p-3 border border-1-white rounded-3xl max-w-3xl'>
                    <h1>
                        A fazer
                    </h1>
                    <div className='p-3 mb-3 bg-blue-700! text-white! rounded-3xl!'>
                        Autenticado
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page