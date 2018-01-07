import React, {Component} from 'react'

import InicioLayout from '../../inicio/inicio-layout'
import Inicio from '../../inicio/inicio'
import InicioLogo from '../../inicio/inicio-logo'
import LoginForms from '../components/login-forms'
import InicioFoot from '../../inicio/inicio-foot'

class Login extends Component{
  handleLoginClick = (event) => {
    return (
      event.preventDefault()
    )
  }
  render(){
      return(
        <InicioLayout>
          <Inicio>
            <InicioLogo
                titulo="Bienvenido a Giraffe"
                texto="Diseño perfecto y preciso preparado para la administración de compras y ventas de tu negocio"
                subtitulo="Ingresa para verlo en acción"
            />
            <LoginForms handleLoginClick={ this.handleLoginClick } />
            <InicioFoot
                titulo="¿Aún no tienes una cuenta?"
                linkBoton = "/register"
                textoBoton = "Crear cuenta"
            />
          </Inicio>
        </InicioLayout>
      )
  }
}

export default Login
