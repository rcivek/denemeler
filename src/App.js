import React from "react";
import "./styles.css";
import ButtonComp from "./ButtonComp";

export default function App() {
  let buttonStyles = {
    font1: "italic",
    font2: "bold",
    color: "red",
    hacim: "hacim",
    arkaPlan: "renk"
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ButtonComp buttonStyle={buttonStyles.font1} />
      <ButtonComp buttonStyle={buttonStyles.font2} />
      <ButtonComp buttonStyle={buttonStyles.color} />
      <ButtonComp buttonStyle={buttonStyles.hacim} />
      <ButtonComp buttonStyle={buttonStyles.arkaPlan} />
    </div>
  );
}
