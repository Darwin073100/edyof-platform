'use client'
import React, { startTransition, useEffect, useRef, useState, useTransition } from 'react'
import { TextInput } from '../ui/inputs'
import { Button } from '../ui/buttons'
import { HiMiniArrowLongRight } from 'react-icons/hi2'
import { createEstablishmentAction } from '@/core/establishment/adapters/http/actions/establishment/establishment.action'
import { useEstablishmentStore } from '@/presentation/store/establishment.store'
import { useRouter } from 'next/navigation'
import { Spinner } from '../ui/spinners/Spinner'


export const CreateEstablishmentForm = () => {
    const { setEstablishment, establishment} = useEstablishmentStore();
    const [name, setName] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent)=>{
        setIsPending(true);
        e.preventDefault();
        setSuccess(false);

        startTransition(async ()=>{
            const resp = await createEstablishmentAction(name);
            console.log(resp);
            if(resp?.name){
                setSuccess(true);
                router.push('/')
                setIsPending(false);
            }
        });
    }

    useEffect(()=>{
        
    },[establishment]);

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
                color="blue">
                {isPending ? <Spinner/> : <>Siguiente<HiMiniArrowLongRight /></>}
            </Button>
        </form>
    )
}
