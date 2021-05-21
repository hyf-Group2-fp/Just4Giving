import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import axios from "axios";
import  { Redirect } from 'react-router-dom'

// Redux
import {useDispatch, useSelector} from "react-redux";
import {userNeeder} from "../../redux/actions/userInfoAction.js";

function SignUpNeeder() {
    const [validated, setValidated] = useState(false);
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [age, setAge] = useState("");
    const [phone, setPhone] = useState("");
    const [street, setStreet] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");



    const dispatch = useDispatch();

    // get the needer
    const usertype = useSelector(state => state.userInfo.is_needer);
    const url = "http://localhost:5000/api/needer/signup" ;

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else if (password !== confirmpassword) {
            alert("password and confirmpassword does not match");
            event.stopPropagation();
        } else {
            const userdata = {
                first_name: first_name,
                last_name: last_name,
                age: age,
                phone: phone,
                street: street,
                description: description,
                email: email,
                password: password,
                is_giver: 0,
                is_needer: 1,
                agreement: 1
            };


            try {
                const response = await axios.post(url, userdata).then(
                    (res) => {

                        console.log(res);
                        // dispatch action
                        dispatch(userNeeder(userdata));
                    }
                )
            } catch (error) {
                alert('email already exist, please try login');
                console.error("There was an error!", error);
            }
        }

        event.preventDefault();
        setValidated(true);
    };
    if(usertype === 1) return (<Redirect to={{ pathname: '/profileneeder' }} />
    );


    return (
        <div className="forms">
            <h1 className="text-center formh1"> Who are you?</h1>
            <div className="container formview">
                <Form

                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                >
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
                                Atleast 3 letters
                            </Form.Control.Feedback>{" "}
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="last_name">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                name="last_name"
                                type="text"
                                minLength="1"
                                maxLength="20"
                                onChange={(e) => setLast_name(e.target.value)}
                            />
                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>{" "}
                            <Form.Control.Feedback type="invalid">
                                Atleast 1 letter
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="2" controlId="age">
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                min={18}
                                max={120}
                                name="age"
                                onChange={(e) => setAge(e.target.value)}
                            />
                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Enter age between 18-120
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
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                            <Form.Text className="text-muted">
                                We'll never share your phone number with anyone
                                else.
                            </Form.Text>
                            <Form.Control.Feedback type="invalid">
                                Enter phone number.
                            </Form.Control.Feedback>
                        </Form.Group>
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
                                Enter email address.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="12" controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                minLength="5"
                                name="address"
                                onChange={(e) => setStreet(e.target.value)}
                            />{" "}
                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Enter your street name at least 5 letters
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="12" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                required
                                minLength="200"
                                rows={3}
                                name="description"
                                onChange={(e) => setDescription(e.target.value)}
                            />{" "}
                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Explain your situation in at least 200 letters
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="12" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                minLength="8"
                                maxLength="20"
                                required
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
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
                            onChange={(e) => setConfirmpassword(e.target.value)}
                        >
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                minLength="8"
                                maxLength="20"
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
                    <Button type="submit" className="formb">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}
export default SignUpNeeder;