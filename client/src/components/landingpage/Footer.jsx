import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Footer() {
  return (
    <div className="main-footer">
      <Navbar
        className="d-flex justify-content-between"
        sticky="Bottom"
        collapseOnSelect
        expand="lg"
      >
        <Nav>
          <Nav.Item>
            <Nav.Link className="footer-priv" href="#privacy">
              | Privacy Policy | Disclaimer |
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Nav>Copyright © 2021 Hack Your Future | All Rights Reserved |</Nav>

        <Nav>
          <Nav.Item className="footer-item">
            <i
              className="fa fa-envelope-square fa-2x mail"
              style={{ paddingRight: "20px" }}
            ></i>
            <a href="https://github.com/hyf-Group2-fp/Just4Giving">
              <i className="fa fa-github fa-2x github" aria-hidden="true"></i>
            </a>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
}
export default Footer;
