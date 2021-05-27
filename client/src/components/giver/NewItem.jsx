import React, { useState } from 'react';
import { Form, Col, Button, InputGroup } from 'react-bootstrap';
import { Redirect, useHistory } from 'react-router-dom';
import axios, { post } from 'axios';
import Resizer from 'react-image-file-resizer';

function NewItem() {
  const [validated, setValidated] = useState(false);
  const [item, setItem] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [quality, setQuality] = useState('');
  const [quantity, setQuantity] = useState('');
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

      
      //start image
      // alert(document.querySelector('input[type=file]').files[0].name)
      // alert(document.querySelector('input[type=file]').files)

      const file = document.querySelector('input[type=file]').files[0]
      const url = 'http://localhost:5000/api/upload/';
      const formData = new FormData();
      formData.append('image', file);
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
      axios.post(url, formData, config)
        .then((response) => {
          console.log(response.data);
        }).catch(err => {
          console.error({err});
      });

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
    history.push('/newgoods');
  };
  if (form) {
    return (
      <Redirect
        to={{
          pathname: '/itemview',
          state: { item, description, category, quality, quantity, image },
        }}
      />
    );
  }

  const onChangehandler = async (e) => {};

  return (
    <div className="forms">
      <h1 className="text-center formh1">What do you want to give?</h1>
      <div className="container formview mt">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group>
                <Form.File id="img" 
                  onChange={onChangehandler} 
                  label="Image"
                  name="image" 
                  
                  />
              
            {/* <form action="/api/upload" method="POST" enctype="multipart/form-data"> */}
                {/* <input type="file" name="image"> */}
                {/* <button type="submit">Submit</button> */}
            {/* </form>    */}
              {/* <Form.File id="img" onChange={onChangehandler} label="Image" name="image" /> */}
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4">
              <Form.Label>Name</Form.Label>
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
                <option value="Furnitures" data-id="1">Furnitures</option>
                <option value="Food" data-id="2">Food</option>
                <option value="Tools" data-id="3">Tools</option>
                <option value="Babies" data-id="4">Babies</option>
                <option value="Electronics" data-id="5">Electronics</option>
                <option value="Sport" data-id="6">Sport</option>
                <option value="Books" data-id="7">Books</option>
                <option value="Other" data-id="8">Other</option>
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
export default NewItem;
