import React from 'react'
import { AppBar, Tabs, Tab } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import StarIcon from '@material-ui/icons/Star'
import PersonIcon from '@material-ui/icons/Person'
import PublicIcon from '@material-ui/icons/Public'
import {  Link } from '@reach/router'
import '../styles/Tabbar.css'


const Tabbar = () => {
    return (
        <div className="tab-bar"> 
       
          <Tabs 
            className="tab-bar-tabs"
            fullWidth
          >
          <nav>
            <Link className='link' to='/' > <Tab icon={<HomeIcon />} label="Accueil" /> </Link>
            <Link className='link' to='community'> <Tab icon={<PublicIcon />} label="communauté" /></Link>
            <Link className='link' to='/' > <Tab icon={<StarIcon />} label="Challenge" /> </Link>
            <Link className='link' to='community'> <Tab icon={<PersonIcon />} label="Profil" /></Link>
          </nav>
          </Tabs>
  


        </div>
    )
}

export default Tabbar 
