import React from 'react';
import '../styles/Challenge.css';
import Tabbar from './Tabbar.js';
import maevaPicture from '../images/maeva.png';
import { Link } from '@reach/router'

const Challenge = () => {
    let pict1 ="visible"
    let pict2="invisible"
    let pict3 ="invisible"
    let pict4="invisible"
  return (
    <div>
      <div className="challenge-nadar">
        <h3 className="title"> LE CHALLENGE </h3>
        <div className="button-photo"> Prendre une nouvelle photo </div>
        <p> Plus que <span className="photo-span"> 3 photos </span></p>
        <p>pour debloquer le billet pour la visite à 12€</p>

      </div>
      <div className="extension-photo">
      <div className="selfie-challenge">
          <div className="selfie-capture" onClick={()=>pict1="visible"}> <img src={maevaPicture} className='imgMini' width="50px" height="70px"/> </div>
          <div className="selfie-capture" onClick={()=>{
                pict2="visible"
                console.log("pict2,",pict2 )}
                }> <img src={maevaPicture} className={pict2}  width="50px" height="70px"/> </div>
          <div className="selfie-capture"  onClick={()=>pict3="visible"}> <img src={maevaPicture} className={pict3}  width="50px" height="70px"/> </div>
          <nav>
          <Link className='link' to='/felicitation' >
          <div className="selfie-capture"  onClick={()=>pict4="visible"}>  </div>
          </Link>
          </nav>
        </div>
        <div className="desc-selfie">
          <h4> Photo 1 </h4>
          <p> 12 juin 2018</p>
        </div>
      </div>
      <Tabbar />
    </div>
  );
};

export default Challenge;
