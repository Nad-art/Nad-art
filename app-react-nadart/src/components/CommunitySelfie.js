import React from 'react'
import '../styles/Community.css'
import FavoriteIcon from '@material-ui/icons/Favorite'

import blondManPicture from '../images/blond-man.jpg' 


const CommunitySelfie = () => {
    return (
        <div className='community-selfie'>
            <div className='community-like'>
                <div className='vote-like'> 
                    <FavoriteIcon />
                    <p>15</p>
                    <p>J'ai voté</p>
                </div>
                <div className='community-selfie'>
                    <img className='profil-picture' src={blondManPicture} alt='blond man' width='60px'/>
                    <div className='name-selfie'>PAUL F.</div>
                    <div className='date-selfie'>12 Sept.2018</div>
                </div>  

               <div className='vote-dislike'>   
                    <FavoriteIcon />
                   <p>2</p>
                </div>
 
            </div>
      <div className='selfie'>
        <div className='selfie-picture'>
            <img className='selfie-picture-img' src={blondManPicture} alt='blond man'/>
        </div>
        <div className='selfie-desc'>
        <br />
        <br />
            Portrait moderne d'homme blond avec regard direct dans la caméra.<br />
            Fond gris accompagné d'habits de l'époque
        </div>
    </div>
    </div>
    )
}
export default CommunitySelfie
