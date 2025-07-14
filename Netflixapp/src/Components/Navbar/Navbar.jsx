// import React from 'react'
// import './Navbar.css'
// import logo from '../../assets/logo.png'
// import search_icon from '../../assets/search_icon.svg'
// import bell_icon from '../../assets/bell_icon.svg'
// import profile_img from '../../assets/profile_img.png'
// import caret_icon from '../../assets/caret_icon.svg'
// import { useEffect } from 'react'
// import { useRef } from 'react'


// function Navbar() {

//     const navRef=useRef();
//     useEffect(()=>{
//         window.addEventListener('scroll',()=>{
//             if(window.scrollY>=80){
//                 navRef.current.classList.add('nav-dark')
//             }
//             else{
//                 navRef.current.classList.remove('nav-dark')

//             }
//         })

//     },[])

//   return (
//     <div ref={navRef} className='navbar'>
//         <div className='navbar-left'>
//         <img src={logo} alt="" />
//         <ul>
//             <li>Home</li>
//             <li>TV shows</li>
//             <li>Movies</li>
//             <li>New & Popular</li>
//             <li>My list</li>
//             <li>Browse by Languages</li>
//         </ul>
//     </div>

//         <div className='navbar-right'>
//             <img src={search_icon} alt="" className='icons'/>
            
//             <img src={bell_icon} alt="" className='icons'/>
//             <div className="navbar-profile">
//                 <img src={profile_img} alt="" className='profile'/>
//                 <img src={caret_icon} alt="" />
//                 <div className="dropdown">
//                     <p>Sign Out of Netflix</p>
//                 </div>
//             </div>

//         </div>

        
//     </div>
//   )
// }

// export default Navbar

"use client"

import { useEffect, useRef } from "react"
import "./Navbar.css"
import { useNavigate } from "react-router-dom"

function Navbar() {
  const navRef = useRef()
  const navigate=useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-scrolled")
      } else {
        navRef.current.classList.remove("nav-scrolled")
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav ref={navRef} className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="logo">NETFLIX</div>
          <ul className="nav-menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="#movies">Movies</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <button className="btn-signup" onClick={() => navigate("/login")}>Sign up</button>
          <button className="btn-login" onClick={() => navigate("/login")}>Login</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
