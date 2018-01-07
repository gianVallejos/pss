import React from 'react'

import HomeIcons from './home-icons'
import SettingsImage from '../../../images/iconos/dashboard/settings.svg'

function Settings(props){
    return(
        <HomeIcons imageUrl={SettingsImage} title="Settings" width="70" />
    )
}

export default Settings
