import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import moment from "moment";
import { Form, Button, Col } from "react-bootstrap";

// Redux
import { createGoods } from "../../redux/actions/goodsInfoAction";

const ContactGiver = () => {
    const [validated, setValidated] = useState(false);
    const [good, setGood] = useState({});
    const [giver, setGiver] = useState({});
    const [subject, setSubject] = useState("");
    const [message, SetMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const { id } = useParams();
    const userInfo = useSelector((state) => state.userInfo);

    // dispatch
    const dispatch = useDispatch();

    // request the good details

    const fetchGood = async () => {
        const res = await axios.get(`http://localhost:5000/api/goods/${id}`);
        const good = res.data.good;
        const subject = res.data.good.item_name;
        setSubject(subject);
        setGood(good);
        dispatch(createGoods(good));
    };

    useEffect(() => {
        fetchGood();
    }, []);

    const giver_id = useSelector((state) => state.goods.giver_id);
    const fetchGiver = async () => {
        if (giver_id){
            const res = await axios.get(
                `http://localhost:5000/api/user/${giver_id}`
            );
            const giver = res.data.giver.email;
            console.log(res.data.giver.email);
    
            setGiver(giver);
        }
    };
    useEffect(() => {
        fetchGiver();
    }, []);
    const handleSubmit = async (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        e.stopPropagation();
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            const mailInfo = {
                to: giver,
                from: "just4giving.hyf@gmail.com",
                subject: subject,
                content: `
                <div
            style="
                max-width: 750px;
                margin: auto;
                border: 10px solid #ddd;
                padding: 100px 20px;
                font-size: 110%;
                background: #ffffcc;
                font-weight: bold;
            "
        >
            <h2
                style="
                    max-width: 400px;
                    text-align: center;
                    color: #e9d366;
                    margin: auto;
                    font-size: 35px;
                    text-shadow: 2px 2px 4px #000000;
                    padding-top: 0;
                    background: #66cbdf;
                "
            >
                JUST4GIVING
            </h2>
            <p style="text-align: center">
                You have a new needer who is interested in your donated item
                ${subject}
            </p>
            <h3 style="text-align: center">Details of the needer</h3>
            <div style="max-width: 600px; margin: auto">
                <table style="border-collapse: collapse; width: 100%">
                    <tr>
                        <td>Name</td>
                        <td>: ${userInfo.first_name}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>: ${userInfo.email}</td>
                    </tr>
                    <tr>
                        <td>About the needer</td>
                        <td>: ${userInfo.description}</td>
                    </tr>
                    <tr>
                        <td>Message from the needer</td>
                        <td>: ${message}</td>
                    </tr>
                </table>
            </div>
            <h2 style="text-align: center">
                Thank you for donating on JUST4GIVING
            </h2>
            <div style="background: #66cbdf; padding: 5%">
                <h3 style="margin: auto">
                    " Globally, helping a stranger is the most popular form of
                    giving. In a typical month, a massive1.9 billion people will
                    help a stranger."
                </h3>
                <h3 style="text-align: right; padding-right: 20px">
                    Source: CAF – World Giving Index
                </h3>
            </div>
        </div>
                `,
            };
            try {
                const url = "http://localhost:5000/api/good/sendEmail";
                const response = await axios.post(url, mailInfo).then((res) => {
                    console.log(res.data);
                    setErrorMessage("Email successfully sent to giver");
                });
            } catch (error) {
                setErrorMessage("Something wrong happened, try again later");
            }
        }
        e.preventDefault();
        setValidated(true);
    };

    return (
        <div className="formviewG">
            <h2 className="formh1"> Item Details</h2>
            <div className="container">
                <div className="flex-container">
                    <div className="flex-child">
                        <img
                          src={`/assets/images/uploads/${good.image}`}
                          id="preview"
                          width="477"
                          height="477"
                          alt="good"
                        />
                    </div>
                    <div className="flex-child">
                        <h4 className="itemh">{good.item_name}</h4>
                        <p>
                            {moment
                                .utc(good.createdAt)
                                .local(false)
                                .startOf("seconds")
                                .fromNow()}
                        </p>
                        <p>{good.category}</p>
                        <p>{good.description}</p>
                        <p>Quantity: {good.quantity}</p>
                        <p>Quality: {good.quality}</p>
                    </div>
                </div>

                <div className="giverform">
                    <Form
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                    >
                        <Form.Row>
                            <Form.Group
                                as={Col}
                                md="12"
                                controlId="description"
                            >
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
                                    Write your message in at least 5 letters
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Button type="submit" className="btn-submit float-right btn btn-primary" style={{marginRight: '0px'}}>
                            Submit
                        </Button>
                        {errorMessage && (
                            <div className="error"> {errorMessage} </div>
                        )}
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ContactGiver;
