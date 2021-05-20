import axios from "axios";
import React from "react";
import {Button} from 'react-bootstrap'

const Itemview = props => {
  const url="";
    const item=( props.location.state.item) ;
    const description=(props.location.state.description);
    const category=(props.location.state.category);
    const quality=(props.location.state.quality);
    const quantity=(props.location.state.quantity);
    const newItem={
        item:item,
        description:description,
        quality:quality,
        quantity:quantity,
        category:category,
    }
    console.log(newItem);
    const handleNewItem= () =>{
      const response = axios.post(url, newItem) ;
      console.log(response) ;


    }
  return (<div>
      <h1 className="text-center formh1">Successfully JUST4GIVING it!</h1>
      <div className="container itemview">
<p>Name             :{item}</p>
<p>Category         :{category}</p>
<p>Quantity         :{quantity}</p>
<p>Quality          :{quality}</p>
<p>Item Description :{description}</p>

<Button onSubmit={handleNewItem}>Submit</Button>

</div>
  </div>
    
  );
};

export default Itemview;