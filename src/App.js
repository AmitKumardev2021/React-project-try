import React from "react";
import "./App.css";
// import About from "./component/About";
import Foram from "./component/Foram";
import NavBar from "./component/NavBar.js";

const App = () => {
  return (
    <>
      <NavBar title="textUtils-Er.Amit" about="AboutMe" />
      <Foram/>
      {/* <About/> */}
    </>
  );
};

export default App;
