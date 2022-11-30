import React,{useState} from "react"
import "../style/Home.scss"

function Contact(){
    const [Final,SetFinal] = useState("");
    const [Final1,SetFinal1] = useState("");
    const [Final2,SetFinal2] = useState("");
    // const [Data,SetData] = useState([])

    function DataChange(e){
        SetFinal(e.target.value)
    }
    function DataChange1(e){
        SetFinal1(e.target.value)
    }
    function DataChange2(e){
        SetFinal2(e.target.value)
    }
    function ClickToSubmit(){
        SetFinal("")
        SetFinal1("")
        SetFinal2("")
        
        
    }
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
                <span className="innerfromdiv">
                <label>Name :</label>
                <input type="text" onChange={DataChange} value={Final} placeholder="Dhiraj"></input>
                <label>Email :</label>
                <input onChange={DataChange1} value={Final1} placeholder="dhriaj@gmail.com"></input>
                <label>Message :</label>
                <textarea placeholder="It's a great website" value={Final2} onChange={DataChange2}></textarea>
                <button onClick={ClickToSubmit}>Click</button>
                </span>
            </div>

        </div>
            
        </>
    )
}

export default Contact 