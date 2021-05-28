import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import moment from 'moment';
import { Form, Button, Col } from 'react-bootstrap';

// Redux
import { createGoods } from '../../redux/actions/goodsInfoAction';

const ContactGiver = () => {
    const [validated, setValidated] = useState(false);
    const [good, setGood] = useState({});
    const [giver, setGiver] = useState({});
    const [subject, setSubject]=useState('');
    const [message, SetMessage]=useState("");
    const [errorMessage, setErrorMessage] = useState("");
    // get the good id
    const { id } = useParams();
  //  console.log(id);
  // get the needer info
  const userInfo = useSelector((state) => state.userInfo);
  const url="http://localhost:5000/api/good/sendEmail";
  //console.log(first_name )

    // dispatch
    const dispatch = useDispatch();

    // request the good details

    const fetchGood = async () => {
        const res = await axios.get(`http://localhost:5000/api/goods/${id}`);
        const good = res.data.good;
        const subject=res.data.good.item_name;
        //console.log(subject)
        setSubject(subject);
      //  console.log(good);
        setGood(good);
        dispatch(createGoods(good));
    };

    useEffect(() => {
        fetchGood();
    }, []);

    // giver id

    const giver_id = useSelector((state) => state.goods.giver_id);
   // console.log(giver_id);
    // fetch the giver email

    const fetchGiver = async () => {
        const res = await axios.get(
            `http://localhost:5000/api/user/${giver_id}`
        );
        const giver = res.data.giver.email;
     console.log(res.data.giver.email);
       
        setGiver(giver);
    };
    useEffect(() => {
        fetchGiver();
    }, []);
    const handleSubmit= async(e)=>{
        const form = e.currentTarget;
        e.preventDefault();
        e.stopPropagation();
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();}
            else{
               console.log(giver) 
            const mailInfo={
                to:giver,
                from:'just4giving.hyf@gmail.com',
                subject:subject,
                content:`
                <h2>Thank you for using Just4Giving</h2>
                <h2>You have a new needer who are interested in your donated ${subject}</h2>
                <p>The needer name :  ${userInfo.first_name}  </p>
                <p>the needer email : ${userInfo.email}</p>
                <p>About the needer :  ${userInfo.description}</p>
                <p>Message from the needer is :  ${message}</p>
                `
                 
            }
        console.log(mailInfo);
        try{
            const response =await axios.post(url, mailInfo).then(
(res)=>{
    console.log(res.data)
    setErrorMessage('email successfully sent to giver')
}
            )
        }
        catch(error){
            setErrorMessage("Something wrong happened, try again later")
        }
    }
        e.preventDefault();
        setValidated(true);

    }

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
            <Form noValidate
                    validated={validated} onSubmit={handleSubmit}>
              <Form.Row>
                        <Form.Group as={Col} md="12" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                required
                                placeholder="Example:Hi, I’m Sander I live in Brussel. I’m interested in the baby crib."
                                minLength="5"
                                maxLength="500"
                                rows={3}
                                
                                onChange={(e) => SetMessage(e.target.value)}
                            />{" "}
                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Explain your situation in at least 5 letters
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                <Button type="submit"variant='success'>Submit</Button>
                {errorMessage && <div className="error"> {errorMessage} </div>}
            </Form>
        </div>
    );
};

export default ContactGiver;
