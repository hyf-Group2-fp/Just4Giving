
// signed user

export const signedUserGiver =(userInfo) => {
    return{
        type:'SIGNED_USER_GIVER',
        payload:userInfo ,


    }
}


export const signedUserNeeder =(userInfo) => {
    return{
        type:'SIGNED_USER_NEEDER',
        payload:userInfo ,


    }
}
