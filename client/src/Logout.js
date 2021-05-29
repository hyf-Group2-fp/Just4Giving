import {signedUserOut} from "./redux/actions/userInfoAction";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

function Logout() {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.userInfo);

  function eraseCookie(name) {
    document.cookie = name+'=; Max-Age=-99999999;';
  }

  useEffect(() => {
    if (!userInfo || !userInfo?.signedIn) {
      return;
    }

    axios
      .post(
        "http://localhost:5000/api/logout",
        {
          withCredentials: true
        },
      )
      .then(response => {
        eraseCookie('token');
        dispatch(signedUserOut(response));
      })
  }, [userInfo?.signedIn]);

  return null;
}

export default Logout;