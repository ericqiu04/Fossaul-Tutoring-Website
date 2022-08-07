import React from "react";
import Panel from "./panel";

function createPanel(contact) {
  return (
    <Panel key = {contact.id} name={contact.name} imgURL={contact.img} subject={contact.subject} />
  );
}

export default createPanel;