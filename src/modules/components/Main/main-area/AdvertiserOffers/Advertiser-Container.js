import React from "react";
import { connect } from "react-redux"
import { deleteOffer, getOffers } from "../../../../redux/reducers/offers/offer-reducer";
import { LightLoadingPageContainer } from "../../../Elements/Loading/Light-Loading-Page-Container";
import Advertiser from "./Advertiser";




const mapStateToProps = (state) => {

    return {
        isAuth: state.auth.auth.isAuth,
        authUser: state.auth.authUser,
        offers: state.offers.offers

    }
}


class AdvertiserContainer extends React.Component {


    getOffers = () => {
        this.props.getOffers();

    }
    componentDidMount() {
        window.scrollTo(0, 0);
        this.getOffers()
    }
    // componentDidUpdate() {

    //     this.getUserId()
    //     this.getProfileData()

    // }
    render() {


        if (!this.props.authUser) return <LightLoadingPageContainer />
        return (
            <Advertiser {...this.props} />
        )
    }
}




export default connect(mapStateToProps, {
    getOffers,
    deleteOffer
})(AdvertiserContainer)

