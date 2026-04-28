'use client'
import { useState } from "react";
import Image from "next/image";
import { GoArrowSwitch } from "react-icons/go";
import { HiUserCircle } from "react-icons/hi";

export default function Layout({children}){
  const [escolha, setEscolha] = useState('ida e volta');

    return(
      
        <div className="block">
        <nav className="shadow-xs shadow-black fixed bg-nav-bar backdrop-blur-sm z-20 top-0 start-0 w-full h-30">
            <div className="flex justify-between">

                <div className="col flex justify-start mt-3">
                    <Image src="/seasons_logo.svg" 
                      className="absolute z-50"
                      width={390}
                      height={210}
                      alt="Logo seasons"
                    />
                </div>

                <div className="col flex justify-center mt-10 mr-70">
                    <div className="flex items-center">
                      <button className="bg-botao-generico px-4 py-1 rounded-lg transition-transform active:scale-120 border-2 border-b-white shadow-xl">
                        <select value={escolha} onChange={e => setEscolha(e.target.value)}>
                          <option value={"ida e volta"}>ida e volta</option>
                          <option value={"ida"}>ida</option>
                        </select>
                      </button>
                    </div>
                    <div className="ml-5 flex items-center">
                      <input type="text" placeholder="origem" className="bg-texto p-1 rounded-2xl border-2 border-white shadow-xl hover:bg-texto focus:outline-none">
                      </input>
                      <button className="">
                        <GoArrowSwitch 
                        className="h-8 w-8"/>
                      </button>
                      <input type="text" placeholder="destino" className="bg-texto p-1 rounded-2xl border-2 border-white shadow-xl hover:bg-texto focus:outline-none">
                      </input>
                    </div>
                    <div className="ml-5 flex items-center">
                      <input type="date" id="datepicker-format" className="bg-texto p-1 rounded-s-2xl border-2 border-white shadow-xl hover:bg-texto focus:outline-none">
                      </input>
                      <input type="date" id="datepicker-format" className="bg-texto p-1 rounded-e-2xl border-2 border-white shadow-xl hover:bg-texto focus:outline-none">
                      </input>
                    </div>
                    <div className="ml-5 flex items-center">
                      <button className="bg-botao-generico px-4 py-1 rounded-lg transition-transform active:scale-120 border-2 border-b-white shadow-xl">
                        buscar
                      </button>
                    </div>
                    <div className="ml-5 flex items-center">
                      <button className="transition-transform active:scale-120">
                        <HiUserCircle className="h-10 w-10"/>
                      </button>
                    </div>
                </div>       
            </div>
        </nav>

        <div className="">
          <footer className="bg-botao-generico fixed bottom-0 start-0 w-full h-15 border border-default-medium border-bg-white backdrop-blur-sm z-20 flex items-center justify-center">
            <p className="text-gray-300">© 2024 - Todos os direitos reservados</p>
          </footer>
        </div>

        <main>
          {children}
        </main>
        </div>
    );
}