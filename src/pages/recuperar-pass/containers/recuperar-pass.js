import React, {Component} from 'react'

import InicioLayout from '../../inicio/inicio-layout'
import Inicio from '../../inicio/inicio'
import InicioLogo from '../../inicio/inicio-logo'
import RecuperarPassForms from '../components/recuperar-pass-forms'
import InicioFoot from '../../inicio/inicio-foot'

class RecuperarPass extends Component{
    handleForgotClick = (event) => {
      return(
        event.preventDefault()
      )
    }
    render(){
      return(
          <InicioLayout>
              <Inicio>
                <InicioLogo
                    titulo="¿Has olvidado tu contraseña?"
                    texto=""
                    subtitulo="Ingresa tu e-mail y se te enviará un link para restaurar tu contraseña"
                />
                <RecuperarPassForms handleForgotClick={ this.handleForgotClick } />
                <InicioFoot
                    titulo="¿Deseas iniciar sesión?"
                    linkBoton = "/login"
                    textoBoton = "Login"
                />
              </Inicio>
          </InicioLayout>
      )
    }
}

export default RecuperarPass
