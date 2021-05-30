import React, {useState} from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/landingpage/logo22.png";
import {useSelector} from "react-redux";
//import Disclaimer from "../disclaimer/Disclaimer";
import Aboutus from "../aboutus/Aboutus";

function Navigation() {
    //modal disclaimer
    const [modalShow, setModalShow] = useState(false);
    // check if the user is sign in
    const signIn = useSelector(state => state.userInfo.signedIn) ;

    const authenticatedNavBar = () => {
        return (

            <div>
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
                          <Nav.Link onClick={() => setModalShow(true)}>
                            About Us
                          </Nav.Link>
                          <Aboutus show={modalShow} onHide={() => setModalShow(false)} />
                        </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/logout">Sign Out</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )};
    const unauthenticatedNavBar = () => {
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
                                <Nav.Link onClick={() => setModalShow(true)}>
                                  About Us
                                </Nav.Link>
                                <Aboutus show={modalShow} onHide={() => setModalShow(false)} />
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/login">Sign In</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )};

    return (
        <div  >
             {/*<Navbar.Toggle aria-controls="responsive-navbar-nav" />*/}
            <>
            { signIn ?   authenticatedNavBar() : unauthenticatedNavBar()}
            </>
        </div>
    )
}
export default Navigation;