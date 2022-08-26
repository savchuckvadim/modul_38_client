import { financeAPI } from "../../../services/api-laravel";

let initialState = {
    finance : null,
    role: null,
    
};
const SET_FINANCE = 'SET_FINANCE';

// ACTIONS CREATORS
const setFinance = (finance, role) => ({type: SET_FINANCE, finance, role})



//THUNKS
export const getFinance = (date = null) => async (dispatch)  => {
    let res = await  financeAPI.getFinance(date);
    
    if(res.resultCode === 1){
        dispatch(setFinance(res.finance, res.role))
    }else{
        alert('error!')
    }
   
}


//REDUCER
const financeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FINANCE:
            let result = {...state };
            result.finance = action.finance
            result.role = action.role
            return result;

        default:
            return state;
    }

}

export default financeReducer