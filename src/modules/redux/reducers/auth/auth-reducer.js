import {
    stopSubmit
} from "redux-form";

import {
    authAPI
} from "../../../services/api-laravel";
import { creatingNewUser } from "../users/users-reducer";


const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    auth: {
        "id": null,
        "login": null,
        "email": null,
        isAuth: false
    },
   
    authUser: null
}

export const setAuthUserData = (authUser, id = null, login = null, email = null, isAuth = false) =>
    ({
        type: SET_USER_DATA,
        authUser,
        data: {id, login,email},
        isAuth
    })

// export const setAuthcurrentProfile = (userProfile, avatar) => ({ type: SET_AUTH_CURRENT_USER, userProfile, avatar })

const authReducer = (state = initialState, action) => {
    let result = state

    switch (action.type) {
        case SET_USER_DATA:

            result = {...state,}
            result.auth = {...action.data,isAuth: action.isAuth}
            result.authUser = action.authUser //запоминаем аутентифицированного пользователя в state чтобы потом его вставлять в список подписчиков

            return result;

        default:
            return result;
    }

}




export const laraGetAuth = () => async (dispatch) => {
    await authAPI.initial();
    let response = await authAPI.getAuthUser();
    let authUser = null
    if (response.data.resultCode === 1) {
        authUser = response.data.authUser
    }

    if (authUser) {

        dispatch(setAuthUserData(authUser, authUser.id, authUser.email, authUser.email, true));



    } else {
        dispatch(setAuthUserData(null, null, null, null, false));
    }


}



export const login = (email, password, rememberMe) => async (dispatch) => {
    dispatch(creatingNewUser(false))
    dispatch(creatingNewUser(true)); //toggle is creating user from users reducer
    try {
        let res = await authAPI.login(email, password, rememberMe);
       
        const resultCode = res.status;
        
    if (resultCode === 200) {
        dispatch(laraGetAuth())
       
    } else {
        let message = 'Email or Password was wrong !'
        let action = stopSubmit('login', {
            _error: message
        })
        dispatch(action)
        dispatch(creatingNewUser(false))
    }
      } catch(err) {
        
        alert(err.message); // TypeError: failed to fetch
        dispatch(creatingNewUser(false))
      }

      
}
export const logout = () => async (dispatch) => {

    await authAPI.logout();
    dispatch(setAuthUserData(null, null, null, null, false));

}

export default authReducer