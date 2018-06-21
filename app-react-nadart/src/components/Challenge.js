import React from 'react'
import '../styles/Challenge.css'
import Tabbar from './Tabbar.js'
import maevaPicture from '../images/maeva.png' 



const Challenge = () => {
    return (
        <div> 
            <div className='challenge-nadar'>
              <h3 className= 'title'> LE CHALLENGE </h3>
              <div className="button-photo"> Prendre une nouvelle photo </div>
              <p> Plus que <span className='photo-span'> 3 photos </span></p>
              <p>pour debloquer le billet pour la visite à 12€</p>
              <div className='selfie-challenge'>
                 <div className='selfie-capture'>  </div>
                 <div className='selfie-capture'> </div>
                 <div className='selfie-capture'>  </div>
                 <div className='selfie-capture'>  </div>
            </div>
            </div>


            <div className='extension-photo'>
            {/*<img className='extension-photo' src={maevaPicture} alt='maeva' />*/}
            
            <div className='desc-selfie' />
                <h4> Photo 1 </h4>
                <p> 12 juin 2018</p>
            
            </div>
            <Tabbar />
        </div>
    )

}

export default Challenge