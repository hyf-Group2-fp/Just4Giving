import {signedUserInfo} from "./redux/actions/userInfoAction";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";

function Authenticate() {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.userInfo);

  useEffect(() => {
    if (userInfo) {
      return;
    }

    axios
      .get(
        "http://localhost:5000/api/checkToken",
        {
          withCredentials: true
        },
      )
      .then(response => {
        dispatch(signedUserInfo(response));
      })
  }, []);

  return null;
}

export default Authenticate;