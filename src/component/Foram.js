import React,{useState} from "react";
import "../App.css";


const Foram = () => {
const [text, setstate] = useState("Write something to here.")

const onClickstart=()=>{

let textput=text.toUpperCase();
setstate(textput)
}

const onHandle=(event)=>{
    console.log("Handle is clicked");
    setstate(event.target.value)
}

  return (
    <div className="container ">
      <div className="mb-3 mx-5">
        <h1 className="fontstyle my-4">Enter Text Below</h1>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={onHandle}
        ></textarea>
      </div>
      {/* button of Action start from here */}
        <button className="btn btn-primary mt-3 ms-5" onClick={onClickstart}>Convert to UpperCase</button>
    </div>
  );
};

export default Foram;
