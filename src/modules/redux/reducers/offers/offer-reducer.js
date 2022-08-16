import { offerAPI } from "../../../services/api-laravel";

const ADD_OFFER = 'ADD_OFFER';
const SET_OFFERS = 'SET_OFFERS';
const DELETE_OFFER = 'DELETE_OFFER';

let initialState = {
    offers: []
};

const addOffer = (offer) => ({ type: ADD_OFFER, offer });
const setOffers = (offers) => ({ type: SET_OFFERS, offers });
const deleteOfferAC = (offerId) => ({ type: DELETE_OFFER, offerId });


export const sendOffer = (userId, name, description, url, price) => async (dispatch) => {
    const res = await offerAPI.sendOffer(userId, name, description, url, price);
    dispatch(addOffer(res.data.data));
};

export const getOffers = (userId) => async (dispatch) => {
    const res = await offerAPI.getOffers(userId);
    debugger
    dispatch(setOffers(res.data.data));
}
export const deleteOffer = (offerId) => async (dispatch) => {
    let res = await offerAPI.deleteOffer(offerId);
    debugger
    dispatch(deleteOfferAC(offerId));
}
export const offerReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_OFFER:
            let offers = [...state.offers];
            offers.unshift(action.offer);
            state.offers = [...offers]
            return { ...state };

        case SET_OFFERS:
            if (state.offers.length !== action.offers.length) {
                state.offers = [...action.offers.reverse(offer => ({ ...offer }))];
                return { ...state};
            } else {
                return state
            }


        case DELETE_OFFER:
            let result = { ...state }
            result.offers = []

            state.offers.forEach(o => {
                if (o.id !== action.offerId) {
                    result.offers.push(o);
                }

            })

            return result;
        default: return state;

    }
};


