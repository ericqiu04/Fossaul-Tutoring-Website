import logo from "./logo.svg";
import { React, useState, useEffect } from "react";
import ContactPop from "./contact-popup";
import { Nav, Navbar, Container } from "react-bootstrap/";
import ContactUs from "../Extra Stuff/contact-us";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css files/nav.css";
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
          <Navbar.Brand href="#home" className="n-item">
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
            <Nav.Item>
              <Nav.Link href="#home" className="n-item">
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#About Us" className="n-item">
                About Us
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#Team" className="n-item">
                Team
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#" className="n-item">
                Programs
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                className="n-item"
                href="#"
                onClick={() => setButtonPopup(true)}
              >
                Contact Us
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>

      <ContactPop trigger={buttonPopup} setTrigger={setButtonPopup}>
        <ContactUs />
      </ContactPop>
    </div>
  );
}

export default NavigationBar;
