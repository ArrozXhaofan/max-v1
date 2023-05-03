export const Routes = {
    HOME:{
        name:'Inicio',
        path: '/'
    },
    CATALOGO:{
        name: 'Catálogo',
        path: '/catalogo',
    },
    CONTACTO:{
        name:'Contacto',
        path: '/contacto'
    }
}

export interface Route{
    name:string,
    path:string
}