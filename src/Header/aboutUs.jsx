import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import mainLogo from "./Untitled-2.png";
import "../css files/about-us.css";
function AboutUs() {
  return (
    <div className="about-us">
      <Row>
        <Col>
          <div className="writing">
            <h2 className="subtitle">About Us</h2>
            <p>
              Fossaul Tutoring's Hour of Learning is a program that strives to
              help kids pique their interests in Math and Coding subjects. We
              offer free lessons for a variety of grades. Since May 8th, 2021,
              the program ran 54 classes and have had around 1080 attendances.
            </p>
            <Button className = "pgm-btn" href = "/classes">Programs</Button>
          </div>
        </Col>
        <Col>
          <img src={mainLogo} alt="logoImg"></img>
        </Col>
      </Row>
    </div>
  );
}

export default AboutUs;
