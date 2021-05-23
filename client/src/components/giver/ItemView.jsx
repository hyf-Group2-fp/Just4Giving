import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom' ;
import {useDispatch, useSelector} from "react-redux";
import {Button} from "react-bootstrap";
import cloneDeep from 'lodash/cloneDeep';
import axios from "axios";

// Redux
import {createGoods } from '../../redux/actions/goodsInfoAction' ;

const ItemView =() => {
    // get the item id from the url
    const itemIndex =useParams().id;
    console.log(itemIndex) ;

    // access goods
    const goods = useSelector(state => state.goods);

    // copy goods state
    const goods_copy = cloneDeep(goods) ;
    const currentGood = goods_copy[itemIndex] ;
    const currentGoodId = currentGood.goods_id ;




    // dispatch
    const dispatch = useDispatch() ;

    //edit Item
    const editItem = () => {

    }

    //delete item
    const deleteItem = async () => {
        for (const good in goods_copy){
            if(good === itemIndex){
                delete goods_copy[good] ;
            }

            dispatch(createGoods(goods_copy)) ;
            const response = axios.delete(`http://localhost:5000/api/goods/${currentGoodId}`);


        }
    }

    return (
        <div>

                <h1>Successfully Just4Giving </h1>
                <h4>Item name : {currentGood.item_name}</h4>
                <h4>Description : {currentGood.description}</h4>
                <h4>Category : {currentGood.category}</h4>
                <h4>Quantity : {currentGood.quantity}</h4>
                <h4>Quality : {currentGood.quality === 1 ? 'New' :'Used'}</h4>
                <Button onClick={editItem}>Edit</Button>
                <Button onClick={deleteItem}>Delete</Button>

        </div>
    )
};


export default ItemView ;