import React from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";

function Disclaimer(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Title
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col >
                text
              </Col>
              <Col>
                text
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

  export default Disclaimer;
  
//   function App() {
//     const [modalShow, setModalShow] = useState(false);
  
//     return (
//       <>
//         <Button variant="primary" onClick={() => setModalShow(true)}>
//           Launch modal with grid
//         </Button>
  
//         <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
//       </>
//     );
//   }
  
//   render(<App />);



// function Disclaimer() {
//     return (
//       <div className="bg">
//         <p>Disclaimer</p>
//       </div>
//     );
//   }
//   export default Disclaimer;