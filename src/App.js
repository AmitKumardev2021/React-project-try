import React from "react";
import "./App.css";
import Foram from "./component/Foram";
import NavBar from "./component/NavBar.js";

const App = () => {
  return (
    <>
      <NavBar title="textUtils-Er.Amit" about="AboutMe" />
      <Foram/>
    </>
  );
};

export default App;
