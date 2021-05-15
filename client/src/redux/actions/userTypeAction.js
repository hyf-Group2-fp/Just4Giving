/**
 * Actions creators (userType)
 * --------------------------
 * the user can be :
 * 1- user (giver)
 * 2- user (needer)
 */

export const userGiver = (user) => {
  return{
    type:'IS_GIVER',
    payload:user
  }
};


export const userNeeder = (user) => {
  return{
    type:'IS_NEEDER',
    payload:user ,
  }
};