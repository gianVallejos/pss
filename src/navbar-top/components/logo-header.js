import React from 'react'
import logotipo from '../../images/header-logo.png'
import './logo-header.css'

function LogoHeader(props){
  return(
    <a href={"/"} className="LogoHeader">
      <img className="LogoHeader-imagen" src={logotipo} />
      <h1 className="LogoHeader-titulo">{ props.title }</h1>
    </a>
  )
}

export default LogoHeader
