import { authAPI } from '../../services/api-laravel'
import {
    getAuth, laraGetAuth
} from './auth/auth-reducer'
const INITIALIZED_SUCCES = 'INITIALIZED_SUCCES'
const INITIALIZING = 'INITIALIZING'

let initialState = {
    initialized: false,
    inProgress: false,
    // laraInitialized: false,
    // laraInProgress: false,
}

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCES
})
export const initializing = () => ({
    type: INITIALIZING
})


const appReducer = (state = initialState, action) => {


    switch (action.type) {
        case INITIALIZED_SUCCES:

            return {
                ...state,
                initialized: true,
                    inProgress: false
            }
        case INITIALIZING:

            return {
                ...state,
                inProgress: true
            }
            default:
                return state;
    }

}

export const initialize = () => async (dispatch) => {

    // let dispatchInitializing = () => {

    //     return dispatch(initializing())
    // }
    dispatch(initializing())
    await authAPI.initial()
    let promiseAuth = () => {
//////////////////////////////////////////////////////////////////////////LARAVEL
        // return dispatch(getAuth())
        return dispatch(laraGetAuth())
    }
     //inProgress-status
     
    promiseAuth().then(responses => {
       

        dispatch(initializedSuccess())
       
    })


    // authAPI.me()
    
}




export default appReducer