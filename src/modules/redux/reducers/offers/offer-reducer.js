import { offerAPI } from "../../../services/api-laravel";
import { followUnfollow } from "../../../utils/for-reducers/follow-unfollow";

const ADD_OFFER = 'ADD_OFFER';
const SET_OFFERS = 'SET_OFFERS';
const DELETE_OFFER = 'DELETE_OFFER';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';
const SET_LINK = 'SET_LINK';

let initialState = {
    offers: [],
    isFetching: false,
    followingInProgress: [],
};

const addOffer = (offer) => ({ type: ADD_OFFER, offer });
const setOffers = (offers) => ({ type: SET_OFFERS, offers });
const deleteOfferAC = (offerId) => ({ type: DELETE_OFFER, offerId });
const followAC = (offerId) => ({ type: FOLLOW, offerId })
const unfollowAC = (offerId) => ({ type: UNFOLLOW, offerId })
const toggleFollowingInProgress = (offerId, isFetching) => ({ type: FOLLOWING_IN_PROGRESS, offerId, isFetching })
const setLink = (offerId, link) => ({ type: SET_LINK, offerId, link })

export const sendOffer = (userId, name, description, url, price) => async (dispatch) => {
    const res = await offerAPI.sendOffer(userId, name, description, url, price);
    dispatch(addOffer(res.data.data));
};

export const getOffers = (userId) => async (dispatch) => {
    const res = await offerAPI.getOffers(userId);

    if (res.resultCode === 1) {
        dispatch(setOffers(res.offers));
    } else {
        alert(res.message)
    }

}
export const deleteOffer = (offerId) => async (dispatch) => {
    await offerAPI.deleteOffer(offerId);

    dispatch(deleteOfferAC(offerId));
}

export const follow = (offerId) => async (dispatch) => {

    dispatch(toggleFollowingInProgress(offerId, true))


    let res = await offerAPI.follow(offerId)

    if (res.data) {
        if (res.data.resultCode === 1) {

            dispatch(followAC(offerId))
        } else {
            alert(res.data.message)
        }
    }
    dispatch(toggleFollowingInProgress(offerId, false))
}

export const unfollow = (offerId) => async (dispatch) => {

    dispatch(toggleFollowingInProgress(offerId, true))


    let res = await offerAPI.unfollow(offerId)

    if (res.data) {
        if (res.data.resultCode === 1) {

            dispatch(unfollowAC(offerId))
        } else {
            alert(res.data.message)
        }
    }
    dispatch(toggleFollowingInProgress(offerId, false))
}

export const getLink = (offerId) => async (dispatch) => {

    let res = await offerAPI.getLink(offerId);
    
    if (res.resultCode === 1) {
        dispatch(setLink(offerId, res.link))
    } else {
        alert(res.message)
    }


}

export const offerReducer = (state = initialState, action) => {
    let result = state
    switch (action.type) {

        case ADD_OFFER:
            let offers = [...state.offers];
            offers.unshift(action.offer);
            state.offers = [...offers]
            return { ...state };

        case SET_OFFERS:

            if (state.offers.length !== action.offers.length) {
                state.offers = [...action.offers.reverse(offer => ({ ...offer }))];
                return { ...state };
            } else {
                return state
            }

        case DELETE_OFFER:
            result = { ...state }
            result.offers = []

            state.offers.forEach(o => {
                if (o.id !== action.offerId) {
                    result.offers.push(o);
                }

            })

            return result;

        case FOLLOW:
            result = {
                ...state
            }
            result.offers = followUnfollow(result.offers, action.offerId, 1)

            return result;

        case UNFOLLOW:
            result = {
                ...state
            }
            result.offers = followUnfollow(result.offers, action.offerId, 0)

            return result

        case FOLLOWING_IN_PROGRESS:
            result = {
                ...state
            }
            result.followingInProgress = [...state.followingInProgress]

            action.isFetching
                ? result.followingInProgress.push(action.offerId)
                : result.followingInProgress = state.followingInProgress.filter(id => id !== action.offerId)

            return result
        case SET_LINK:
            result = {
                ...state
            }
            
            if (result.offers.length > 0) {
                result.offers = result.offers.map(offer => {
                    if (offer.id === action.offerId) {
                        offer.link = action.link

                        return { ...offer }
                    } else {
                        return offer
                    }
                })
            }

            return result;

        default: return state;

    }
};


