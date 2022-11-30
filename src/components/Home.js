import React from "react"
import "../style/Home.scss"
import img1 from "../assets/client1.png"
import img2 from "../assets/client2.png"
import img3 from "../assets/client3.png"
import img4 from "../assets/client4.png"
import img5 from "../assets/client5.png"
import img6 from "../assets/client6.png"
import imgicon from "../assets/why-us.png"

function Home(){
    

    return(
        <>
        <div className="home" id="home">
        <div>
        <h1>TechnoPoint</h1>
        <p>Best Place For Your WebSite To Built</p>
        </div>
        <div className="img-home">
        </div>
        </div>
        <div className="Down-home">
            <img style={{animationDelay:"0.3s" }} src={img1}></img>
            <img style={{animationDelay:"0.5s" }} src={img2}></img>
            <img style={{animationDelay:"0.7s" }} src={img3}></img>
            <img style={{animationDelay:"0.9s" }} src={img4}></img>
            <img style={{animationDelay:"0.11s" }} src={img5}></img>
            <img style={{animationDelay:"0.13s" }} src={img6}></img>
        </div>
        <div id="about" className ="home-about">
             <div>
                <img src={imgicon}></img>
            </div> 
            <div>
            <h1>About</h1>

                <ol>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    <li>Ullamco laborisnisi ut aliquip ex ea commodo consequat.</li>
                    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</li>
                    <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa.</li>
                <
            </div>
                     
        </div>
        </>
    )
}

export default Home