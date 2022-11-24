import React from "react"
import "../style/Header.scss"
import {Link} from "react-router-dom"
import {HashLink} from "react-router-hash-link"
function Header(){
    // javascrpt

    return(
        <>
        <nav>
            <h1>TECHNO<span>Point</span></h1>
            <div>
            <HashLink to="/#home">Home</HashLink>
            <HashLink to="/#about">About</HashLink>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
            </div>
        </nav>
        </>
    )

}

export default Header