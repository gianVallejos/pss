import React, {Component} from 'react'

import ImagenEmpresa from '../../images/logotipo-log.png'
import './inicio-logo.css'

class LoginLogo extends Component{
    render(){
      return(
          <div className="LoginLogo">
              <img src={ImagenEmpresa} className="LoginLogo-imagen" alt="+" />
              <h1 className="LoginLogo-titulo">{ this.props.titulo }</h1>
              <p className="LoginLogo-texto">{ this.props.texto }</p>
              <span className="LoginLogo-subtitulo">{ this.props.subtitulo }</span>
          </div>
      )
    }
}

export default LoginLogo
