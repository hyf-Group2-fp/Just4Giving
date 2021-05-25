import React, { useState } from 'react';
import { Form, Col, Button, InputGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';

function EditItem() {

  const index = useParams().id ;
  console.log(index) ;
  const good = useSelector(state => state.goods[index]) ;
  console.log(good) ;
  const [validated, setValidated] = useState(false);
  const [item, setItem] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [quality, setQuality] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState('');
  const [form, setForm] = useState(false);

  // use History
  const history = useHistory();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const newGood = {
        item: item,
        category: category,
        description: description,
        quality: quality,
        quantity: quantity,
        image: image,
      };
      console.log(newGood);
      setForm(true);
    }
    event.preventDefault();
    setValidated(true);

    // redirect
    history.push('/giverpofile');
  };
 

  return (
    <div className="forms">
      <h1 className="text-center formh1">What do you want to change?</h1>
      <div className="container formview mt">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group>
              <Form.File id="img" label="Image" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4">
              <Form.Label>Name</Form.Label>

              {/*<InputGroup hasValidation>*/}
              {/*<InputGroup.Prepend>*/}
              {/*  <InputGroup.Text id="item">What Is It</InputGroup.Text>*/}
              {/*</InputGroup.Prepend>*/}
              <Form.Control
                type="text"
                placeholder=" Laptop, Chair, etc..."
                aria-describedby="inputGroupPrepend"
                required
                onChange={(e) => setItem(e.target.value)}
              />
              <Form.Control.Feedback></Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label
                className="my-1 mr-2"
                htmlFor="inlineFormCustomSelectPref"
              >
                Categories
              </Form.Label>
              <Form.Control
                as="select"
                className="my-1 mr-sm-2"
                id="category"
                custom
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="0">Select...</option>
                <option value="Food">Food</option>
                <option value="Home & Garden">Home & Garden</option>
                <option value="Tools">Tools</option>
                <option value="Babies">Babies</option>
                <option value="Sports">Sports</option>
                <option value="Electronics">Electronics</option>
                <option value="Books">Books</option>
                <option value="Others">Others</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label
                className="my-1 mr-2"
                htmlFor="inlineFormCustomSelectPref"
              >
                Quality
              </Form.Label>
              <Form.Control
                as="select"
                className="my-1 mr-sm-2"
                id="quality"
                custom
                onChange={(e) => setQuality(e.target.value)}
              >
                <option value="0">Select...</option>
                <option value="New">New</option>
                <option value="Fairly used">Fairly used</option>
                <option value="Heavily used">Heavily used</option>
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
              {/*<Form.Control.Feedback></Form.Control.Feedback>*/}
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="12" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={3}
                placeholder="Please describe the details of the item, e.g. colour, condition, size, etc..."
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
  );
}
export default EditItem;
