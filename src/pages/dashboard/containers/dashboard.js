import React, {Component} from 'react'

import DashboardLayout from '../components/dashboard'

import NavbarTop from '../../../navbar-top/containers/navbar-top'
import NavbarLeft from '../../../navbar-left/containers/navbar-left'
import ContentLayout from '../components/content-layout'
import Titulo from '../../../titulo/components/titulo'
import HomeIconLayout from '../components/home-icon-layout'

import Sales from '../../../wigets/home-icons/components/sales'
import Products from '../../../wigets/home-icons/components/products'
import Compras from '../../../wigets/home-icons/components/compras'
import Proveedores from '../../../wigets/home-icons/components/proveedores'
import Contabilidad from '../../../wigets/home-icons/components/contabilidad'
import Usuarios from '../../../wigets/home-icons/components/usuarios'
import Settings from '../../../wigets/home-icons/components/settings'

import Modal from '../../../wigets/modal/components/modal'
import ModalLayout from '../../../wigets/modal/containers/modal'

class Dashboard extends Component{
    state = {
      modalState: false,
      navActive: false,
    }

    handleNavClick = () => (
      this.setState({
        navActive: !this.state.navActive,
      })
    )

    handleOpenModal = () => {
      this.setState({
          modalState: true
      })
    }

    handleCloseModal = () => {
      this.setState({
          modalState: false
      })
    }

    handleOverlayEvent = (event) => {
        if( event.target.id == "Modal" ){
            this.setState({
                modalState: false
            })
        }
    }

    render(){
      return(
        <DashboardLayout>
          <NavbarTop />
          <NavbarLeft
              estado = { this.state.navActive }
              handleNavClick={ this.handleNavClick }
          />
          <ContentLayout
              estado = { this.state.navActive }
          >
            <Titulo
                titulo="Dashboard"
                sitemap="Inicio  /  Dashboard"
            />
            <HomeIconLayout>
                <Sales handleSalesClick={this.handleOpenModal} />
                <Products />
                <Compras />
                <Proveedores />
                <Contabilidad />
                <Usuarios />
                <Settings />
            </HomeIconLayout>
          </ContentLayout>
          {
            this.state.modalState &&
            <ModalLayout>
              <Modal handleOverlayEvent={this.handleOverlayEvent} />
            </ModalLayout>
          }
        </DashboardLayout>
      )
    }
}

export default Dashboard
