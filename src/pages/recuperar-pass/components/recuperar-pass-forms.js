import React from 'react'
import {Row, Col} from 'react-bootstrap'
import './recuperar-pass-forms.css'

function RecuperarPassForms (props){
    return(
      <div className="ForgotForms">
          <form className="ForgotForms-form">
            <Row>
              <Col sm={12} className="ForgotForms-gd-input">
                <input className="ForgotForms-input" placeholder="E-mail" type="text" name="email" />
              </Col>
              <Col sm={12}>
                <button onClick={ props.handleForgotClick } className="ForgotForms-Btn" type="submit">Enviar restaurar contraseña</button>
              </Col>
            </Row>
          </form>
      </div>
    )
}

export default RecuperarPassForms
