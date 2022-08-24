import { authAPI } from '../../services/api-laravel';
import {laraGetAuth} from './auth/auth-reducer';

const INITIALIZED_SUCCES = 'INITIALIZED_SUCCES';
const INITIALIZING = 'INITIALIZING';
const LOGOUT = 'LOGOUT';

let initialState = {
    initialized: false,
    inProgress: false,
};

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCES });
export const initializing = () => ({ type: INITIALIZING });
export const logoutApp = () => ({ type: LOGOUT });

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




export default appReducer