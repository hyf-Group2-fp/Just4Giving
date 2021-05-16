import React, {useState} from "react";
import { Navbar, Nav } from "react-bootstrap";
// import { Brand } from "react-bootstrap/lib/Navbar";
import logo from "../../assets/landingpage/logo22.png";
function Navigation() {
    const [isAuthenticated , setIsAuthenticated] = useState(false);
    const authenticatedNavBar = () => {
        return (
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="row justify-content-end links">
                    <Nav.Item>
                        <Nav.Link href="/aboutus">About Us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/logout">Logout</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        )};
    const unauthenticatedNavBar = () => {
        return (
            <Navbar>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="row justify-content-end links">
                        <Nav.Item>
                            <Nav.Link href="/aboutus">About Us</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/login">Login</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )};
    const brand = () => {
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
            </Navbar>
        )};
    return (
        <div className="margin-t-b">
            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
            {isAuthenticated ? authenticatedNavBar() : unauthenticatedNavBar()}
            {!isAuthenticated ? brand():null }
        </div>
    )
}
export default Navigation;