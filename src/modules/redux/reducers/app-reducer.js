import { authAPI } from '../../services/api-laravel';
import {laraGetAuth} from './auth/auth-reducer';

const INITIALIZED_SUCCES = 'INITIALIZED_SUCCES';
const INITIALIZING = 'INITIALIZING';
const LOGOUT = 'LOGOUT';

let initialState = {
    initialized: false,
    inProgress: false,
};



// ACTIONS CREATORS
export const initializedSuccess = () => ({ type: INITIALIZED_SUCCES });
export const initializing = () => ({ type: INITIALIZING });
export const logoutApp = () => ({ type: LOGOUT });


//THUNKS
export const initialize = () => async (dispatch) => {

    dispatch(initializing())
    await authAPI.initial()
    let promiseAuth = () => {

        return dispatch(laraGetAuth())
    }
  

    promiseAuth().then(responses => {


        dispatch(initializedSuccess())

    })


};

//REDUCER
const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCES:
            return { ...state, initialized: true, inProgress: false }

        case INITIALIZING:
            return { ...state, inProgress: true }

        case LOGOUT:
            return { ...state, initialized: false }

        default:
            return state;
    }

};

export default appReducer