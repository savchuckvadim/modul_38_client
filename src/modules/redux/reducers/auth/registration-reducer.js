import { authAPI } from "../../../services/api-laravel";
import { laraGetAuth } from "./auth-reducer";

const REGISTRATING_IN_PROGRESS = 'REGISTRATING_IN_PROGRESS';
const REGISTRATION_SUCSESS = 'REGISTRATION_SUCSESS';
const REGISTRATION_REDIRECT = 'REGISTRATION_REDIRECT';

const initialState = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    registrationStatus: false
}

const registratingInProgress = () => ({ type: REGISTRATING_IN_PROGRESS });
const registrationSuccess = () => ({ type: REGISTRATION_SUCSESS });
export const registrationRedirect  = () => ({type: REGISTRATION_REDIRECT})

export const setNewUser = (name, surname, email, password, password_confirmation, role) => async (dispatch) => {
    registratingInProgress();
    let res = await authAPI.register(name, surname, email, password, password_confirmation, role)
    
    if(res.statusText === 'Created'){
        registrationSuccess()
        dispatch(laraGetAuth())
        
    }else{
        if(res){
            if(res.data.error){
                if(res.data.error === 'Already autenticated.'){
                    alert('Такой пользователь уже существует!')
                }
            }
           
        }
        
    }
}
const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTRATING_IN_PROGRESS:  return { ...state, registrationStatus: 'inProgress' };  
        case REGISTRATION_SUCSESS: return { ...state, registrationStatus: true };  
        case REGISTRATION_REDIRECT: return { ...state, registrationStatus: false };      
        default: return state;
            
    }


}

export default registrationReducer;