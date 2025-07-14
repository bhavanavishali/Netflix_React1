import React, { useEffect } from 'react'
import "./Home.css"
import Navbar from '../../Components/Navbar/Navbar'

import hero_title from '../../assets/hero_title2.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../Components/TitleCards/TitleCards'
import hero_banner1 from '../../assets/hero_banner2.jpg'
import Footer from '../../Components/Footer/Footer'


const Home = () => {

  return (
    <div className='home'>
        <Navbar/> 

        {/* banner section */}

        <div className="hero">
            <img src={hero_banner1} alt="" className='banner-img'/>
            <div className="hero-caption">
                <img src={hero_title} alt="" className='caption-img' />
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                <div className="hero-btns">
                    <button className='btn'> <img src={play_icon} alt="" />Play</button>
                    <button className='btn dark-btn'> <img src={info_icon} alt="" />More Info</button>
                </div>
                <TitleCards/>

            </div>
        </div>

        {/* more cards */}
        <div className="more-cards">
          <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
          <TitleCards title={"Only on Netflix"} category={"popular"}/>
          <TitleCards title={"Upcoming "}  category={"upcoming"}/>
          <TitleCards title={" Top pics for you"} category={"now_playing"}/>

        </div>

        {/* footer section */}

        <Footer/>

    </div>
  )
}
export default Home