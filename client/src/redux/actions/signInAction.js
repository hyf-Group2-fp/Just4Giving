
/**
 * Actions creators (sign in ).
 * the user can :
 * 1- sign in
 * 2- sign out
 */
// import axios
import axios from 'axios';

// sign in action
export const signIn =(credentials) => {
    return async function (dispatch){

        const userInfo = credentials ;
        const url = "http://localhost:5000/api/authenticate" ;

        try{

        const response = await  axios.post(url , userInfo) ;

        if(response.data.status !== 200){
            throw new Error('Invalid E-mail or Password !!');

        }
            const data = response.data ;

            // dispatch action
            dispatch({type:'SIGNED_IN', payload:data}) ;



        }catch (err) {

            dispatch({type:'SIGN_IN_ERROR', payload: err.message});
            console.error(err);

        }

    }
}

// sign out action

export const signOut = () => {
    return async function (dispatch){

        const url = "http://localhost:5000/api/user/signout" ;

        // dispatch action
        dispatch({type:'SIGNED_OUT'});

        try{
        const response = await axios.get(url);
        console.log(response);
        return response;
        } catch (err) {
            console.error(err);

        }

    }
}

