import react, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import { Button} from "react-bootstrap";
import { Link } from "react-router-dom";


function Giver(){
    // dispatch an action
    const dispatch = useDispatch() ;

    // access the state
    const user_id = useSelector(state => state.userInfo.user_id) ;
    const first_name = useSelector(state => state.userInfo.first_name) ;

    const url = `http://localhost:5000/api/user/goods/${user_id}` ;
    useEffect( () => {
        const FetchGoods = async () => {
        const response = await axios.get(url) ;
        console.log(response) ;
        const goods = response ;

        // for (const good of goods){
        //     return(
        //         <Card style={{ width: '18rem' }}>
        //             <Card.Img variant="top" src="holder.js/100px180" />
        //             <Card.Body>
        //                 <Card.Title>Card Title</Card.Title>
        //                 <Card.Text>
        //                     Some quick example text to build on the card title and make up the bulk of
        //                     the card's content.
        //                 </Card.Text>
        //                 <Button variant="primary">Go somewhere</Button>
        //             </Card.Body>
        //         </Card>
        //
        //     )};

        }
        FetchGoods() ;
    },[user_id]) ;


    
return(
    <div className="banner">
        <div className="welcome">
<h1> Hallo {first_name}  !</h1>
<p>Welcome to JUST4GIVING </p>
<Link to={"/newgoods"}><Button >I Want To Donate</Button></Link>
</div>
    </div>

)};

export default Giver;