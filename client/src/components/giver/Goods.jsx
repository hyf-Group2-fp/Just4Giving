import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import team from '../../assets/landingpage/team.png';
// component
// import ItemView from "./ItemView";

// Redux
import { createGoods, updateGoods } from '../../redux/actions/goodsInfoAction';

export default function Goods() {
  const [goods, setGoods] = useState([]);
  const history = useHistory();

  // dispatch an action
  const dispatch = useDispatch();
  // access the state
  const user_id = useSelector((state) => state.userInfo.user_id);
  const createdAt = useSelector((state) => state.goods.createdAt);
  console.log(user_id);
  const url = `http://localhost:5000/api/user/goods/${user_id}`;
  // fetch goods
  const FetchGoods = async () => {
    const response = await axios.get(url);
    const goods = response.data.goods;
    // fire an action
    dispatch(createGoods(goods));
    console.log(response);
    setGoods(goods);
  };
  useEffect(() => {
    FetchGoods();
  }, [user_id]);
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      }}
    >
      {goods.map((good, index) => (
        <Card
          className="itemCards"
          style={{ flexGrow: 1, width: '18rem' }}
          key={good.goods_id}
        >
          <Card.Img src={team} alt="good" style={{ width: '18rem' }} />
          <Card.Body>
            <Card.Text>
              {' '}
              {moment
                .utc(good.createdAt)
                .local(false)
                .startOf('seconds')
                .fromNow()}{' '}
            </Card.Text>

            <Card.Title>{good.item_name}</Card.Title>

            <Card.Text>{good.category}</Card.Text>
            <Button
              size={'sm'}
              onClick={() => history.push(`/profilegiver/item/${index}`)}
              variant="primary"
            >
              Details
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
