import { Footer, Navigator } from '@/components'
import { Routes } from '@/models'
import React from 'react'

import 'aos/dist/aos.css';
import Aos from "aos";
Aos.init()

function Home() {
  return (
    <div className="min-h-screen bg-gray-200">

      <Navigator pathnames={[Routes.HOME, Routes.CONTACTO, Routes.CATALOGO]} />
      
      

      <Footer/>

    </div>
  )
}

export default Home