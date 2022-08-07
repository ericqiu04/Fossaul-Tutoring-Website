import React from "react";
import createPanel from "./createPanel";
import founders from "../Js Files/Founders";


function Founders() {
  return (
    <div className = "imgPanels">
      <h2 className="subtitles">Founders</h2>
      {founders.map(createPanel)}
    </div>
  );
}

export default Founders;
