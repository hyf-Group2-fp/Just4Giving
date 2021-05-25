import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import pic from '../../assets/login/signin.png';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  signedUserInfo,
  signedUserError,
} from '../../redux/actions/userInfoAction';

function Login() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const userdata = {
        email: email,
        password: password,
      };
      //console.log(userdata);

      try {
        const response = await axios
          .post('http://localhost:5000/api/authenticate', userdata)

          .then((res) => {
            // dispatch action
            const user = res.data.user;
            dispatch(signedUserInfo(user));
            if (res.data.user.is_giver === true) {
              alert('giver');
              return;
            } else if (res.data.user.is_needer === true) {
              alert('needer');
              return;
            }
          });
      } catch (error) {
        alert('please check your credentials');
        dispatch(signedUserError());
        console.error('There was an error!', error);
      }
    }
    event.preventDefault();
    setValidated(true);
  };
  //choose what to do pass props with the data of the user
  const isGiver = useSelector((state) => state.userInfo.is_giver);
  const isNeeder = useSelector((state) => state.userInfo.is_needer);
  if (isGiver) {
    return <Redirect to={{ pathname: '/profilegiver' }} />;
  } else if (isNeeder) {
    return <Redirect to={{ pathname: '/profileneeder' }} />;
  }

  return (
    <div className="forms">
      <h1 className="text-center formh1">Sign-in</h1>
      <Card className="signincard">
        <Form
          className="signin"
          // method="post"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Row>
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
              </Form.Control.Feedback>{' '}
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
              />{' '}
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
