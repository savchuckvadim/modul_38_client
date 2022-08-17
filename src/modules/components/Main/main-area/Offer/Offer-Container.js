import React from "react";
import { connect } from "react-redux"
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { follow, getLink, getOffers, unfollow } from "../../../../redux/reducers/offers/offer-reducer";
import { LightLoadingPageContainer } from "../../../Elements/Loading/Light-Loading-Page-Container";
import Offer from "./Offer";

const withRouter = WrappedComponent => props => {
    const params = useParams();

    return (
        <WrappedComponent
            {...props}
            params={params}

        />
    );
};

const mapStateToProps = (state) => {

    return {
        authUserId: state.auth.authUser.id,
        followingInProgress: state.offers.followingInProgress,
        offers: state.offers.offers

    }
}

class OfferContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { offer: null, isFetching: false };
    }
    offerId = null
    // offer = null

    getOfferId = () => {
        if (this.props.params.offerId) {
            this.offerId = this.props.params.offerId;
        }

    }


    getOffer = () => {
        if (!this.state.offer) {

            this.props.offers.forEach(offer => {
                let id = Number(this.offerId)
                if (offer.id === id) {
                    this.setState({
                        offer: offer
                    });

                }
            })


        }



    }
    componentDidMount() {

        window.scrollTo(0, 0);
        this.props.getOffers(this.props.authUserId)
        this.getOfferId();
        this.getOffer();

    }
    componentDidUpdate() {
        this.props.getOffers(this.props.authUserId)
        this.getOfferId();
        this.getOffer();

    }
    render() {


        if (this.state.offer) {
            return (
                <Offer
                    offer={this.state.offer}
                    {...this.props}
                />
            )
        } else {
            return <h1>NOT Found</h1>
        }



    }
}

// export default connect(mapStateToProps)(Offer)
export default compose(

    connect(mapStateToProps, {
        getOffers,
        follow,
        unfollow,
        getLink
    }),
    withRouter,
    // withAuthRedirect
)(OfferContainer)