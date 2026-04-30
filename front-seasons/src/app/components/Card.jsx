'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { DataForm } from "../utils/DateFormat";
import moment from "moment";

export default function Card({
  filtro,
  colunas,
  titulo,
}){
  


  return(
      <div className="block shadow-sm border-b-4 bg-white border-blue-400 outline-2 outline-white backdrop-blur-sm rounded-sm w-85 h-85">
          <div className="">
            <table className="">
                <thead className="flex flex-col w-full border-b-2 border-gray-300">
                  <tr>
                    <th>
                      <img src='https://s2-g1.glbimg.com/wRIQSSEfycfLgTKuZwo8-6gF18c=/0x0:1024x512/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/T/6/jGzWY8SSSld0s5JVITig/aniversario-chapeco.png'
                        className="rounded-t-sm"
                        >
                      </img>
                    </th>
                  </tr>
                </thead>
                <tbody className="flex text-black ml-2">
                  <tr className="mt-1">
                    <th className="text-texto font-bold text-lg">{titulo}</th>
                  </tr>
                  {filtro.map(() => {
                    
                  })}
                </tbody>
                <tfoot className="border-t-2 border-gray-300">
                    {filtro.map((dado, index) => {
                      if (dado.ida || dado.volta) {
                        return (
                          <tr key={index} className="ml-2">
                            <td>
                              <h1 className="text-texto text-sm">Data de referencia</h1>
                              <span className="text-black mt-1 text-xs">
                                {moment(dado.ida).format('DD-MM-YYYY [às] hh:mm')} até {moment(dado.volta).format('DD-MM-YYYY [às] hh:mm')}
                              </span>
                            </td>
                          </tr>
                          )
                        } 
                    })}
                </tfoot>
            </table>
        </div>
      </div>
  );
}