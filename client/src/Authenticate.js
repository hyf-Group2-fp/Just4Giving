import { signedUserInfo } from './redux/actions/userInfoAction';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function Authenticate() {
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.userInfo);

    useEffect(() => {
        if (userInfo && userInfo.signedIn === true) {
            return;
        }

        axios
            .get('/api/checkToken', {
                withCredentials: true,
            })
            .then((response) => {
                dispatch(signedUserInfo(response.data.user));
            });
    }, []);

    return null;
}

export default Authenticate;
