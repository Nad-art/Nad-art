import React from 'react'
import '../style/Home-1.css'

const Home = () => {
    return <div className="container-home-1">
        <div className="flex">
            <div className="left-part">
                <p className="date-day">16</p>
                <p className="date-month">oct.</p>
                <p className="date-year">2018</p>
            </div>
            <div className="right-part">
                <p className="date-day">19</p>
                <p className="date-month">fev.</p>
                <p className="date-year">2019</p>
            </div>
        </div>
    </div>
}

export default Home