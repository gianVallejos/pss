import React from 'react'

import HomeIcons from './home-icons'
import SalesImage from '../../../images/iconos/dashboard/discount.svg'

function Sales(props){
    return(
        <HomeIcons handleSalesClick={ props.handleSalesClick } imageUrl={SalesImage} title="Ventas" width="100" />
    )
}

export default Sales
