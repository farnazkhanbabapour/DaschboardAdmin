import React from 'react'

import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsIcon from '@mui/icons-material/Notifications';


import "./topbar.css"

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
               <span className='logo'>SabzLearn &#128153;</span> 
            </div>
            <div className='topRight'>
                <div className='topbarIconContainer'>
                    <NotificationsIcon/>
                    <span className='topIconBadge'>2</span>
                </div>
                <div className='topbarIconContainer'>
                    <LanguageIcon/>
                    <span className='topIconBadge'>2</span>
                </div>
                <div className='topbarIconContainer'>
                    <SettingsIcon/>
                </div>
                <img className='topAvatar' src='image/Foto.jpg'/>
            </div> 
        </div>
        
    </div>
  )
}
