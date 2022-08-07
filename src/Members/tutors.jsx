import React from "react";
import createPanel from "./createPanel";
import tutors from "../Js Files/Tutors";

function Tutor() {
  return (
    <div className="imgPanels">
      <h2 className="subtitles">Directors</h2>
      {tutors.map(createPanel)}
    </div>
  );
}

export default Tutor;
