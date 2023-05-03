import { Card, Navigator } from '@/components'
import { Routes } from '@/models'
import React from 'react'

interface Maquina {
  ID: number;
  MODELO: string;
  IMAGEN: string;
}

function Catalogo({data}:any) {

  const maquinas:Maquina[] = data

  return (
    <div className='min-h-screen bg-gray-200'>
        
        <Navigator pathnames={[Routes.HOME, Routes.CONTACTO]} />
        
        <h1 className='font-semibold text-primary-0 pt-20 pb-5 px-2 text-xl'>
        ¿QUE ESTAS BUSCANDO?
      </h1>

      {/* INDICE */}
      <div className='px-0.5 text-white flex gap-4 flex-wrap'>
        <button className='bg-white text-primary-0 border border-primary-0 py-1 rounded-full w-44
        hover:bg-primary-0 hover:text-white duration-300 hover:border-white'>
          SUBLIMADORAS
        </button>

        <button className='bg-white text-primary-0 border border-primary-0 py-1 rounded-full w-44
        hover:bg-primary-0 hover:text-white duration-300 hover:border-white'>
          DTF
        </button>

        <button className='bg-white text-primary-0 border border-primary-0 py-1 rounded-full w-44
        hover:bg-primary-0 hover:text-white duration-300 hover:border-white'>
          ECOSOLVENTES
        </button>
      </div>

      <div>
        {
          maquinas.map(maquina => (

            <Card key={maquina.ID} data={maquina} />
          ))
        }
      </div>
    
    </div>
 
  )
}
export default Catalogo


export async function getStaticProps(){
  
  try {
    
    const res = await fetch('https://apimaxv2.apexmaicol.online/VPsublimacion/')
    const data = await res.json()

    return{
      props:{
        data:data
      }
    }

  } catch (error) {
    console.log(error);
    
  }

}
