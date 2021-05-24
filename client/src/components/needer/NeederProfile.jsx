import { useSelector} from "react-redux";

function Needer(){
    // get the first name from state
    const first_name = useSelector(state => state.userInfo.first_name) ;

return(
    <div className="banner">
        <div className="welcome">
            <h1> Hallo {first_name}  !</h1>
            <p>Welcome to JUST4GIVING </p>
           
        </div>


       
    </div>


)};

export default Needer;