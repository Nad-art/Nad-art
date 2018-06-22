import React from 'react'
import { AppBar, Tabs, Tab } from '@material-ui/core'
import HomeIcon from '../images/icons/home.svg'
import StarIcon from '../images/icons/medal.svg'
import PersonIcon from '../images/icons/user.svg'
import PublicIcon from '../images/icons/earth.svg'
import { Link } from '@reach/router'
import '../styles/Tabbar.css'


const Tabbar = () => {
  return (
    <div className="tab-bar">

      <Tabs
        className="tab-bar-tabs"
        fullWidth
      >
        <nav className='navbar'>
          <Link className='link' to='/home'  >
            <img className="icon-tab" src={HomeIcon} />
            <span className="link-tab">Accueil</span>
          </Link>
          <Link className='link' to='/community' >
            <img className="icon-tab" src={PublicIcon} />
            <span className="link-tab">Communauté</span>
          </Link>
          <Link className='link' to='/challenge' >
            <img className="icon-tab"  src={StarIcon}/>
            <span className="link-tab">Challenge</span> </Link>
          <div>
            <img className="icon-tab"  src={PersonIcon}/>
            <span className="link-tab">Profil</span>
          </div>
        </nav>
      </Tabs>



    </div>
  )
}

export default Tabbar 
