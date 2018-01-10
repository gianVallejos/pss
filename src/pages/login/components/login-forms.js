import React from 'react'
import { Row, Col } from 'react-bootstrap'

import {Link} from 'react-router-dom'

import './login-forms.css'

function LoginForms (props){
    return(
      <div className="LoginForms">
          <form className="LoginForms-form">
            <Row>
              <Col sm={12} className="LoginForms-gd-input">
                <input className="LoginForms-input" placeholder="E-mail" type="text" name="email" />
              </Col>
              <Col sm={12} className="LoginForms-gd-input">
                <input className="LoginForms-input" placeholder="Contraseña" type="password" name="password" />
              </Col>
            </Row>
            <Row className="LoginForms-subbtns">
              <Col sm={5}>
                <label className="LoginForms-label">
                    <input className="LoginForms-checkbox" type="checkbox" name="recuerdame" />Recordarme</label>
              </Col>
              <Col sm={7}>
                <Link to='/forgotPass' className="LoginForms-olvidastePass">¿Olvidaste tu contraseña?</Link>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <button onClick={ props.handleLoginClick } className="LoginForms-Btn" type="submit">Ingresar</button>
              </Col>
            </Row>
          </form>
      </div>
    )
}

export default LoginForms
