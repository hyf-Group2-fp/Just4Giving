import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
//import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function EditItem() {
    const [validated, setValidated] = useState(false);
    const [item, setItem] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [quality, setQuality] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [image, setImage] = useState('');
    // const [form, setForm] = useState(false);

    // use History
    const history = useHistory();

    // show the previous good properties
    // get the selected good index
    const { id } = useParams();

    useEffect(() => {
        const fetchGood = async () => {
            const response = await axios.get(
                `http://localhost:5000/api/goods/${id}`
            );
            const good = response.data.good;
            console.log(good);
            setImage(good.image);
            setItem(good.item_name);
            setQuantity(good.quantity);
            setDescription(good.description);
            setQuality(good.quality);
            // if (good.quality == 1) {
            //   setQuality('New');
            // } else if (good.quality == 2) {
            //   setQuality('Fairly used');
            // } else {
            //   setQuality('used');
            // }
        };
        fetchGood();
    }, []);

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            const newGood = {
                item_name: item,
                category: category,
                description: description,
                quality: quality,
                quantity: quantity,
                image: image,
            };
            console.log(newGood);

            try {
                const response = await axios.put(
                    `http://localhost:5000/api/goods/${id}`,
                    newGood
                );
                console.log('response', response);
            } catch (err) {
                console.error(err);
            }
            // setForm(true);
        }
        event.preventDefault();
        setValidated(true);

        // redirect
        history.push('/profilegiver');
    };

    return (
        <div className='forms'>
            <h1 className='text-center formh1'>What do you want to change?</h1>
            <div className='container formview mt'>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group>
                            <Form.File id='img' label='Image' />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md='4'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type='text'
                                // placeholder=" Laptop, Chair, etc..."
                                aria-describedby='inputGroupPrepend'
                                required
                                onChange={(e) => setItem(e.target.value)}
                                value={item}
                            />
                            <Form.Control.Feedback></Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md='6'>
                            <Form.Label
                                className='my-1 mr-2'
                                htmlFor='inlineFormCustomSelectPref'>
                                Categories
                            </Form.Label>
                            <Form.Control
                                as='select'
                                className='my-1 mr-sm-2'
                                id='category'
                                custom
                                onChange={(e) => setCategory(e.target.value)}>
                                <option value='0'>Select...</option>
                                <option value='Furnitures' data-id='1'>
                                    Furnitures
                                </option>
                                <option value='Food' data-id='2'>
                                    Food
                                </option>
                                <option value='Tools' data-id='3'>
                                    Tools
                                </option>
                                <option value='Babies' data-id='4'>
                                    Babies
                                </option>
                                <option value='Electronics' data-id='5'>
                                    Electronics
                                </option>
                                <option value='Sport' data-id='6'>
                                    Sport
                                </option>
                                <option value='Books' data-id='7'>
                                    Books
                                </option>
                                <option value='Other' data-id='8'>
                                    Other
                                </option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} md='4'>
                            <Form.Label
                                className='my-1 mr-2'
                                htmlFor='inlineFormCustomSelectPref'>
                                Quality
                            </Form.Label>
                            <Form.Control
                                as='select'
                                className='my-1 mr-sm-2'
                                id='quality'
                                custom
                                value={quality}
                                onChange={(e) => setQuality(e.target.value)}>
                                <option value='0'>Select...</option>
                                <option value='New'>New</option>
                                <option value='Fairly used'>Fairly used</option>
                                <option value='Heavily used'>
                                    Heavily used
                                </option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} md='2' controlId='quantity'>
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                                required
                                type='number'
                                min={0}
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                            {/*<Form.Control.Feedback></Form.Control.Feedback>*/}
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} md='12' controlId='description'>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                required
                                as='textarea'
                                rows={3}
                                value={description}
                                placeholder='Please describe the details of the item, e.g. colour, condition, size, etc...'
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <Form.Control.Feedback></Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Button type='submit' className='formb'>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}
export default EditItem;
