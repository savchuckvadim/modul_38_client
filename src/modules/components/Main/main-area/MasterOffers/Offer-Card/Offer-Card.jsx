import { NavLink } from 'react-router-dom';
import style from './Offer-Card.module.css';
import OfferAvatar from '../../AdvertiserOffers/Offers-Area/Offers/Offer-Title/Offer-Avatar/Offer-Avatar';
import FollowUnfollowButtons from '../../../../Elements/Button/Follow-Unfollow-Buttons/Follow-Unfollow-Buttons';

const OfferCard = (props) => {

    let description = props.offer.description
    if (description.length > 10) {
        description = `${props.offer.description.substr(0, 10)}...`
    }

    return (
        <div className={style.frame}>

            <OfferAvatar
                size={68}
                user={props.user}

            />
            <div lassName={style.information__wrapper}>
                <NavLink className={style.link} to={'../offer/' + props.offer.id}>

                    <h3 className={style.link}>{props.offer.name}</h3>

                    <p>Description: {description}</p>
                    <p>Profit: {`${props.offer.mastersProfit} р`}</p>

                </NavLink>


            </div>
            <div className={style.follow__wrapper}>


                <FollowUnfollowButtons
                    user={props.user}
                    offer={props.offer}
                    follow={props.follow}
                    unfollow={props.unfollow}
                    followingInProgress={props.followingInProgress}
                    getLink={props.getLink}
                />
            </div>
        </div >
    )
};

export default OfferCard
