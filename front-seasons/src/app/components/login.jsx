'use client'
import { routerServerGlobal } from "next/dist/server/lib/router-utils/router-server-context";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import { useState } from "react";

export default function Login({children, titulo, titulo2, titulo3, botao}){
    const router = useRouter('')


    return(
        <div className="mt-10 justify-center items-center flex">
            <div className="p-6 w-120 h-2/4 shadow-gray-700 shadow-xl">
                <div className="mt-2 mb-6">
                    <h1 className=" text-texto-forte underline text-3xl">{titulo}</h1>
                </div>
                <form>
                <div className="text-black">
                    {children}
                </div>
                <div className="flex justify-between mt-4">
                    <button type="reset" className="bg-gray-700 px-4 py-1 rounded-lg transition-transform active:scale-120 border-2 border-b-white shadow-xl">
                        Limpar
                    </button>
                    <button type="submit" onClick={() => {router.push("/menu")}} className="bg-botao-generico px-4 py-1 rounded-lg transition-transform active:scale-120 border-2 border-b-white shadow-xl">
                        {botao}
                    </button>
                </div>
                </form>
                <div className="mt-5 justify-center flex">
                <a className="text-texto-forte">{titulo2}</a>
                {titulo === 'Acesse sua conta' &&(
                    <a href="/cadastroCpf" className="text-blue-500 underline ml-1 hover:text-blue-400">{titulo3}</a>
                )}
                {titulo === 'Cadastre sua conta' &&(
                    <a href="/login" className="text-blue-500 underline ml-1 hover:text-blue-400">{titulo3}</a>
                )}
                </div>
            </div>
        </div> 
    );
}