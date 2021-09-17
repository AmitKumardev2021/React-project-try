import React, { useState } from "react";
import "../App.css";

const Foram = () => {
  const [text, setstate] = useState("Write something to here.");

  const onClickstart = () => {
    let textput = text.toUpperCase();
    setstate(textput);
  };
  const onClicklow = () => {
    let textput = text.toLowerCase();
    setstate(textput);
  };
  // to clean the text
  const onClean = () => {
    let textput = "";
    setstate(textput);
  };

  //to copy any selection 

  const onCopy=()=>{  
    // fix Firefox losing focus when button is clicked
    
    console.log("copied")
    let text = document.getElementById( "myBox" ); 
    text.select();
    navigator.clipboard.writeText(text.value); 
      
        
}


const removeSpace=()=>{
  let newText=text.split(/[ ]+/);
  setstate(newText.join(" "));
}

// capital word
const capitalizeFirstLetter=()=> {
  let newttexto=text.charAt(0).toUpperCase() + text.slice(1);
  setstate(newttexto)
}
 

  const onHandle = (event) => {
    console.log("Handle is clicked");
    setstate(event.target.value);
  };

  return (
    <>
      <div className="container ">
        <h1 className="fontstyle my-1">Enter Text Below</h1>
        <div className="d-flex justify-content-between align-item-center mb-3">
          <textarea
            className="form-control deco w-100"
            id="myBox"
            rows="9"
            value={text}
            onChange={onHandle}
          ></textarea>

          <div className="container border ms-4 w-25" style={{borderRadius:"20px" }}>
            <h5 className="fw-bold mt-3">Your Text Summary</h5>
            <br />
            <br />
            <div className="position">
              <p className="font-monospace">
                <span className="fw-bolder">{text.split(" ").length - 1}</span>{" "}
                words and <br />{" "}
                <span className="fw-bolder">{text.length}</span> character
              </p>

              <p>
                Time read:
                <span className="fw-bolder">
                  {0.008 * text.split(" ").length} Minutes{" "}
                </span>{" "}
              </p>
            </div>
          </div>
        </div>

        <button className="btn btn-primary my-1 mx-1 " onClick={onClickstart}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary my-1 mx-1 " onClick={onClicklow}> Convert to LowerCase</button>
        <button className="btn btn-primary my-1 mx-1 " onClick={onClean}> Clean </button>
        <button className="btn btn-primary my-1 mx-1 " onClick={onCopy} > Copy Text </button>
        <button className="btn btn-primary my-1 mx-1 " onClick={removeSpace} > Remove Space </button>
        <button className="btn btn-primary my-1 mx-1 " onClick={capitalizeFirstLetter} > capital word </button>

        <h4 className="mt-4">preview Here...</h4>
        <div className="container my-4">
          <p>{text}</p>
        </div>

        {/* button of Action start from here */}
      </div>
    </>
  );
};

export default Foram;
