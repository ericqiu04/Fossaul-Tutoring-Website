import React from "react";
import ClassPanel from "./classPanel";
import SinglePanel from "./singlePanel";

function CreateClassPanel(pictures) {
  if (pictures.img2 == null) {
    return (
      <SinglePanel
        key={pictures.id}
        number={pictures.id}
        subject={pictures.subject}
        imgURL1={pictures.img1}
      />
    );
  } else {
    return (
      <>
        <ClassPanel
          key={pictures.id}
          number={pictures.id}
          subject={pictures.subject}
          imgURL1={pictures.img1}
          imgURL2={pictures.img2}
        />
      </>
    );
  }
}

export default CreateClassPanel;
