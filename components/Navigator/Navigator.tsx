import Image from "next/image"
import maxLogo from '../../public/images/maxLogo.png'
import Link from "next/link"
import { Route } from "@/models"

interface Props{
    pathnames: Route[]
}

function Navbar({pathnames}:Props) {
  return (

    <nav className='font-montserrat  z-50 bg-opacity-20 backdrop-filter backdrop-blur-lg  w-full h-14 bg-neutral-100 shadow-md fixed flex items-center p-5
    justify-between'>

        <div className="">
            <Image priority className="w-14" src={maxLogo} alt="MaxLogo" width={100} height={100} />
        </div>


        <ul className="flex gap-3">
               {
                pathnames.map(pathName => (
                    <li key={pathName.path}>
                        <Link className= "hover:text-primary-0 duration-500"
                         href={pathName.path}>{pathName.name}</Link>
                    </li>
                    
                ))
               }  
        </ul>

    </nav>
  )
}

export default Navbar