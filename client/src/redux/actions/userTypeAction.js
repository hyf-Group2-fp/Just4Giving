/**
 * Actions creators (userType)
 * --------------------------
 * the user can be :
 * 1- user (giver)
 * 2- user (needer)
 * 3- needer info
 * 4- giver info
 * 5- logged in
 * 6- logged out
 * 7-logged in Error
 * 8- profile complete
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
/*
 state
 -----

 sign up
 -------




 sign in
 -------
 Needer
 email
 password

// back end   end-point = >
 =>  back -end user = {
user_id ,
first_name,
phone ,
street,
email
description
is_giver
is_needer
 }

Giver
-----
// back end   end-point = >
 =>  back -end user = {
user_id ,
first_name,
phone ,
street,
email
is_giver
is_needer

 }

Sign out
--------




 */