import axios from 'axios';
//import React, { useState } from 'react';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {getCategoryId} from "./utils";

const ItemPreview = (props) => {
  // use history
  const history = useHistory();

  // access the state
  const giver_id = useSelector((state) => state.userInfo.user_id);

  const url = `http://localhost:5000/api/goods`;
  // props
  const item = props.location.state.item;
  const description = props.location.state.description;
  const category = props.location.state.category;
  const quality = props.location.state.quality;
  const quantity = props.location.state.quantity;
  const image = props.location.state.image;

  let category_id = getCategoryId(category);

  // good object
  const newItem = {
    giver_id: giver_id,
    item_name: item,
    description: description,
    image: image.name,
    quality: quality,
    quantity: quantity,
    category: category,
    available: 1,
    taken: 0,
    owner_id: giver_id,
    category_id: category_id
  };

  const handleNewItem = async () => {
    try {
      const response = await axios.post(url, newItem);
    } catch (err) {
      console.error(err);
    }
    history.push('/profilegiver');
  };

  return (
    <div>
      <h1 className="text-center formh1">Successfully JUST4GIVING it!</h1>
      <div className="container itemview">
        {/* preview */}
        <img
             src={`assets/images/uploads/${image.name}`}
             id="preview"
             width="477"
             height="477"
             alt="good"
        />
        <p>Name :{item}</p>
        <p>Category :{category}</p>
        <p>Quantity :{quantity}</p>
        <p>Quality :{quality}</p>
        <p>Item Description :{description}</p>
        <Button onClick={handleNewItem}>Submit</Button>
      </div>
    </div>
  );
};

export default ItemPreview;
