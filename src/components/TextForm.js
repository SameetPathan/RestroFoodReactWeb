import React,{useState} from 'react'



export default function TextForm(props) {

    const [text,setText] = useState("");
   // console.log(useState("Enter Dish Here"))

    const handleclick = () =>{
      //  console.log("Button was clicked")
        setText(text.toUpperCase());
    }
    const handleonchange = (event) =>{
       // console.log("on change run");
        setText(event.target.value);
        
    }
    const cleartext=()=>{
        setText("")
    }

    return (
        <>
        <div className="container">
            <div className="mb-3">
                <h1>{props.heading} </h1>
                <textarea className="form-control" onChange={handleonchange} value={text} id="myBox" rows="5"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleclick}>Search Dish</button> 
            <button className="btn btn-primary mx-2" onClick={cleartext}>Clear Dish</button>        
        </div>
        <div className="container my-3">
            <h1>Your Dish Summary</h1>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p> {0.008 * text.split(" ").length } Minutes To Read</p>
        </div>
        </>
    )
}
