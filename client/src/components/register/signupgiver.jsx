import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import axios from 'axios';

function Signupgiver() {
   const url = "http://localhost:5000/api/giver/signup";
    const [validated, setValidated] = useState(false);
    const[first_name, setFirst_name] = useState('');
    const[last_name, setLast_name] = useState('');
    const[age, setAge] = useState('');
    const[phone, setPhone] = useState('');
    const[address, setAddress] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[confirmpassword, setConfirmpassword] = useState('');


    const handleSubmit = (event) => {
       
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    else if(password!==confirmpassword){
        alert('password and confirmpassword does not match')
        event.stopPropagation();
    }
    else{
        const userdata={
            first_name:first_name,
            last_name:last_name,
            age:age,
            phone:phone,
            address:address,
            email:email,
            password:password
        }
        console.log(userdata);
        axios
                .post(url, userdata)
                .then((res) => {
                    console.log(res.userdata);
                })
                .catch((err) => {
                    console.error("There was an error!", err);
                });
    }
        event.preventDefault();
    
        setValidated(true);
        

      };
    
    return (
        <div className="forms">
             <h1 className="text-center formh1"> Who are you?</h1>
            <div className="container formview">
               
                <Form method="post" noValidate validated={validated} onSubmit={handleSubmit}>
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
                                min={18} max={100}
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
                                We'll never share your phone number with anyone else.
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
                                onChange={(e) => setAddress(e.target.value)}
                            />{" "}
                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Enter your street name at least 5 letters
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

                    <Button type="submit" id="formb">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Signupgiver;
