import React from "react"
import "../style/Home.scss"
function Contact(){

    return(
        <>

        <div className="main-contact">
        <h3>CONTACT</h3>
            <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
        </div>
        <div className="contact">
            
            <div>
            <form>
                <label>Name :</label>
                <input type="text" placeholder="Dhiraj"></input>
                <label>Email :</label>
                <input type="email" placeholder="dhriaj@gmail.com"></input>
                <label>Message :</label>
                <textarea placeholder="It's a great website"></textarea>
                <button type="submit">SUBMIT</button>

            </form>
            </div>

        </div>
            
        </>
    )
}

export default Contact 