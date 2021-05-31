import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import moment from 'moment';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const DetailsItem = () => {
  // the good state
  const [good, SetGood] = useState({});

  // get the id
  const { id } = useParams();
  console.log(id);

  // fetch the good and reset the state
  useEffect(() => {
    const fetchItem = async () => {
      const response = await axios.get(`http://localhost:5000/api/goods/${id}`);
      console.log(response.data.good);
      const good = response.data.good;
      SetGood(good);
    };
    fetchItem();
  }, []);
  return (
    <div className="detailsItemContainer"
      // style={{
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      // }}
    >
      <div className="detailsItem" >
      <Card>
     
        {/* <Card.Img className= "detailPict"
        variant="top"
        
        src= {`../assets/images/uploads/${good.image}`}
        // width="50px"
            
        // src={`assets/images/uploads/${good.image}`}
        /> */}
        <Card.Body>
        <img
             src={`../assets/images/uploads/${good.image}`}
             className= "detailPict"
            //  id="preview"
            //  width="477"
            //  height="477"
             alt="good"
        />
          <Card.Title className="mt-4">Good: {good.item_name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            Posted At:
            {moment
              .utc(good.createdAt)
              .local(false)
              .startOf('seconds')
              .fromNow()}
          </ListGroupItem>
          <ListGroupItem className="detailsrows">Category: {good.category}</ListGroupItem>
        </ListGroup>
        <Card.Text className="detailsrows">Description: {good.description}</Card.Text>
      </Card>
      </div>
    </div>
  );
};

export default DetailsItem;