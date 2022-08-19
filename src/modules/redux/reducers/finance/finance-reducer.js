import { financeAPI } from "../../../services/api-laravel";

let initialState = {
    finance : null
};
const SET_FINANCE = 'SET_FINANCE';
const setFinance = (finance) => ({type: SET_FINANCE, finance})


export const getFinance = () => async (dispatch)  => {
    let res = await  financeAPI.getFinance();
    debugger
    setFinance(res)
}

const financeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FINANCE:
            let result = {...state };
            result.finance = action.finance
            return result;

        default:
            return state;
    }

}

export default financeReducer