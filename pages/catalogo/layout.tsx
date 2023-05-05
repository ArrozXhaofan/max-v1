import { Navigator } from "@/components"
import { Routes } from "@/models"

function Layout({children}:{children:React.ReactNode}) {
  return (
    <div className="relative ">
        <Navigator pathnames={[Routes.HOME, Routes.CONTACTO, Routes.CATALOGO]} />
        <main>
            {children}
        </main>
        
    </div>
  )
}

export default Layout