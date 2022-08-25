import { connect } from "react-redux"
import { sendOffer, setErrors } from "../../../../../redux/reducers/offers/offer-reducer"


import SendOffer from "./Send-Offer"




const mapStateToProps = (state) => {

    return {
        user: state.auth.authUser,
        error: state.offers.error
        // value: state.currentPost.value,
        // visitedProfileId: state.profileReducer.visitedUser.id

    }
}

export const SendOfferContainer = connect(mapStateToProps,
    {
        // sendPost,
        sendOffer,
        setErrors

    }
)(SendOffer)