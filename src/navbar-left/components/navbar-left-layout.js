import React from 'react'

import './navbar-left-layout.css'

function NavbarLeftLayout(props){
    return(
      <nav
          className={props.estado ? 'NavbarLeftLayout active' : 'NavbarLeftLayout'}
      >
        { props.children }
      </nav>
    )
}

export default NavbarLeftLayout
