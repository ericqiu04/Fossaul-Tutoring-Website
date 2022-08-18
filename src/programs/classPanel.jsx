import React, { useEffect } from "react";
import "./classPanel.css"
import Aos from "aos";
import "aos/dist/aos.css";
function ClassPanel(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className = "outerDiv" data-aos="fade-up">
      <div className="classText">
        <h2 className="subheading">Class {props.number}</h2>
        <h4 className="subject-name">{props.subject}</h4>
      </div>
      <div className="classImages">
        <img className = "image1" src={props.imgURL1} alt="img1"></img>
        <img className = "image2" src={props.imgURL2} alt="img1"></img>
      </div>
    </div>
  );
}

export default ClassPanel;
