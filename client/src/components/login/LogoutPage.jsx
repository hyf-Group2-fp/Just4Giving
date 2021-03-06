import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import pic from '../../assets/login/signin.png';
import Logout from "../../Logout";

function LogoutPage() {

    return (
      <div className="forms">
        <Logout/>
        <h1 className="text-center formh1">You are logged out</h1>
        <Container>
          <Row>
            <Col>
              <img className="bg3" src={pic} alt="helping hands"/>
            </Col>
          </Row>
        </Container>
      </div>
    );
}
export default LogoutPage;