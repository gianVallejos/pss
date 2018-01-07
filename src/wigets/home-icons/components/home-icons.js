import React from 'react'

import './home-icons.css'

function HomeIcons(props){
    return(
        <div onClick= {props.handleSalesClick} className="HomeIcons">
            <div className="HomeIcons-wrap">
              <img className="HomeIcons-image" src={props.imageUrl} width={props.width} />
            </div>
            <h3 className="HomeIcons-title">{props.title}</h3>
        </div>
    )
}

export default HomeIcons
