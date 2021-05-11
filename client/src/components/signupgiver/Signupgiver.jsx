import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import Axios from "axios";
//import { Link } from "react-router-dom";

function Signupgiver() {
    const url = "";
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();

            event.stopPropagation();
        }

        Axios.post(url, {
            first_name: setValidated.first_name,
            last_name: setValidated.last_name,
            age: setValidated.age,
            phone: setValidated.phone,
            address: setValidated.address,
            email: setValidated.email,

            password: setValidated.password,
            confirmpassword: setValidated.confirmpassword,
        }).then((res) => {
            console.log(res.data);
        });

        console.log(setValidated);
    };

    function handle(event) {
        const newvalidated = { ...setValidated };
        newvalidated[event.target.id] = event.target.value;
        setValidated(newvalidated);
        console.log(newvalidated);
    }
    return (
        <div className="forms">
             <h1 className="text-center formh1"> Who are you?</h1>
            <div className="container formview">
               
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="first_name">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                value={setValidated.first_name}
                                onChange={(event) => handle(event)}
                                type="text"
                                minLength="3"
                                maxLength="20"
                            />
                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>{" "}
                            <Form.Control.Feedback type="invalid">
                                Atleast 3 letters
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="last_name">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                value={setValidated.first_name}
                                onChange={(event) => handle(event)}
                                type="text"
                                minLength="1"
                                maxLength="20"
                            />
                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>{" "}
                            <Form.Control.Feedback type="invalid">
                                Atleast 1 letter
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="age">
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                value={setValidated.age}
                                onChange={(event) => handle(event)}
                            />

                            <Form.Control.Feedback type="invalid">
                                Enter age.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationCustom01"
                        >
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="+32"
                                value={setValidated.phone}
                                onChange={(event) => handle(event)}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your phone number with anyone
                                else.
                            </Form.Text>
                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="12" controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                value={setValidated.address}
                                onChange={(event) => handle(event)}
                            />{" "}
                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Enter your street name.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="12" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                required
                                value={setValidated.email}
                                onChange={(event) => handle(event)}
                            />{" "}
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Enter email address.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="12" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={setValidated.password}
                                minLength="8"
                                maxLength="20"
                                required
                                value={setValidated.password}
                                onChange={(event) => handle(event)}
                            />{" "}
                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Password must be 8 letters
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group
                            as={Col}
                            md="12"
                            controlId="confirmpassword"
                        >
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={setValidated.confirmpassword}
                                minLength="8"
                                maxLength="20"
                                required
                                onChange={(event) => handle(event)}
                            />{" "}
                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Password must be 8 letters
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group>
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                        />
                    </Form.Group>

                    <Button type="submit" id="formb">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Signupgiver;
