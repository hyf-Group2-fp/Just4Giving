import axios from 'axios';
//import React, { useState } from 'react';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const ItemPreview = (props) => {
  // use history
  const history = useHistory();

  // access the state
  const giver_id = useSelector((state) => state.userInfo.user_id);
  // const category_id = useSelector(state => state.goodsInfo.)

  const url = `http://localhost:5000/api/goods`;
  // props
  const item = props.location.state.item;
  const description = props.location.state.description;
  const category = props.location.state.category;
  const quality = props.location.state.quality;
  const quantity = props.location.state.quantity;
  const image = props.location.state.image;

  let category_id = 0;
  if (category === 'Furnitures') {
    category_id = 1;
  }
  if (category === 'Food') {
    category_id = 2;
  }
  if (category === 'Tools') {
    category_id = 3;
  }
  if (category === 'Babies') {
    category_id = 4;
  }
  if (category === 'Electronics') {
    category_id = 5;
  }
  if (category === 'Sport') {
    category_id = 6;
  }
  if (category === 'Books') {
    category_id = 7;
  }
  if (category === 'Other') {
    category_id = 8;
  }
  if (image!==''){
    
  }
  console.log(category_id, image);

  // good object
  const newItem = {
    giver_id: giver_id,
    item_name: item,
    description: description,
    image: image,
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
      console.log(response);
    } catch (err) {
      console.error(err);
    }
    history.push('/profilegiver');
  }; 

  //wait for the image
  const getImg = () => {
    setTimeout(function(){
      document.getElementById('preview').src = 'assets/images/uploads/'+image;
  },2000);
  }
  getImg();
  return (
    <div>
      <h1 className="text-center formh1">Successfully JUST4GIVING it!</h1>
      <div className="container itemview">
        {/* preview */}
        <img
             src=""
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
