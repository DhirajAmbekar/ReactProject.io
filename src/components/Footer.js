import React from "react"
import "../style/Home.scss"
import {AiFillGoogleCircle,AiFillFacebook,AiFillInstagram,AiFillGithub,AiFillLinkedin} from "react-icons/ai"

function Footer(){
    // javascript

    return(
        <>
        <footer>
            <div>
                <h4>THECNO <br></br> Point</h4>

            </div>
            <div>
                <div className="icons" style={{animationDelay:"0.3s" }} >
                    <AiFillFacebook />
                </div>
                <div className="icons" style={{animationDelay:"0.5s" }} >
                    <AiFillInstagram />
                </div>
                <div className="icons" style={{animationDelay:"0.7s" }} >
                    <AiFillGithub />
                </div>
                <div className="icons" style={{animationDelay:"0.9s" }} >
                    <AiFillLinkedin />
                </div>
            </div>
        </footer>
        </>
    )
}
export default Footer