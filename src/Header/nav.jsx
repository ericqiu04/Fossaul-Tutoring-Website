import logo from "./logo.svg";
import { React, useState, useEffect } from "react";
import ContactPop from "./contact-popup";
import { Nav, Navbar, Container } from "react-bootstrap/";
import ContactUs from "../Extra Stuff/contact-us";
import "bootstrap/dist/css/bootstrap.min.css";



function NavigationBar() {
  const [buttonPopup, setButtonPopup] = useState(false);

  const [fadeProp, setFadeProp] = useState({
    fade: "fade-in",
  });

  useEffect(() => {
    const timeOut = setInterval(() => {
      if (fadeProp.fade == "fade-in") {
        setFadeProp({
          fade: "fade-out",
        });
      }
    });
  });

  return (
    <div>
      <Navbar
        className="navbar-static-top"
        bg="light"
        variant="light"
        expand="lg"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="/">
           <img
              src={logo}
              width="30"
              height="30"
              alt=""
              className="d-inline-block align-top"
            />{" "}
            Fossaul Tutoring
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href = "/">Home</Nav.Link>
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href = "/classes">Classes</Nav.Link>
            <Nav.Link href="#" onClick={() => setButtonPopup(true)}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <ContactPop trigger={buttonPopup} setTrigger={setButtonPopup}>
        <ContactUs/>
      </ContactPop>
    </div>
  );
}

export default NavigationBar;
