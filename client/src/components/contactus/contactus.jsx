import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import axios from "axios"
import  { Redirect } from 'react-router-dom';
import pic from '../../assets/login/signin.png';
import { useForm, ValidationError} from '@formspree/react';

//Redux
import {useDispatch, useSelector} from "react-redux";
import {userGiver, userNeeder} from "../../redux/actions/userInfoAction.js";

function Contactus() {
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [state, handleSubmit] = useForm("xleajyly");
    const dispatch = useDispatch();

    if (state.succeeded) {
        return <p>Thank you for contacting us!</p>
    }

    return (
        <div className="forms">
            <h1 className="text-center formh1"> Contact Us</h1>
            <div className="container contactuscontainer">
                <Form
                    onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="first_name">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                name="first_name"
                                type="text"
                                minLength="3"
                                maxLength="20"
                                onChange={(e) => setFirst_name(e.target.value)}
                            />
                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                At least 3 letters
                            </Form.Control.Feedback>{" "}
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="last_name">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                name="last_name"
                                type="text"
                                minLength="3"
                                maxLength="20"
                                onChange={(e) => setLast_name(e.target.value)}
                            />
                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>{" "}
                            <Form.Control.Feedback type="invalid">
                                At least 3 letters
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                required
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />{" "}
                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Enter email address
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}/>

                    <Form.Row>
                        <Form.Group as={Col} md="12" controlId="message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                required
                                minLength="30"
                                rows={5}
                                name="message"
                                onChange={(e) => setMessage(e.target.value)}
                            />{" "}
                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Enter your message
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}/>
                    
                    <Button type="submit" className="btn-submit float-right" disabled={state.submitting}>
                        Submit
                    </Button>
                </Form>
                
            <img className="bg5" src={pic} alt="helping hands"/>
        </div>
</div>

    );
}

export default Contactus;













