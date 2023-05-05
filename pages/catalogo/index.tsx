"use client";

import React,{useEffect} from "react";
import { Footer, Navigator } from "@/components";
import { Routes } from "@/models";

import Referencia from '../../public/images/printer.png'

import 'aos/dist/aos.css';
import AOS from "aos";
import Image from "next/image";



function Contacto() {
   
    useEffect(() => {
        AOS.init()
      }, []);

  return (
    <div className="overflow-hidden relative h-screen font-montserrat">

      <Navigator  pathnames={[Routes.HOME, Routes.CATALOGO]} />

        <div className="pt-20 pl-3">
          <h1 className="text-xl font-semibold text-primary-0
            lg:text-2xl">
            ¿QUE ESTAS BUSCANDO?
          </h1>
        </div>



        <div className="pt-7 px-9 md:px-44 lg:px-20 lg:h-[60vh] lg:flex items-center">
        
          <div className="grid lg:grid-cols-3 gap-y-10 lg:gap-x-10 w-full">

            {/* Carta */}
            <div className="border border-primary-0 flex flex-col items-center pt-4 px-7 
            rounded-lg gap-y-2 pb-7">
              <Image src={Referencia} alt="Imagen" width={100} height={100} 
              className="w-full"/>
              <p className="text-primary-0 text-xl">
                SUBLIMACIÓN
              </p>
            </div>

            <div className="border border-primary-0 flex flex-col items-center pt-4 px-7 
            rounded-lg gap-y-2 pb-7">
              <Image src={Referencia} alt="Imagen" width={100} height={100} 
              className="w-full"/>
              <p className="text-primary-0 text-xl">
                SUBLIMACIÓN
              </p>
            </div>

            <div className="border border-primary-0 flex flex-col items-center pt-4 px-7 
            rounded-lg gap-y-2 pb-7">
              <Image src={Referencia} alt="Imagen" width={100} height={100} 
              className="w-full"/>
              <p className="text-primary-0 text-xl">
                SUBLIMACIÓN
              </p>
            </div>


          </div>

          


        </div>

      <Footer />

    </div>
  );
}

export default Contacto;
