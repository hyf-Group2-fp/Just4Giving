import React, { useState } from "react";
import { Navbar, Nav, Modal } from "react-bootstrap";
import logo from "../../assets/landingpage/logo22.png";
function Navigation() {
  const [show, setShow] = useState(false);
  const handleShowAboutUs = () => setShow(true);
  return (
    <div className="margin-t-b">
      <Navbar collapseOnSelect expand="lg" sticky="top">
        <Navbar>
          <Navbar.Brand className="main-brand" href="/">
            <img
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="just4giving logo"
            />
            JUST4GIVING
          </Navbar.Brand>
        </Navbar>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="row justify-content-end links">
            <Nav.Item>
              <Nav.Link onClick={handleShowAboutUs}>About Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Modal
        size={"xl"}
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            <h1>About Us</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Every Kindness Counts </h3>
          <p>
            Just4giving is more than just a list of goods. It’s a place of one’s
            dare to care, to transform the lives of unprivileged people in the
            society.
          </p>
          <hr />
          <h3>Vision</h3>
          <p>Every human being have rights and deserve to have a good life. </p>
          <hr />
          <h3>Mission</h3>
          <p>
            Just4giving is a platform that welcomes underprivileged individuals
            or new comers with the aim of offering them a way to support them in
            positively material growing. Just4giving is also a place for good
            people who wants to share they stuff with others. While doing so,
            providing them a place to connected is our pleasure.
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default Navigation;
