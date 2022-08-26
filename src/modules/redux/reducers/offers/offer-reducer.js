import { offerAPI } from "../../../services/api-laravel";
import { followUnfollow } from "../../../utils/for-reducers/follow-unfollow";

const ADD_OFFER = 'ADD_OFFER';
const SET_OFFERS = 'SET_OFFERS';
//TODO REFACTORING DOUBLES WITH USERS-REDUCER
const SET_TOTAL_OFFERS_COUNT = 'SET_TOTAL_OFFERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const SET_CURRENT_OFFER = 'SET_CURRENT_OFFER';
const FILTER_OFFERS = 'FILTER_OFFERS';
const DELETE_OFFER = 'DELETE_OFFER';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';
const SET_LINK = 'SET_LINK';
const SET_ERRORS = 'SET_ERRORS';


let initialState = {
    offers: [],
    isFetching: false,
    followingInProgress: [],
    isFiltered: false,
    forFilter: [],
    error: null,
    //paginator
    pageSize: 21,
    totalOffersCount: 1,
    currentPage: 1,
    portionSize: 10,

};


//ACTION CREATORS
const addOffer = (offer) => ({ type: ADD_OFFER, offer });
const setOffers = (offers) => ({ type: SET_OFFERS, offers });
export const setTotalOffersCount = (count) => ({ type: SET_TOTAL_OFFERS_COUNT, count });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });
const setCurrentOffer = (offer) => ({ type: SET_CURRENT_OFFER, offer });
export const filterOffers = (filter) => ({ type: FILTER_OFFERS, filter });
const deleteOfferAC = (offerId) => ({ type: DELETE_OFFER, offerId });
const followAC = (offerId) => ({ type: FOLLOW, offerId });
const unfollowAC = (offerId) => ({ type: UNFOLLOW, offerId });
const toggleFollowingInProgress = (offerId, isFetching) => ({ type: FOLLOWING_IN_PROGRESS, offerId, isFetching });
const setLink = (offerId, link) => ({ type: SET_LINK, offerId, link });
export const setErrors = (error) => ({ type: SET_ERRORS, error });


//THUNKS
export const sendOffer = (userId, name, description, url, price) => async (dispatch) => {
    const res = await offerAPI.sendOffer(userId, name, description, url, price);
    dispatch(addOffer(res.data.data));
};
export const getOffers = (currentPage = 1, pageSize = 10) => async (dispatch) => {
    const res = await offerAPI.getOffers(currentPage, pageSize);
    
    if (res.data.resultCode === 1) {
        if (res.meta) {
            dispatch(setTotalOffersCount(res.meta.total))
        }
        dispatch(setOffers(res.data.offers));
    } else {
        alert(res.message)
    }

};
export const getOffer = (offerId) => async (dispatch) => {
    const res = await offerAPI.getOffer(offerId);

    if (res.resultCode === 1) {
        dispatch(setCurrentOffer(res.offer));
    } else {
        alert(res.message)
    }

};
export const deleteOffer = (offerId) => async (dispatch) => {
    await offerAPI.deleteOffer(offerId);

    dispatch(deleteOfferAC(offerId));
};
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
};
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
};
export const getLink = (offerId) => async (dispatch) => {

    let res = await offerAPI.getLink(offerId);

    if (res.resultCode === 1) {
        dispatch(setLink(offerId, res.link))
    } else {
        alert(res.message)
    }


};

// REDUCER:
export const offerReducer = (state = initialState, action) => {
    let result = state
    switch (action.type) {

        case ADD_OFFER:
            let offers = [...state.offers];
            offers.unshift(action.offer);
            state.offers = [...offers]
            return { ...state };

        case SET_OFFERS:
            state.offers = [...action.offers.reverse(offer => ({ ...offer }))];
            return { ...state };


        //TODO REFACTORING DOUBLES WITH USERS-REDUCER
        case SET_TOTAL_OFFERS_COUNT:
            result = { ...state }
            result.totalOffersCount = action.count
            return result
        case SET_CURRENT_PAGE:
            result = { ...state }
            result.currentPage = action.page
            return result


        case SET_CURRENT_OFFER:
            const isOfferHas = state.offers.some(offer => offer.id === action.offer.id);
            if (!isOfferHas) {
                state.offers.unshift(action.offer)
                result = { ...state };
                result.offers = [...state.offers]
                return result;
            }
            return state;

        case FILTER_OFFERS:

            result = { ...state }
            if (!result.isFiltered) { // если фильтер еще не применялся
                result.forFilter = state.offers
                result.isFiltered = true
            }
            if (action.filter === 1) {

                result.offers = []
                result.forFilter.forEach(offer => {
                    if (offer.isFollowing) {
                        result.offers.push(offer)
                    }
                })
                return result
            } else if (action.filter === 2) {
                result.offers = []
                result.forFilter.forEach(offer => {
                    if (!offer.isFollowing) {
                        result.offers.push(offer)
                    }
                })
                return result
            } else {
                result.offers = result.forFilter
                return result

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
            result = { ...state }
            result.offers = followUnfollow(result.offers, action.offerId, 1)
            return result;

        case UNFOLLOW:
            result = { ...state }
            result.offers = followUnfollow(result.offers, action.offerId, 0)
            return result;

        case FOLLOWING_IN_PROGRESS:
            result = { ...state }
            result.followingInProgress = [...state.followingInProgress]

            action.isFetching
                ? result.followingInProgress.push(action.offerId)
                : result.followingInProgress = state.followingInProgress.filter(id => id !== action.offerId)

            return result;

        case SET_LINK:
            result = { ...state }

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

        case SET_ERRORS:
            if (action.error) {

                if (state.error !== action.error) {
                    result = { ...state };
                    result.error = action.error;

                    return result;
                }
            }

            return state;

        default: return state;

    }
};


