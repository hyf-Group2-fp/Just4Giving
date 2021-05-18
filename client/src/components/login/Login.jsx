
import React, { useState } from "react";
import { Form, Button,Card} from "react-bootstrap";
import  { Redirect } from 'react-router-dom'
import pic from '../../assets/login/signin.png'
import {useDispatch, useSelector} from "react-redux";
import {signIn} from "../../redux/actions/signInAction"
function Login(){
  //const url="http://localhost:5000/api/authenticate";
  const [validated,setValidated]=useState(false);
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const dispatch=useDispatch();
  const login =useSelector(state=>state.signIn.isSigned);
  const is_giver=useSelector(state=>state.signUp.is_giver)
  const notuser =useSelector(state=>state.signIn.signInError);
  const handleSubmit= async(event)=>{
    const form=event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
      const userdata={
        email:email,
        password:password
      };
      console.log(userdata);
      dispatch(signIn(userdata));
      // try{
      //   const response= await axios.post(url,userdata);
      //   console.log(response);
      // } catch(error){
      //   console.error('There was an error!',error);
      // }
      // if the user is giver
     // dispatch(logInGiver(userdata));
      // if the user is needer
      // dispatch(logInNeeder(userdata));
      if (login=== true){
        alert('successful login')
        if(is_giver===1){
          return (<Redirect to="/profilegiver" />)
        }
        else{
          return (<Redirect to="/profileneeder" />)
        }
      }
      else{
        alert('You dont have an account, please register')
      }
    }
    event.preventDefault();
    setValidated(true);
  };
//check user login successful
//check user is giver or is needer
//if needer go to needer profile
//if giver go to giver profile
  return(
      <div className="forms">
        <h1 className="text-center formh1">Sign-in</h1>
        <Card className="signincard" >
          <Form className="signin"
                method="post"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
          > <Form.Row>
            <Form.Group className="inputs" controlId="email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                  required
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Control.Feedback type="valid"></Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Enter email
              </Form.Control.Feedback>{" "}
            </Form.Group>
          </Form.Row>
            <Form.Row>
              <Form.Group className="inputs" controlId="password">
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
            <Button type="submit" id="formblogin">
              Sign-in
            </Button>
          </Form>
        </Card>
        <img className="bg3" src={pic} alt="helping hands" />
      </div>
  );
}
export default Login;