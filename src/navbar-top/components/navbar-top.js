import React from 'react'

import './navbar-top.css'

function NavbarTop(props){
  return(
    <header className="NavbarTop">
      { props.children }
    </header>
  )
}

export default NavbarTop
