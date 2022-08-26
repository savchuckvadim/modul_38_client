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
        currentPage: state.offers.currentPage,
        portionSize: state.offers.portionSize

    }
}

class OfferContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { offer: null, isFetching: false };

    }
    // offerId = null
    // offer = null

    getOfferId = () => {
        let offerId = null
        if (this.props.params.offerId) {
            // this.offerId = this.props.params.offerId;
            offerId = this.props.params.offerId;
        }

        return offerId;

    }
    offerRequest = async () => {
        let offerId = await this.getOfferId();
        await this.props.getOffer(offerId)
    }


    getOffer = () => {
        if (!this.state.offer) {

            this.props.offers.forEach(offer => {
                let id = Number(this.offerId)
                if (offer.id === id) {
                    this.setState({
                        offer: offer
                    });
                };
            });
        };

    }
    componentDidMount() {
        window.scrollTo(0, 0);
        this.offerRequest();
        this.getOffer();

    }
    componentDidUpdate() {
        
        this.offerRequest();
        this.getOffer();

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

// export default connect(mapStateToProps)(Offer)
export default compose(

    connect(mapStateToProps, {
        getOffer,
        follow,
        unfollow,
        getLink
    }),
    withRouter,
    // withAuthRedirect
)(OfferContainer)