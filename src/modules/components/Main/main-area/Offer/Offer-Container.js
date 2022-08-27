import React from "react";
import { connect } from "react-redux"
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { follow, getLink, getOffer, unfollow } from "../../../../redux/reducers/offers/offer-reducer";
import Offer from "./Offer";
import { NotFoundContainer } from '../404-Page/404-Page-Container '

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
        offers: state.offers.offers,
        currentPage: state.paginator.currentPage,
        portionSize: state.paginator.portionSize

    }
}

class OfferContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { offer: null };

    }


    getOfferId = () => {
        let offerId = null
        if (this.props.params.offerId) {

            offerId = Number(this.props.params.offerId);
        }
        return offerId;
    }

    offerRequest = async () => {

        if (!this.state.offer) {
            let offerId = this.getOfferId();
            await this.props.getOffer(offerId)
            this.getOfferFromStateOffers(offerId)

        }
    }

    getOfferFromStateOffers = (offerId) => {
        if (!this.state.offer) {
            let searchingOffer = null;
            this.props.offers.forEach(offer => {

                if (offer.id === offerId) {
                    searchingOffer = offer

                };
            });

            this.setState({
                offer: searchingOffer
            });


        };

    }

    componentDidMount() {

        window.scrollTo(0, 0);
        this.offerRequest();


    }
    componentDidUpdate() {
        this.offerRequest();

    }

    render() {
        
        if (this.state.offer) {
            return (
                <Offer offer={this.state.offer} {...this.props} />
            )
        } else {
            return <NotFoundContainer />
        }
    }
}


export default compose(

    connect(mapStateToProps, {
        getOffer,
        follow,
        unfollow,
        getLink
    }),
    withRouter,

)(OfferContainer)