'use client'
import clsx from 'clsx'
import Link from 'next/link'
import React, { useState } from 'react'
import { HiHome } from 'react-icons/hi'
import { HiMiniShoppingBag, HiMiniShoppingCart, HiMiniUserGroup, HiRocketLaunch } from 'react-icons/hi2'
import { IoAddSharp } from 'react-icons/io5'

export const SideBar = () => {
    const [hover, setHover] = useState<string>('none');
    
    const handleMouseHover =()=>{
        setHover('flex')
    }

    const handleMouseOut = ()=> {
        setHover('hidden');
    }

    return (
    <form 
        onMouseOver={()=> handleMouseHover()} 
        onMouseOut={()=> handleMouseOut()} 
        className="w-[80px] hover:w-[300px] transition-all duration-300 flex flex-col gap-4 px-4 text-gray-700">
        <Link href='/' className="bg-white shadow-xl flex hover:flex items-center justify-center transition-all duration-300 h-12 rounded-lg gap-4 w-full font-semibold hover:bg-gray-200">
            <span><HiHome className="text-2xl font-bold"/></span>
            <span style={{ display: hover}} 
                className={clsx(`transition-all duration-300`)}>
                    Home
            </span>
        </Link>
        <Link href='#' className="bg-white shadow-xl flex hover:flex items-center justify-center transition-all duration-300 h-12 rounded-lg gap-4 w-full font-semibold hover:bg-gray-200">
            <span><HiMiniShoppingCart className="text-2xl font-bold"/></span>
            <span style={{ display: hover}} 
                className={clsx(`transition-all duration-300`)}>
                    Ventas
            </span>
        </Link>
        <Link href='#' className="bg-white shadow-xl flex hover:flex items-center justify-center transition-all duration-300 h-12 rounded-lg gap-4 w-full font-semibold hover:bg-gray-200">
            <span><HiMiniShoppingBag className="text-2xl font-bold"/></span>
            <span style={{ display: hover}} 
                className={clsx(`transition-all duration-300`)}>
                    Clientes
            </span>
        </Link>
        <Link href='#' className="bg-white shadow-xl flex hover:flex items-center justify-center transition-all duration-300 h-12 rounded-lg gap-4 w-full font-semibold hover:bg-gray-200">
            <span><IoAddSharp className="text-2xl font-bold"/></span>
            <span style={{ display: hover}} 
                className={clsx(`transition-all duration-300`)}>
                    Sucursales
            </span>
        </Link>
        <Link href='#' className="bg-white shadow-xl flex hover:flex items-center justify-center transition-all duration-300 h-12 rounded-lg gap-4 w-full font-semibold hover:bg-gray-200">
            <span><HiRocketLaunch className="text-2xl font-bold"/></span>
            <span style={{ display: hover}} 
                className={clsx(`transition-all duration-300`)}>
                    Productos
            </span>
        </Link>
        <Link href='#' className="bg-white shadow-xl flex hover:flex items-center justify-center transition-all duration-300 h-12 rounded-lg gap-4 w-full font-semibold hover:bg-gray-200">
            <span><HiMiniUserGroup className="text-2xl font-bold"/></span>
            <span style={{ display: hover}} 
                className={clsx(`transition-all duration-300`)}>
                    Clientes
            </span>
        </Link>

    </form>
  )
}
