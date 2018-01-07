import React, {Component} from 'react'

import InicioLayout from '../../inicio/inicio-layout'
import Inicio from '../../inicio/inicio'
import InicioLogo from '../../inicio/inicio-logo'
import RegisterForms from '../components/register-forms'
import InicioFoot from '../../inicio/inicio-foot'

class Register extends Component{
    handleRegisterClick = (event) => {
      return event.preventDefault()
    }

    render(){
      return(
          <InicioLayout>
            <Inicio>
              <InicioLogo
                  titulo="Registro en Giraffe"
                  texto=""
                  subtitulo="Crea una cuenta para verlo en acción"
              />
              <RegisterForms handleRegisterClick={this.handleRegisterClick} />
              <InicioFoot
                  titulo="¿Ya tienes una cuenta?"
                  linkBoton = "/login"
                  textoBoton = "Login"
              />
            </Inicio>
          </InicioLayout>
      )
    }
}

export default Register
