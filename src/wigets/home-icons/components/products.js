import React from 'react'

import HomeIcons from './home-icons'
import ProductsImage from '../../../images/iconos/dashboard/box.svg'

function Products(props){
    return(
        <HomeIcons imageUrl={ProductsImage} title="Productos" width="75" />
    )
}

export default Products
