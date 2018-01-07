import React from 'react'

import {Row, Col} from 'react-bootstrap'

import './register-forms.css'

function RegisterForms(props){
  return(
    <div className="RegisterForms">
        <form className="RegisterForms-form">
          <Row>
            <Col sm={12} className="RegisterForms-gd-input">
              <input className="RegisterForms-input" placeholder="Nombres" type="text" name="nombres" />
            </Col>
            <Col sm={12} className="RegisterForms-gd-input">
              <input className="RegisterForms-input" placeholder="E-mail" type="text" name="email" />
            </Col>
            <Col sm={12} className="RegisterForms-gd-input">
              <input className="RegisterForms-input" placeholder="Contraseña" type="password" name="password" />
            </Col>
            <Col sm={12} className="RegisterForms-gd-input">
              <input className="RegisterForms-input" placeholder="Confirmar Contraseña" type="password" name="confirm_password" />
            </Col>
            <Col sm={12} className="RegisterForms-gd-input">
              <input className="RegisterForms-input" placeholder="Código de Registro" type="text" name="cod_registro" />
            </Col>
            <Col sm={12} className="text-left">
              <label className="RegisterForms-label">
                  <input className="RegisterForms-checkbox" type="checkbox" name="recuerdame" />Acepto los términos y condiciones</label>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <button onClick={ props.handleRegisterClick } className="RegisterForms-Btn" type="submit">Registrar</button>
            </Col>
          </Row>
        </form>
    </div>
  )
}

export default RegisterForms
