import React from 'react'

import HomeIcons from './home-icons'
import UsuariosImage from '../../../images/iconos/dashboard/users.svg'

function Usuarios(props){
    return(
        <HomeIcons imageUrl={UsuariosImage} title="Usuarios" width="70" />
    )
}

export default Usuarios
