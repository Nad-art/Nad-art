import React from 'react'
//import SwipeableViews from 'react-swipeable-views'
import Dates from './Dates.js'
import '../styles/SplashScreen.css'

const Home = () => {
    return (
        <div className="splash-screen flex">
            <Dates />
        </div>
    )
}

export default Home