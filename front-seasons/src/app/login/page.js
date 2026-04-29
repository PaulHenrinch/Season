'use client'
import { useEffect, useState } from "react";
// import { useMemo } from "react";
// import api from "@/utils/axios";
// import { toast } from "react-toastify";
import Login from "@/app/components/login.jsx"

export default function loginCliente(){
    const[logCad, setLogCad] = useState(true);
  return(
    <div className="fixed inset-0 z-50 flex justify-center items-center">
        <div className="">
        
        </div>
        <Login
            titulo={logCad ? 'Acesse sua conta' : 'Cadastre sua conta'}
            titulo2={logCad ? 'Ainda não possui uma conta?' : ''}
            titulo3={logCad ? 'clique aqui' : ''}
            botao={logCad ? 'Entrar' : ''}>
            <h1 className="mt-2 mb-2 text-texto-forte">Digite o email</h1>
            <input type="email" placeholder="Email" className="bg-emerald-200 p-3 w-full max-w-md h-10 rounded-2xl border-1 border-texto shadow-xl hover:bg-texto focus:outline-none" required>
            </input>
            <h1 className="mt-3 mb-2 text-texto-forte">Digite a senha</h1>
            <input type="password" placeholder="Senha" className="bg-emerald-200 p-3 w-full max-w-md h-10 rounded-2xl border-1 border-texto shadow-xl hover:bg-texto focus:outline-none" required>
            </input>
        </Login>
    </div>

  );
}