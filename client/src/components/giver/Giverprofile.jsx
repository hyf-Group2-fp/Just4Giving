import {useDispatch, useSelector} from "react-redux";
import { Button , Card ,} from "react-bootstrap";
import { Link } from "react-router-dom";

// component
// import Goods from "./Goods";


function Giver(){
    // dispatch an action
    const first_name = useSelector(state => state.userInfo.first_name) ;




    
return(
    <div className="banner">
        <div className="welcome">
            <h1> Hallo {first_name}  !</h1>
            <p>Welcome to JUST4GIVING </p>
            <Link to={"/newgoods"}><Button >I Want To Donate</Button></Link>
        </div>


        <div>
            {/*<Goods/>*/}
        </div>
    </div>


)};

export default Giver;