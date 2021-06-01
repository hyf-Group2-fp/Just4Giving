import axios from "axios";
import { Button, Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useHistory } from "react-router-dom";

import { createGoods } from "../../redux/actions/goodsInfoAction";
export default function Goods() {
    const [goods, setGoods] = useState({});
    const history = useHistory();
    // dispatch an action
    const dispatch = useDispatch();
    // access the state
    const user_id = useSelector((state) => state.userInfo.user_id);
    console.log(user_id);
    const url = `/api/user/goods/${user_id}`;
    // fetch goods
    const FetchGoods = async () => {
        const response = await axios.get(url);
        const goods = response.data.goods;
        console.log(goods);
        // fire an action
        dispatch(createGoods(goods));
        setGoods(goods);
    };
    useEffect(() => {
        FetchGoods();
    }, [user_id]);
    // details good
    const detailGood = (id) => {
        console.log(id);
        history.push(`/detailsitem/${id}`);
    };
    // edit good
    const editGood = (id) => {
        console.log(id);
        history.push(`/edititem/${id}`);
    };
    // delete good
    const deleteGood = async (id, index) => {
        const filterGoods = Object.entries(goods).filter(
            (key, value) => key !== index
        );
        const newGoods = Object.fromEntries(filterGoods);
        setGoods(newGoods);
        // send a delete request
        const response = await axios.delete(
            `/api/goods/${id}`
        );
        console.log(response);
        // refresh the page
        history.push("/itemdelete");
        history.push("/profilegiver");
    };
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
            }}
        >
            {Object.values(goods).map((good, index) => (
                <Card
                    className="itemCards"
                    style={{ flexGrow: 1, width: "18rem" }}
                    key={good.goods_id}
                >
                    <Card.Img
                        src={good.image}
                        className="img-center text-center mt-4"
                        alt="good"
                        style={{ width:"18rem" }}
                    />

                    <Card.Body className="text-center">
                        <Card.Text>
                            {" "}
                            {moment
                                .utc(good.createdAt)
                                .local(false)
                                .startOf("seconds")
                                .fromNow()}{" "}
                        </Card.Text>
                        <Card.Title style ={{color:"#EB822E ", fontsize:"19px"}}>{good.item_name}</Card.Title>
                        <Card.Text>{good.category}</Card.Text>
                        <div className="btn-good-group">
                            <Button
                                className="btn-good"
                                size={"sm"}
                                onClick={() => detailGood(good.goods_id)}
                                variant="secondary"
                            >
                                Details
                            </Button>
                            <Button
                                className="btn-good"
                                size={"sm"}
                                onClick={() => editGood(good.goods_id)}
                                variant="info"
                            >
                                Edit
                            </Button>
                            <Button
                                className="btn-good"
                                size={"sm"}
                                onClick={() => deleteGood(good.goods_id, index)}
                                variant="danger"
                            >
                                Delete
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}
