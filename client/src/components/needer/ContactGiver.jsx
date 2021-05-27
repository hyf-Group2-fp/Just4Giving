import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import moment from 'moment';
import { Form, Button } from 'react-bootstrap';

// Redux
import { createGoods } from '../../redux/actions/goodsInfoAction';

const ContactGiver = () => {
    const [good, setGood] = useState({});
    const [giver, setGiver] = useState({});
    // get the good id
    const { id } = useParams();
    console.log(id);

    // dispatch
    const dispatch = useDispatch();

    // request the good details

    const fetchGood = async () => {
        const res = await axios.get(`http://localhost:5000/api/goods/${id}`);
        const good = res.data.good;
        console.log(good);
        setGood(good);
        dispatch(createGoods(good));
    };

    useEffect(() => {
        fetchGood();
    }, []);

    // giver id

    const giver_id = useSelector((state) => state.goods.giver_id);
    console.log(giver_id);
    // fetch the giver email

    const fetchGiver = async () => {
        const res = await axios.get(
            `http://localhost:5000/api/user/${giver_id}`
        );
        const giver = res.data.giver;
        console.log(res.data.giver);
        setGiver(giver);
    };
    useEffect(() => {
        fetchGiver();
    }, []);

    return (
        <div>
            <div>Image</div>
            <div>
                <h4>{good.item_name}</h4>
                <p>
                    {moment
                        .utc(good.createdAt)
                        .local(false)
                        .startOf('seconds')
                        .fromNow()}
                </p>
                <p>{good.category}</p>
                <p>{good.description}</p>
                <p>Quantity: {good.quantity}</p>
                <p>Quality: {good.quality}</p>
            </div>
            <div>
                <p>{giver.email}</p>
            </div>
            <Form>
                <Form.Group controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as='textarea' rows={3} />
                </Form.Group>
                <Button variant='success'>Submit</Button>
            </Form>
        </div>
    );
};

export default ContactGiver;
