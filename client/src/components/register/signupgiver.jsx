import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import axios from "axios";

function Signupgiver() {
    const url = "";
    const [validated, setValidated] = useState(false);

    function handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else if (form.confirmpassword.value !== form.password.value) {
            alert("password doesnot match, please try again");
            event.preventDefault();
        } else {
            const user = {
                first_name: form.first_name.value,
                last_name: form.first_name.value,
                age: form.age.value,
                phone: form.phone.value,
                address: form.phone.value,
                email: form.email.value,
                password: form.password.value,
            };

            console.log(user);
            axios
                .post(url, user)
                .then((res) => {
                    console.log(res.user);
                })
                .catch((err) => {
                    console.error("There was an error!", err);
                });
        }

        setValidated(true);
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
                                name="first_name"
                                value={validated.first_name}
                                type="text"
                                minLength="3"
                                maxLength="20"
                            />
                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>{" "}
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="last_name">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                name="last_name"
                                value={validated.last_name}
                                type="text"
                                minLength="1"
                                maxLength="20"
                            />
                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>{" "}
                            <Form.Control.Feedback type="invalid">
                                Atleast 1 letters
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="age">
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                value={validated.age}
                                name="age"
                            />

                            <Form.Control.Feedback type="invalid">
                                Enter age.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="+32"
                                value={validated.phone}
                                name="phone"
                            />
                            
                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="12" controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                value={validated.address}
                                name="address"
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
                                value={validated.email}
                                name="email"
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
                                value={validated.password}
                                minLength="8"
                                maxLength="20"
                                required
                                name="password"
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
                                value={validated.confirmpassword}
                                required
                            />{" "}
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
