import React from 'react'
import '../styles/Community.css'
import like from '../images/like.png'
import dislike from '../images/dislike.png'

import blondManPicture from '../images/blond-man.jpg' 


const CommunitySelfie = () => {
    return (
        <div className='community-selfie'>
            <div className='community-like'>
                <div className='vote-like'> 
                    <img src={like} alt='like' className='heart-like'/>
                    <p>15</p>
                    <p>J'ai voté</p>
                </div>
                <div className='community-selfie'>
                    <img className='profil-picture' src={blondManPicture} alt='blond man' width='60px'/>
                    <div className='name-selfie'>PAUL F.</div>
                    <div className='date-selfie'>12 Sept.2018</div>
                </div>  

               <div className='vote-dislike'>   
               <img src={dislike} alt='dislike'className='heart-dislike'/>
                   <p>2</p>
                </div>
 
            </div>
      <div className='selfie'>
        <div className='selfie-picture'>
            <img className='selfie-picture-img' src={blondManPicture} alt='blond man'/>
        </div>
        <div className='selfie-desc'>
            <div className='descript1'>Portrait moderne d'homme blond avec regard direct dans la caméra.</div>
            <div className='descript2'>Fond gris accompagné d'habits de l'époque</div>    
        </div>
    </div>
    </div>
    )
}
export default CommunitySelfie
 