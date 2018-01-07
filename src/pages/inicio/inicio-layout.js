import React from 'react'

import './inicio-layout.css'

function LoginLayout(props){
      return(
        <div className="InicioLayout">
          { props.children }
        </div>
      )
}

export default LoginLayout
