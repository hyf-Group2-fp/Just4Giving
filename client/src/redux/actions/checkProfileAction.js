/**
 * check user actions :
 * -------------------
 * 1- check if the user profile is completed
 * 2- check if the user want to change the profile image *
 */

// import axios
import axios from 'axios';

// check the profile
export const checkUser = (user_id) => {
    return async function (dispatch){
      try{
        const response = await axios.get('./user/profile/'+user_id) ;

        if(response.data.status === 200){
            dispatch({type:'PROFILE_COMPLETE'});
            console.log(response);
        }
      }catch (err) {
          dispatch({type:'PROFILE_NOT_COMPLETE' , payload:err}) ;
          console.error(err);
      }

    }
}


// log in giver

export const logInGiver = (info) => {
    return{
        type:'LOGIN_GIVER',
        payload:info ,
    }
}


// log in needer

export const loginNeeder = (info) => {
    return{
        type:'LOGIN_NEEDER',
        payload:info ,
    }
}