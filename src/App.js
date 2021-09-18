import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Alert from "./component/Alert";
import About from "./component/About";
import Foram from "./component/Foram";
import NavBar from "./component/NavBar.js";

const App = () => {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  // alert method

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1600);
  };

  //theme change
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode is Activated successfully", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Activated successfully", "success");
    }
  };

  return (
    <>
    <Router>
      <NavBar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
    <Switch>
          <Route exact path="/" >
          <Foram mode={mode} showAlert={showAlert} />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
        </Switch>
    </Router>
    </>
  );
};

export default App;
