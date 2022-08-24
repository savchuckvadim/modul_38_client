import { fishAPI } from "../../../services/api-laravel";

let initialState = {
    fish: ''
};
const SET_FISH = 'SET_FISH';
const setFish = (fish) => ({ type: SET_FISH, fish })


export const getFish = () => async (dispatch) => {
    const fish = await fishAPI.get();
    debugger

    dispatch(setFish(fish))
}


export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FISH:

            return { ...state, fish: action.fish }

        default:
            return state;
    }

};