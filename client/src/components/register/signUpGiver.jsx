import React, { useState } from "react";
import { Form, Col, Button, } from "react-bootstrap";
import axios from "axios";
import  { Redirect } from 'react-router-dom';
import Disclaimer from "../disclaimer/Disclaimer";

//Redux
import {useDispatch, useSelector} from "react-redux";
import {userGiver} from "../../redux/actions/userInfoAction.js";

function SignUpGiver(props) {
    const url = "http://localhost:5000/api/giver/signup";
    const [validated, setValidated] = useState(false);
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [age, setAge] = useState("");
    const [phone, setPhone] = useState("");
    const [street, setStreet] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [modalShow, setModalShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const dispatch = useDispatch();

    // get the giver
    const usertype = useSelector(state => state.userInfo.is_giver);
    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else if (password !== confirmpassword) {
            setErrorMessage("Password and Confirm password are not same, try again.");
           // alert("password and confirmpassword does not match");
            event.stopPropagation();
        } else {
            const userdata = {
                first_name: first_name,
                last_name: last_name,
                age: age,
                phone: phone,
                street: street,
                description: "no description",
                email: email,
                password: password,
                is_giver:1,
                is_needer:0,
                agreement:1
            };


            try {
                const response = await axios.post(url, userdata).then(
                    (res) => {

                        console.log(res.data);


                        // dispatch action
                        dispatch(userGiver(userdata ));


                    }
                )
            } catch (error) {
                setErrorMessage("Email already exist, Please try Sign In.");
                // alert('email already exist, please try login');
                console.error("There was an error!", error);
            }
        }
        event.preventDefault();
        setValidated(true);
    };
    if(usertype === 1 ) return (<Redirect to={{ pathname: '/profilegiver' }} />
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
                        <Form.Group as={Col} md="2" controlId="age">
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                min={18}
                                max={100}
                                name="age"
                                onChange={(e) => setAge(e.target.value)}
                            />
                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Enter age between 18-100
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
                                Enter your street name in at least 5 letters
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
                    {/* <a href="" onClick={()=>setModalShow(true)}> */}
                        <Form.Check
                            required
                            label="Agree to the terms and conditions "
                            feedback="You must agree before submitting."
                        /> 
                        {/* </a> */}
                        {/* <Disclaimer show={modalShow} onHide={() => setModalShow(false)} /> */}
                    </Form.Group>
                    {errorMessage && <div className="error"> {errorMessage} </div>}
                    <Button type="submit" className="formb">
                        Submit
                    </Button>
                  
                </Form>
            </div>
        </div>
    );
}
export default SignUpGiver;













