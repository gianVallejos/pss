import React, {Component} from 'react'
import {Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './inicio-foot.css'

class InicioFoot extends Component{
  render(){
    const sello = 'Tecnología desarrollada por gvallejos.com © 2017'
    return(
      <div className="InicioFoot">
      <Row>
        <Col sm={12}>
          <span className="InicioFoot-texto">{ this.props.titulo }</span>
        </Col>
        <Col sm={12}>
          <Link to={this.props.linkBoton}>
              <button className="InicioFoot-btn">{ this.props.textoBoton }</button>
          </Link>
        </Col>
        <Col sm={12}>
          <span className="InicioFoot-copy">{sello}</span>
        </Col>
      </Row>
      </div>
    )
  }
}

export default InicioFoot
