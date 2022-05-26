import React from 'react'
import './Sidebar.css'
import Logo from '../../assets/img/logo.png'
import {UilEstate} from '@iconscout/react-unicons'


const Sidebar = () => {

    return (
        <div className='sidebar'>
            <div className='logo'>
                <img src={Logo} alt=''/>
                <span>
                    Sh<span>o</span>ps
                </span>
            </div>
            <div className='menu'>
                <div className='menuItem'>
                    <div>
                      <UilEstate/>
                    </div>
                    <span>
                        Dashboard
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar



