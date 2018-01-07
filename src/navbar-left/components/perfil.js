import React from 'react'

import './perfil.css'

function Perfil (props){
    return(
        <div className="Perfil">
          <div className="Perfil-imagen">
          </div>
          <span className="Perfil-nombre">Nombre Usuario</span>
          <span className="Perfil-rol">Administrador</span>
        </div>
    )
}

export default Perfil
