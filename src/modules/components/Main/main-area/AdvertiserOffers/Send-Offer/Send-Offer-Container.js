import { connect } from "react-redux"
import { sendOffer } from "../../../../../redux/reducers/offers/offer-reducer"

import { addPostActionCreator, sendPost } from "../../../../../redux/reducers/profile/profile-reducer"

import SendOffer from "./Send-Offer"




const mapStateToProps = (state) => {

    return {
        user: state.auth.authUser,
        // value: state.currentPost.value,
        visitedProfileId: state.profileReducer.visitedUser.id

    }
}

export const SendOfferContainer = connect(mapStateToProps,
    {
        // sendPost,
        sendOffer

    }
)(SendOffer)