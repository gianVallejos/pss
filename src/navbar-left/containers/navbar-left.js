import React, {Component} from 'react'

import NavbarLeftLayout from '../components/navbar-left-layout'
import Perfil from '../components/perfil'
import Navegacion from '../components/navegacion'
import NavbarLeftFoot from '../components/navbar-left-foot'

class NavbarLeft extends Component{
    render(){
      return(
          <NavbarLeftLayout estado={this.props.estado} >
              <Perfil />
              <Navegacion />
              <NavbarLeftFoot estado={this.props.estado} handleNavClick={ this.props.handleNavClick } />
          </NavbarLeftLayout>
      )
    }
}

export default NavbarLeft
