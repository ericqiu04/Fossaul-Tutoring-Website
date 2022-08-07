import React from "react";
import createPanel from "./createPanel";
import directors from "../Js Files/Directors";

function Directors() {
  return (
    <div className="imgPanels">
      <h2 className="subtitles">Directors</h2>
      {directors.map(createPanel)}
    </div>
  );
}

export default Directors;
