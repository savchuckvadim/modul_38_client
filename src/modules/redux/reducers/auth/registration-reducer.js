import { stopSubmit } from "redux-form";
import { authAPI } from "../../../services/api-laravel";
import { laraGetAuth, logining } from "./auth-reducer";

const REGISTRATION_SUCSESS = 'REGISTRATION_SUCSESS';
const REGISTRATION_REDIRECT = 'REGISTRATION_REDIRECT';

const initialState = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    registrationStatus: false
}


// ACTIONS CREATORS
const registrationSuccess = () => ({ type: REGISTRATION_SUCSESS });
export const registrationRedirect  = () => ({type: REGISTRATION_REDIRECT})


//THUNKS
export const setNewUser = (name, surname, email, password, password_confirmation, role) => async (dispatch) => {
    dispatch(logining(true));//toggle is creating user from users reducer
    try{
        let res = await authAPI.register(name, surname, email, password, password_confirmation, role)
        if(res.statusText === 'Created'){
            registrationSuccess()
            dispatch(laraGetAuth())
            
        }if(res){
            if(res.data.error){
                if(res.data.errors[0] === 'Already autenticated.'){
                    alert(res.data.errors[0])
                }
            }
           
        }
    }catch(err){
        
        let action = stopSubmit('login', {
            _error: 'Ошибка регистрации!'
        })
        
        dispatch(action)
        dispatch(logining(false)); //toggle is creating user from users reducer
    }
}


//REDUCER
const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTRATION_SUCSESS: return { ...state, registrationStatus: true };  
        case REGISTRATION_REDIRECT: return { ...state, registrationStatus: false };      
        default: return state; 
    };

};

export default registrationReducer;