import React from "react";
import "./styles.css";

function ButtonComp(buttonStyle) {
  console.log(buttonStyle);
  let deneme = buttonStyle.buttonStyle;
  return (
    <div>
      <button className={deneme}>{deneme}</button>
    </div>
  );
}
export default ButtonComp;
