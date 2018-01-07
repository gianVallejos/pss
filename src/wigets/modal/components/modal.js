import React from 'react'

import './modal.css'

function Modal(props){
    return(
        <div id="Modal" className="Modal" onClick={props.handleOverlayEvent}>
            <div className="Modal-content">
                Esto es un modal
            </div>
        </div>
    )
}

export default Modal
