import React from "react";
import {Modal, Container, Row, Col, Button} from "react-bootstrap";
import '../../App.css';
function Disclaimer(props) {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            size="xl"
            className="bg">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Privacy Policy | Disclaimer
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    {/* terms of use */}
                    <Row>
                        <Col >
                            <div className="disclaimer-card p-4">
                                <h4>Terms of Use</h4>
                                <p>
                                Terms of use: By using the app, you consent to the terms of use, if you do not consent; do not use App site. The services provided through our JUST4GIVING App require you to open an account (sign up). You are responsible (liable) for maintaining the confidentiality of the information you hold for your account, including your password and activity that occurs under your account; so keep your information confidential. You may be held liable for misuse or abuse for any other user of our App due to someone else using your email, password or account as a result of your fault to keep your account information confidential. Any feedback (comment) you provided on our site shall be regarded as non-confidential, will be free to use such information uninhibitedly.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    {/* privacy */}
                    <Row>
                        <Col>
                            <div className="disclaimer-card p-4">
                                <h4>Privacy</h4>
                                <p>
                                    <ul>
                                        <li>We won’t pass on your phone number to any organisation outside JUST4GIVING.</li>
                                        <li>As a giver you can get notification in your email from the needer who interest in your item.</li>
                                        <li>As a needer you can see the email of the giver and contact them via email.</li>
                                        <li>If you put phone numbers, postal addresses into your posts on JUST4GIVING, other people will be able to see them. If you're concerned about this, don't do it!</li>
                                    </ul>
                                </p>                               
                            </div>
                        </Col>
                    </Row>
                    {/* disclaimer */}
                    <Row>
                        <Col>
                            <div className="disclaimer-card p-4">
                                <h4>Disclaimer</h4>
                                <p>
                                    <ul>
                                        <li>JUST4GIVING puts people who wants to give items in touch with people who want those items. Because of how it works, JUST4GIVING never sees or checks items and they may not be in working order. Any agreement you reach about any items will be between the person requesting items and you.</li>
                                        <li>Please use common sense when posting to JUST4GIVING or collecting an item. Example for the safety, most collections occur at home, but if you're worried about that, arrange to meet in a cafe or other public place.</li>
                                        <li>JUST4GIVING is a free stuff app, so you should never hand over money.</li>
                                        <li>If you are unlucky enough to be scammed, please report it to the Police and to us.</li>
                                    </ul>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                {/* <Button onClick={props.onHide}>Close</Button> */}
            </Modal.Footer>
        </Modal>
    );
}

export default Disclaimer;