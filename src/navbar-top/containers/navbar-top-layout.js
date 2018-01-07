import React, { Component } from 'react'
import { createPortal } from 'react-dom'

class NavbarTopLayout extends Component{
    render(){
        return(
          createPortal(
            this.props.children,
            document.getElementById('navbar-top-container')
          )
        )
    }
}

export default NavbarTopLayout
