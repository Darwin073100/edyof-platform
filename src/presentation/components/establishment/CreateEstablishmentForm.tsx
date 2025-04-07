'use client'
import React, { startTransition, useState, useTransition } from 'react'
import { TextInput } from '../ui/inputs'
import { Button } from '../ui/buttons'
import { HiMiniArrowLongRight } from 'react-icons/hi2'
import { createEstablishmentAction } from '@/adapters/http/actions/establishment/establishment.action'

export const CreateEstablishmentForm = () => {
    const [name, setName] = useState('');
    const [isPending, setIsPending] = useTransition();
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent)=>{
        e.preventDefault();
        setSuccess(false);

        startTransition(async ()=>{
            await createEstablishmentAction(name);
            setName('');
            setSuccess(true);
        });
    }
    return (
        <form onSubmit={ handleSubmit } className="bg-white p-8 rounded-xl shadow-md flex flex-col gap-4 max-w-[450px]">
            <h1 className="text-lg text-center">
                ¡Estas a un simple paso para tener todo listo,
                solo debes ingresar el nombre de tu establecimiento!
            </h1>
            <TextInput
                value={name}
                onChange={(e) => setName(e.target.value)}
                name='name'
                required
                type="text" 
                placeholder="Introduce el nombre" />
            <Button
                disabled={isPending}
                type='submit' 
                color="gray">
                {isPending ? 'Cargando...' : 'Crear Establecimiento'}
                <HiMiniArrowLongRight />
            </Button>
            {success && <p className="text-green-600">¡Establecimiento creado exitosamente!</p>}
        </form>
    )
}
