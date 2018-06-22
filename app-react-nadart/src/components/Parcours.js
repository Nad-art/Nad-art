import React from 'react'
import Tabbar from '../components/Tabbar.js'
import '../styles/Parcours.css'
import parcours from '../images/parcours.png'

const Parcours = () => 
  <div>
    <div className='header-parcours'>
      <h1 className='header-title'>LE PARCOURS EXPO</h1>
      <p className='header-para'>4 votes disponibles</p>
      <p className='header-para'>Votez pour le selfie que vous préférez</p>
    </div>
    <div>
      <span class="pulse"></span>
      <img src={parcours} alt="parcours" className='map'/>
    </div>
    <div>
    </div>
      <Tabbar />
  </div>

export default Parcours