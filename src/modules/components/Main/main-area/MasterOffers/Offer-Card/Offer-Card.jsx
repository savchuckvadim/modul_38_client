import { NavLink } from 'react-router-dom';
import style from './Offer-Card.module.css';
import OfferAvatar from '../../AdvertiserOffers/Offers-Area/Offers/Offer-Title/Offer-Avatar/Offer-Avatar';
import FollowUnfollowButtons from '../../../../Elements/Button/Follow-Unfollow-Buttons/Follow-Unfollow-Buttons';

const OfferCard = (props) => {

   let description = props.offer.description
   if(description.length > 40){
    description = `${props.offer.description.substr(0, 40)}...` 
   }

    return (
        <div className={style.frame}>
           
                <OfferAvatar
                size={68}
                user={props.user}
               
                />

            {/* <NavLink className={style.login} to={'../profile/' + props.user.id}> */}
                <h3 className={style.login}>{props.offer.name}</h3>
                <p>Description: {description}</p>
                <p>Price: {`${props.offer.price} р`}</p>
                
            {/* </NavLink> */}

            <div className={style.follow__wrapper}>

        
                <FollowUnfollowButtons
                user={props.user}  
                followThunk={props.followThunk}
                unFollowThunk={props.unFollowThunk}
                followingInProgress={props.followingInProgress}
                authUser={props.authUser}
                />
            </div>
        </div>
    )
};

export default OfferCard
