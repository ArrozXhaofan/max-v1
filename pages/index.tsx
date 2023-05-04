import { Footer, Navigator } from '@/components'
import { Routes } from '@/models'
import React from 'react'



function Home() {
  return (
    <div className="min-h-screen bg-gray-200">

      <Navigator pathnames={[Routes.HOME, Routes.CONTACTO, Routes.CATALOGO]} />
      
      

      <Footer/>

    </div>
  )
}

export default Home