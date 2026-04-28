'use client'
import { useEffect, useState } from "react";

export default function Card({children}){

  return(
      <div className="block shadow-gray-700 shadow-lg border border-bg-white backdrop-blur-sm rounded-sm p-3 w-100 h-100">
        <div className="flex flex-col w-full h-20">
          <h1 className="text-black">euhfyzh</h1>
          <div className="row mt-5 border-t-2 border-black">
          </div>
        </div>
          <div className="">
            <table className="">
                <thead className="">

                </thead>
                <tbody className="flex h-60 text-black">
                  <tr>
                    {children}
                  </tr>
                </tbody>
            </table>
          <div className="w-full">
            <div className="row mt-5 border-t-2 border-black">
              <h1 className="text-black">sgkhr</h1>
            </div>
          </div>
        </div>
      </div>
  );
}