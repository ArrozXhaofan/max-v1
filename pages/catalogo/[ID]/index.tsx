import { Navigator } from '@/components'
import { Routes } from '@/models'
import React from 'react'


function index({data}:any) {

    const datos = data

  return (
    <div className=''>
        
        <Navigator pathnames={[Routes.HOME, Routes.CONTACTO, Routes.CATALOGO]} />

        {/* {
            datos.MODELO
        } */}
        <div className='pt-20'>
            {datos.id}
        </div>
        

    </div>
  )
}

export default index

export async function getStaticPaths(){

    try {
        const url = 'https://apimaxv2.apexmaicol.online/VPsublimacion/'
        const res = await fetch(url)
        const data = await res.json()

       const paths = data.map(({ID}:any) => (
        {params:
            {ID: `${ID}`
            }
        }
    ))  

        return{
            paths,
            fallback:false
        }

    } catch (error) {error}
}

export async function getStaticProps({params}:any) {
    try {
        const url = `https://apimaxv2.apexmaicol.online/VPsublimacion/${params.ID}`
        const res = await fetch(url)
        const data = await res.json()

        return{
            props:{
                data:data
            }
        }

    } catch (error) {console.log(error)}
}