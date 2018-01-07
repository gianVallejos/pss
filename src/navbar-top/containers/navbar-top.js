import React, {Component} from 'react'

import Navbar from '../components/navbar-top'
import NavbarOptions from '../components/navbar-options'
import Logoheader from '../components/logo-header'

class NavbarTop extends Component{
    render(){
      return(
        <Navbar>
            <Logoheader title="Bienvenido a Giraffe.pe" />
            <NavbarOptions />
        </Navbar>
      )
    }
}

export default NavbarTop
