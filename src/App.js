import React from "react";
import "./App.css";
import Light from "./Light";

function App() {
  function switchChanged(switchBtn, switchPos) {
    switchBtn.innerText = switchPos;
  }
  return (
    <div className="AppWrapper">
      {/* <h1>LIGHT APP</h1> */}
      <Light switchClick={switchChanged} num="1" />
      <Light switchClick={switchChanged} num="2" />
    </div>
  );
}

export default App;