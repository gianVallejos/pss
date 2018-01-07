import React from 'react'

import './titulo.css'

function Titulo(props){
    return(
        <div className="Titulo">
          <h2 className="Titulo-h2">{ props.titulo }</h2>
          <span className="Titulo-sitemap">{ props.sitemap }</span>
        </div>
    )
}

export default Titulo
