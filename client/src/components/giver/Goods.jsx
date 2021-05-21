import axios from "axios";
import {Button, Card} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

export default function Goods() {
    const [goods , setGoods] = useState([]) ;
    const dispatch = useDispatch() ;
    // access the state
    const user_id = useSelector(state => state.userInfo.user_id) ;
    console.log(user_id) ;
    const url = `http://localhost:5000/api/user/goods/${user_id}` ;

    const FetchGoods = async () => {
        const response = await axios.get(url) ;
        console.log(response) ;
        const good = response.data.good ;
        setGoods(good) } ;

    useEffect( () => {
        FetchGoods() ;
    },[user_id]) ;
    return (
        <div>
            {goods.map(good => (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{good.item_name}</Card.Title>
                        <Card.Text>
                            {good.category}
                        </Card.Text>
                        <Button variant="primary">Details</Button>
                    </Card.Body>
                </Card>
                ))}

        </div>
    )

} ;
