/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"
import "./Navbar.css"
import {FaGithub,FaLinkedin,FaInstagram} from "react-icons/fa"
import {GiHamburgerMenu} from "react-icons/gi"
/* eslint-disable jsx-a11y/anchor-is-valid */
const Navbar = () => {
    const [showMedia,setShowMedia] = useState(false)
    return <>
        <nav className="main-nav">
            <div className="logo">
                
               <h2>📚 Your Logo</h2> 
            </div>
            
            <div className={ showMedia ? "menu-link mobile-menu-link" : "menu-link"}>
                <ul className="menu-font" >
                    <li>
                        <a link="#"  rel="noreferrer">Home</a>
                    </li>
                    <li>
                        <a link="#"  rel="noreferrer">Trending Courses 🔥</a>
                    </li>
                    <li>
                        <a link="#"  rel="noreferrer">Videos</a>
                    </li>
                    <li>
                        <a link="#"  rel="noreferrer">Contact</a>
                    </li>
                </ul>

            </div>

            <div className="social-media">
                
                <ul className="social-media-desktop">
                    <li className="github">
                    <a
                        link="https://github.com/Pragati7979"
                            target="_blank"
                            rel="noreferrer"
                    ><FaGithub/></a>
                    </li> 

                    <li className="linkedin">
                    <a
                        link="https://github.com/Pragati7979"
                            target="_blank"
                            rel="noreferrer"
                    ><FaLinkedin/></a>
                    </li> 

                    <li className="instagram">
                    <a
                        link="https://github.com/Pragati7979"
                            target="_blank"
                            rel="noreferrer"
                    ><FaInstagram/></a>
                    </li> 

                </ul>
                <div className="hamburger-menu">
                    <a link="#" onClick={() => {
                        setShowMedia(!showMedia)
                    }}>
                        <GiHamburgerMenu/>
                    </a>
              </div>
            </div>
        </nav>

        {/* <section className="hero-section">
        <div className="splash-image">
                <img src={HomeAnime} alt="animation" className="home-anime" />
            
        </section> */}
    </>
}

export default Navbar