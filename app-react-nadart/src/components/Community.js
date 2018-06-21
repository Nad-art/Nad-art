import React from 'react'
import '../styles/Community.css'
import Tabbar from './Tabbar.js'
import CommunitySelfie from './CommunitySelfie.js'



const Community = () => {
    return (
        <div> 
            <div className='community-nadar'>
              <h3 className= 'title'> COMMUNAUTE NADARESQUE </h3>
              4 votes disponibles<br />
              Votez pour le selfie que vous préférez
            </div>
            <div className='selfies'>
              <CommunitySelfie />
              <CommunitySelfie />
            </div>
            <Tabbar />
        </div>
    )

}

export default Community