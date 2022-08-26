import OfferCard from "./Offer-Card/Offer-Card";

const Offers = (props) => {

    let offersCards = [];

    if (props.offers.length > 0) {
        props.offers.forEach(offer => {
            if (offer.advertiser) {
                offersCards.push(<OfferCard
                    key={`user-card-${offer.id}`}
                    user={offer.advertiser}
                    name={offer.advertiser.name}
                    offer={offer}
                    follow={props.follow}
                    unfollow={props.unfollow}
                    getLink={props.getLink}
                    followingInProgress={props.followingInProgress}
                    authUser={props.authUser}

                />)
            }
        })
    }
    return  offersCards
};

export default Offers