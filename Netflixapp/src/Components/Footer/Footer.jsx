import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'


const Footer = () => {
  return (
    <div className='footer'>

      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>

      {/* footer menu links */}
      <ul>
          <li>Audio Description</li>
          <li>Help Center</li>
          <li>Gift Cards</li>
          <li>Media Center</li>
          <li>Investor Relations</li>
          <li>Jobs </li>
          <li>Team of us</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
          <li>Coookies </li>
          <li>Contact us</li>
       </ul>
      <p className='copyright-text'>@bhavana technologies</p>


    </div>
  )
}

export default Footer