import React, { useState } from "react";
import "../App.css";

const Foram = (props) => {
  const [text, setstate] = useState("");

  const onClickstart = () => {
    let textput = text.toUpperCase();
    setstate(textput);
    if (text === "") {
      props.showAlert("No text,please put some text ", "danger");
    } else {
      props.showAlert("Upper case done ", "success");
    }
  };
  const onClicklow = () => {
    let textput = text.toLowerCase();
    setstate(textput);
    if (text === "") {
      props.showAlert("No text,please put some text ", "danger");
    } else {
      props.showAlert("Lower case done ", "success");
    }
  };
  // to clean the text
  const onClean = () => {
    let textput = "";
    setstate(textput);
    if (text === "") {
      props.showAlert("No text,please put some text ", "danger");
    } else {
      props.showAlert("Clear All text ", "success");
    }
  };

  //to copy any selection

  const onCopy = () => {
    // fix Firefox losing focus when button is clicked

    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);

    if (text.value === "") {
      props.showAlert("No text,please put some text ", "danger");
    } else {
      props.showAlert("Copy all text", "success");
    }
  };

  const removeSpace = () => {
    let newText = text.split(/[ ]+/);
    setstate(newText.join(" "));

    if (text === "") {
      props.showAlert("No text,please put some text ", "danger");
    } else {
      props.showAlert("Extra space Remove ", "success");
    }
  };

  // capital word
  const capitalizeFirstLetter = () => {
    let newttexto = text.charAt(0).toUpperCase() + text.slice(1);
    setstate(newttexto);

    if (text === "") {
      props.showAlert("No text,please put some text ", "danger");
    } else {
      props.showAlert("Capitalise fisrt word ", "success");
    }
  };



  

  const onHandle = (event) => {
    console.log("Handle is clicked");
    setstate(event.target.value);
  };

  return (
    <>
      <div
        className="container mt-5"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1 className="fontstyle my-1">Enter Text Below</h1>
        <div className="d-flex justify-content-between align-item-center mb-3">
          <textarea
            className="form-control deco w-100"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="myBox"
            rows="9"
            value={text}
            onChange={onHandle}
          ></textarea>

          <div
            className="container border ms-3 w-25"
            style={{ borderRadius: "40px" }}
          >
            <br />
            <h6 className="fw-bold my-4 text-center">Text Summary </h6>

            <div className="position">
              <p className="font-monospace">
                <span className="fw-bolder">{text.split(" ").filter((y) => (y!=="")).length}</span>{" "}
                Words <br /> <span className="fw-bolder">{text.length}</span>{" "}
                Character
              </p>
              <br />

              <p>
                Time :{" "}
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
        <button className="btn btn-primary my-1 mx-1 " onClick={onClicklow}>
          {" "}
          Convert to LowerCase
        </button>
        <button className="btn btn-primary my-1 mx-1 " onClick={onClean}>
          {" "}
          Clean{" "}
        </button>
        <button className="btn btn-primary my-1 mx-1 " onClick={onCopy}>
          {" "}
          Copy Text{" "}
        </button>
        <button className="btn btn-primary my-1 mx-1 " onClick={removeSpace}>
          {" "}
          Remove Space{" "}
        </button>
        <button
          className="btn btn-primary my-1 mx-1 "
          onClick={capitalizeFirstLetter}
        >
          {" "}
          capital word{" "}
        </button>

        <h4 className="mt-4">preview Here...</h4>
        <div className="container my-4">
          <p
            style={{ color: props.mode === "light" ? "black" : "greenyellow" }}
          >
            {text.length > 0
              ? text
              : "Please write above box something for previews"}
          </p>
        </div>

        {/* button of Action start from here */}
      </div>
    </>
  );
};

export default Foram;
