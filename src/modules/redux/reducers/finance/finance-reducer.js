let initialState = {
    admin: null,
    master: null,
    advertiser: null
};
const GET_FINANCE = 'GET_FINANCE';

const financeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FINANCE:
            let result = { ...state };

            return result;

        default:
            return state;
    }

}

export default financeReducer