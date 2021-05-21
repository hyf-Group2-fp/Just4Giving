import React, {useState} from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/landingpage/logo22.png";
import {useSelector} from "react-redux";

function Navigation() {
    // check if the user is sign in
    const signIn = useSelector(state => state.userInfo.signedIn) ;

    const authenticatedNavBar = () => {
        return (
            <Navbar collapseOnSelect expand="lg" sticky="top">
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
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="row justify-content-end links">
                        <Nav.Item>
                            <Nav.Link href="/aboutus">About Us</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/logout">Log Out</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        )};
    const unauthenticatedNavBar = () => {
        return (
                <Navbar collapseOnSelect expand="lg" sticky="top">
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
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="row justify-content-end links">
                                <Nav.Item>
                                    <Nav.Link href="/aboutus">About Us</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/login">Log In</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
        )};

    return (
        <div className="margin-t-b">
             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <>
            { signIn ?   authenticatedNavBar() : unauthenticatedNavBar()}
            </>
        </div>
    )
}
export default Navigation;