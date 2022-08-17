import React from "react";
import "./classPanel.css";

function SinglePanel(prop) {
  return (
    <div className = "outerDiv">
      <div className = "classText">
        <h2 className="subheading">Class {props.number}</h2>
        <h4 className="subject-name">{props.subject}</h4>
      </div>
      <div className="classImages">
        <img src={props.imgURL1} alt="img1"></img>
      </div>
    </div>
  );
}

export default SinglePanel;
