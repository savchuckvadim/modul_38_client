import { authAPI } from "../../../services/api-laravel";
import { creatingNewUser } from "../users/users-reducer";
import { laraGetAuth } from "./auth-reducer";

const REGISTRATION_SUCSESS = 'REGISTRATION_SUCSESS';
const REGISTRATION_REDIRECT = 'REGISTRATION_REDIRECT';

const initialState = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    registrationStatus: false
}

const registrationSuccess = () => ({ type: REGISTRATION_SUCSESS });
export const registrationRedirect  = () => ({type: REGISTRATION_REDIRECT})

export const setNewUser = (name, surname, email, password, password_confirmation, role) => async (dispatch) => {
    dispatch(creatingNewUser(true)); //toggle is creating user from users reducer
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
    dispatch(creatingNewUser(false)); //toggle is creating user from users reducer

}
const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTRATION_SUCSESS: return { ...state, registrationStatus: true };  
        case REGISTRATION_REDIRECT: return { ...state, registrationStatus: false };      
        default: return state;
            
    }


}

export default registrationReducer;