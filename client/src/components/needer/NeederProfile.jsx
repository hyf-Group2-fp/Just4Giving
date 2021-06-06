//import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import moment from 'moment';
import { useHistory } from 'react-router';

// components
import Categories from '../categories/categories';

function Needer() {
    // history
    const history = useHistory();
    // get the needer first name from state
    const first_name = useSelector((state) => state.userInfo.first_name);

    // goodsPerCategory
    const goodsPerCategory = useSelector((state) => state.categoryGoods);
    // setGoods(goodsPerCategory);
    console.log(goodsPerCategory);

    // details handler function
    const detailsHandler = (id) => {
        history.push(`profileneeder/details/${id}`);
    };

    return (
        <div>
        <div className="user-space">
          <div className="banner">
            <div className="avatar"></div>
            <div className="welcome">
              <h1> Hello {first_name} !</h1>
              <p>Welcome to JUST4GIVING </p>
            </div>
          </div>
        
           <div id='category-box'>
            <Categories />
            </div>
        </div>
        <div id="main"
          style={{
              display: 'flex',
              flexWrap: 'wrap',
          }}
        >
          {Object.values(goodsPerCategory).map((good) => (
            <Card
              className='itemCards'
              style={{ flexGrow: 1, width: '18rem' }}
              key={good.goods_id}>
              <Card.Img
              src={'assets/images/uploads/'+good.image}
                // src={team}
                alt='good'
                className='img-center mt-3'
                style={{ width: '18rem' }}
              />
              <Card.Body className='text-center  d-flex  flex-column'>
                <Card.Text>
                  {' '}
                  {moment
                    .utc(good.createdAt)
                    .local(false)
                    .startOf('seconds')
                    .fromNow()}
                </Card.Text>
                <div className='mt-auto'>
                  <Card.Title style={{color: 'rgb(235, 130, 46)'}}>{good.item_name}</Card.Title>

                  <Card.Text>{good.category}</Card.Text>
                  <div className='btn-good-group'></div>

                  <Button
                    className='btn-good'
                    size={'sm'}
                    onClick={() => detailsHandler(good.goods_id)}
                    variant='info'>
                    Details
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
}

export default Needer;
