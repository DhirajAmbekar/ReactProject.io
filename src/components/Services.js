import React from 'react'
import "../style/Home.scss"
import {AiFillGoogleCircle,AiFillApple,AiFillAmazonCircle,AiFillShopping} from "react-icons/ai"

function Services() {
  return (
    <>
    <div className="service">
        <h2>SERVICES</h2>
        <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>

      <div className="card-service">
        <div className="card">
        <AiFillApple class="icon-serv" />
        <h3>Lorem Ipsum</h3>
        <p>
        Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
        </p>
        </div>
        <div className="card">
        <AiFillAmazonCircle class="icon-serv" />
        <h3>Sed ut perspici</h3>
        <p>
        Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
        </p>
        </div>
        <div className="card">
        <AiFillShopping class="icon-serv" />
        <h3>Magni Dolores</h3>
        <p>
        Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
        </p>
        </div>
      </div>

    </div>
    
    </>
  )
}

export default Services