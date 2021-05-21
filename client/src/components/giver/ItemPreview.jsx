import axios from "axios";
import React, {useState} from "react";
import {Button} from 'react-bootstrap'
import {useSelector} from "react-redux";

const ItemPreview = (props) => {
    // access the state
    const giver_id = useSelector(state => state.userInfo.user_id) ;
    // const category_id = useSelector(state => state.goodsInfo.)

    const url=`http://localhost:5000/api/goods`;
    // props
    const item=( props.location.state.item) ;
    const description=(props.location.state.description);
    const category=(props.location.state.category);
    const quality=Number(props.location.state.quality);
    const quantity=(props.location.state.quantity);




    // good object
    const newItem ={
        giver_id:giver_id,
        item_name:item,
        description:description,
        image:'',
        quality:quality,
        quantity:quantity,
        category:category,
        available:1,
        taken:0 ,
        owner_id: giver_id,
        category_id: 5,
        createdAt: "2021-05-19T17:52:20.000Z",
        updatedAt: "2021-05-19T17:52:20.000Z"
    }




    const handleNewItem= async () =>{
        try{
            const response = await axios.post(url, newItem) ;
            console.log(response) ;
        } catch (err) {
            console.error(err) ;

        }



    }
    return (<div>
        <h1 className="text-center formh1">Successfully JUST4GIVING it!</h1>
        <div className="container itemview">
            <p>Name             :{item}</p>
            <p>Category         :{category}</p>
            <p>Quantity         :{quantity}</p>
            <p>Quality          :{quality}</p>
            <p>Item Description :{description}</p>
           <Button onClick={ handleNewItem}>Submit</Button>

        </div>
    </div>
    )
};



export default ItemPreview;