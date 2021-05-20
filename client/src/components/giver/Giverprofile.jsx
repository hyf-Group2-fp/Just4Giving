import react from 'react'
import { Button} from "react-bootstrap";
import { Link } from "react-router-dom";
//import Signupgiver from "../register/signupgiver"
function Giver(props){
    const first_name=( props.location.state) ;
    
return(
    <div className="banner">
        <div className="welcome">
<h1> Hallo {first_name}  !</h1>
<p>Welcome to JUST4GIVING </p>
<Link to={"/newgoods"}><Button >i want to donate</Button></Link>
</div>
    </div>

)
}
export default Giver;