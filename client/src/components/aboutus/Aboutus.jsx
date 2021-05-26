import React from "react";
import {Modal, Container, Row, Col} from "react-bootstrap";
import '../../App.css';

function Aboutus(props) {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            size="xl"
            className="bg">
            <Modal.Header closeButton>
                <Modal.Title
                    id="contained-modal-title-vcenter"
                    className="p-2 modal-title text-white w-100 text-center">
                    About us
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    {/* every kindness */}
                    <Row>
                        <Col lg="4"></Col>
                        <Col >
                            <div className="aboutus-card p-5 m-4" id="kindness">
                                <h4 className="text-center text-white aboutus-title">Every Kindness Count</h4>
                                <div className="aboutus-text text-white mt-4">
                                    Just4giving is more than just a list of goods. It’s a place of one’s dare to
                                    care, to transform the lives of unprivileged people in the society.
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* vision */}
                    <Row>
                        <Col>
                            <div className="aboutus-card p-5 m-4" id="vision">
                                <h4 className="text-center text-white aboutus-title">Vision</h4>
                                <div className="aboutus-text text-white mt-4">
                                    Every human being have rights and deserve to have a good life.
                                </div>
                            </div>
                        </Col>
                        <Col lg="4">
                            <div className="img-container d-flex justify-content-center align-items-end">
                                {/* <div id="img-humaans-space"></div> */}
                            </div>
                        </Col>
                    </Row>
                    {/* mission */}
                    <Row>
                        <Col lg="4">
                            <div className="img-container d-flex justify-content-center align-items-end">
                                <div id="img-humaans-3-caharacters"></div>
                            </div>
                        </Col>
                        <Col>
                            <div className="aboutus-card p-5 m-4" id="mission">
                                <h4 className="text-center text-white aboutus-title">Mission</h4>
                                <div className="aboutus-text text-white mt-4">
                                    Just4giving is a platform that welcomes underprivileged individuals or new
                                    comers with the aim of offering them a way to support them in positively
                                    material growing. Just4giving is also a place for good people who wants to share
                                    they stuff with others. While doing so, providing them a place to connected is
                                    our pleasure.
                                </div>
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

export default Aboutus;