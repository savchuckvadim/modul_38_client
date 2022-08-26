import { fishAPI } from "../../../services/api-laravel";

let initialState = {
    fish: ''
};
const SET_FISH = 'SET_FISH';

// ACTIONS CREATORS
const setFish = (fish) => ({ type: SET_FISH, fish })


//THUNKS
export const getFish = () => async (dispatch) => {
    const fish = await fishAPI.get();
    dispatch(setFish(fish))
}


//REDUCER
const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FISH:

            return { ...state, fish: action.fish }

        default:
            return state;
    }

};

export default homeReducer