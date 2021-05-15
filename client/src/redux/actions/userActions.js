
/**
 * Actions creators (userAction).
 * the user can perform two actions:
 * 1- user (log in)
 * 2- user (log out)
 */
// import axios
import axios from 'axios';

// log in action
export const login =(credentials) => {
    return async function (dispatch){

        const userInfo = credentials ;

        try{

        const response = await  axios.post('/login' , userInfo) ;

        if(response.data.status !== 200){
            throw new Error('Invalid E-mail or Password !!');

        }
            const data = response.data ;

            // dispatch action
            dispatch({type:'LOGGED_IN', payload:data}) ;



        }catch (err) {
            localStorage.clear() ;
            dispatch({type:'LOGIN_ERROR', payload: err.message});
            console.error(err);

        }

    }
}

// log out action

export const logout = () => {
    return async function (dispatch){
        localStorage.clear() ;

        // dispatch action
        dispatch({type:'LOGGED_OUT'});

        try{
        const response = await axios.get('/logout');
        console.log(response);
        return response;
        } catch (err) {
            console.error(err);

        }

    }
}

