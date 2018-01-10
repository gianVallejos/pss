import React, {Component} from 'react'

import InicioLayout from '../../inicio/inicio-layout'
import Inicio from '../../inicio/inicio'
import InicioLogo from '../../inicio/inicio-logo'
import LoginForms from '../components/login-forms'
import InicioFoot from '../../inicio/inicio-foot'

import {Redirect} from 'react-router'

class Login extends Component{
  state = {
    redirect: false,
  }

  handleLoginClick = (event) => {
    event.preventDefault()
    return(
      this.setState({
        redirect: true,
      })
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
            { !this.state.redirect ? (
              <LoginForms
                    handleLoginClick={ this.handleLoginClick }
                />
              ):(
                <Redirect to="/pss/dashboard" />
              )
            }
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
