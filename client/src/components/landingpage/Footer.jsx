import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Disclaimer from "../disclaimer/Disclaimer";
import {useHistory} from "react-router-dom";
 


function Footer() {
  //modal disclaimer
  const [modalShow, setModalShow] = useState(false);
  const history = useHistory()
  return (
    <footer className="main-footer mt-auto">
      <Navbar
        className="d-flex justify-content-between"
        sticky="Bottom"
        collapseOnSelect
        expand="lg"
      >
        <Nav>
          <Nav.Item>
            <Nav.Link className="footer-priv" onClick={() => setModalShow(true)}>
              | Privacy Policy | Disclaimer |
            </Nav.Link>
            <Disclaimer show={modalShow} onHide={() => setModalShow(false)} />
          </Nav.Item>
        </Nav>

        <Nav>Copyright © 2021 Hack Your Future | All Rights Reserved |</Nav>

        <Nav>
          <Nav.Item className="footer-item">
            <i 
            onClick={()=> history.push('/contactus') } 
              className="fa fa-envelope-square fa-2x mail"
              style={{ paddingRight: "20px" }}
            ></i>
            <a href="https://github.com/hyf-Group2-fp/Just4Giving" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github fa-2x github" aria-hidden="true"></i>
            </a>
          </Nav.Item>
        </Nav>
      </Navbar>
    </footer>
  );
}
export default Footer;
