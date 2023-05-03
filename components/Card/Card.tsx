interface Maquina {
    ID: number;
    MODELO: string;
    IMAGEN: string;
  }

import Link from "next/link"

interface Props{
    data:Maquina
}


function Card({data}:Props) {
  return (
    <div>
        <Link href={`catalogo/${data.ID}`}>{data.ID}</Link>
        {/* <p>{data.ID}</p> */}
        
    </div>
  )
}

export default Card