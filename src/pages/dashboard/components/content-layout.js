import React from 'react'

import './content-layout.css'

function ContentLayout(props){
    return(
        <div id="wrapper" className={props.estado ? "active" : ""} >
            { props.children }
        </div>
    )
}

export default ContentLayout
