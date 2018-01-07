import React from 'react'

import ArrowLeft from '../../images/iconos/nav/arrow-left.svg'
import ArrowRight from '../../images/iconos/nav/arrow-right.svg'
import './navbar-left-foot.css'

function NavbarLeftFoot(props){
    return(
      <div
            onClick = {props.handleNavClick}
            className="NavbarLeftFoot"
      >
        <img
            src={ props.estado ? ArrowRight : ArrowLeft }
            width={20}
            className="NavbarLeftFoot-image"
        />
      </div>
    )
}

export default NavbarLeftFoot
