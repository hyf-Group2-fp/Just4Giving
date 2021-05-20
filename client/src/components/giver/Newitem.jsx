import react, { useState } from 'react';
import { Form, Col, Button,InputGroup } from 'react-bootstrap';
import  { Redirect } from 'react-router-dom'
function Newitem(){
    const [validated, setValidated] = useState(false);
const[item, setItem]=useState("");
const[description, setDescription]=useState('');
const[category,setCategory]=useState("");
const[quality,setQuality]=useState("");
const[quantity,setQuantity]=useState("");
const[form, setForm]=useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
        event.stopPropagation();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{
    const newitem={
        item:item,
        category:category,
        description:description,
        quality:quality,
        quantity:quantity
    }
console.log(newitem);
setForm(true);
}
event.preventDefault();
    setValidated(true);
    
  };
  if(form){
    return (<Redirect to={{ pathname: '/itemview', state:{item,description,category,quality,quantity }}} />)
  }

    return(
        <div className="forms">
        <h1 className="text-center formh1">What you want to give?</h1>
        <div className="container formview mt">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
            <Form.Group>
    <Form.File id="img" label="Upload image" />
  </Form.Group>
            </Form.Row>
      <Form.Row>
      <Form.Group as={Col} md="4" >
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Prepend>
              <InputGroup.Text id="item">what is it</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              placeholder="Enter name"
              aria-describedby="inputGroupPrepend"
              required
              onChange={(e) => setItem(e.target.value)}
            />
            <Form.Control.Feedback>
              
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Row>
      <Form.Row>
      <Form.Group as={Col} md="6" >
      <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
    Categories
  </Form.Label>
  <Form.Control
    as="select"
    className="my-1 mr-sm-2"
    id="category"
    custom
    onChange={(e) => setCategory(e.target.value)}
  >
    <option value="Cloths">Cloths</option>
    <option value="Books">Books</option>
    <option value="Furniture">Furniture</option>
    <option value="Tools">Tools</option>
  </Form.Control>
  </Form.Group>
  <Form.Group as={Col} md="4">
  <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
    Quality
  </Form.Label>
  <Form.Control
    as="select"
    className="my-1 mr-sm-2"
    id="quality"
    custom
    onChange={(e) => setQuality(e.target.value)}
  >
    <option value="New">New</option>
    <option value="Fairly used">Fairly used</option>
    <option value="Heavily used">Heavily used</option>
   {/* // <option value="Tools">Tools</option> */}
  </Form.Control>
  </Form.Group>
  <Form.Group as={Col} md="2" controlId="quantity">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                min={0}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                            <Form.Control.Feedback></Form.Control.Feedback>
                            
                        </Form.Group>
      </Form.Row>
      
      <Form.Row>
        <Form.Group as={Col} md="12" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={3}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Group>
        </Form.Row>
        <Button type="submit" className="formb">
                        Submit
                    </Button>
        </Form>
        </div>
        </div>
    )
}
export default Newitem;