'use client'
import { useEffect, useState } from "react";
// import { useMemo } from "react";
// import api from "@/utils/axios";
// import { toast } from "react-toastify";
import Login from "@/app/components/login.jsx"

export default function cadastroCPF(){

  return(
    <div className="fixed inset-0 z-50 flex justify-center items-center">
        <div className="">
        
        </div>
        <Login>
            <h1 className="mt-3 mb-2 text-texto-forte">Nome completo</h1>
            <input type="text" id="nome" placeholder="Nome completo" className="bg-emerald-200 p-3 w-full max-w-md h-10 rounded-2xl border-1 border-texto shadow-xl hover:bg-texto focus:outline-none" required>
            </input>
            <h1 className="mt-3 mb-2 text-texto-forte">CPF</h1>
            <input type="text" id="cpf" placeholder="digite o CPF" className="bg-emerald-200 p-3 w-full max-w-md h-10 rounded-2xl border-1 border-texto shadow-xl hover:bg-texto focus:outline-none" required>
            </input>
            <h1 className="mt-2 mb-2 text-texto-forte">Digite o email</h1>
            <input type="email" placeholder="Email" className="bg-emerald-200 p-3 w-full max-w-md h-10 rounded-2xl border-1 border-texto shadow-xl hover:bg-texto focus:outline-none" required>
            </input>
            <h1 className="mt-3 mb-2 text-texto-forte">confirme o email</h1>
            <input type="email" placeholder="Confirmar email" className="bg-emerald-200 p-3 w-full max-w-md h-10 rounded-2xl border-1 border-texto shadow-xl hover:bg-texto focus:outline-none" required>
            </input>
            <h1 className="mt-3 mb-2 text-texto-forte">Digite a senha</h1>
            <input type="password" placeholder="Senha" className="bg-emerald-200 p-3 w-full max-w-md h-10 rounded-2xl border-1 border-texto shadow-xl hover:bg-texto focus:outline-none" required>
            </input>
            <h1 className="mt-3 mb-2 text-texto-forte">confirme a senha</h1>
            <input type="password" placeholder="Confirmar senha" className="bg-emerald-200 p-3 w-full max-w-md h-10 rounded-2xl border-1 border-texto shadow-xl hover:bg-texto focus:outline-none" required>
            </input>
        </Login>
    </div>

  );
}