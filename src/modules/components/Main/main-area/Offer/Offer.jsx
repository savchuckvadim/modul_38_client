
import Description from './Description/Description';
import style from './Offer.module.css'
import hero from '../../../../../assets/imgs/Vector.png'
import { LightLoadingPageContainer } from '../../../Elements/Loading/Light-Loading-Page-Container';
import OfferAvatar from '../AdvertiserOffers/Offers-Area/Offers/Offer-Title/Offer-Avatar/Offer-Avatar';
import OfferStatistics from './Offer-Statistics/Offer-Statistics';
import FollowUnfollowButtons from '../../../Elements/Button/Follow-Unfollow-Buttons/Follow-Unfollow-Buttons';


const Offer = (props) => {



    if (props) {
        return (
            <div className={style.wrapper}>

                <div className={style.hero__wrapper}>
                    <img className={style.hero} src={hero} alt='hero' />
                </div>



                <div className={style.information}>
                    <div className={style.info__wrapper}>
                        <div className={style.about__wrapper}>

                            <h1 className={style.name}>{props.offer.name}</h1>

                            <Description description={props.offer.description} />
                        </div>
                        <OfferStatistics
                            {...props}
                        />

                        <div className={style.buttons__wrapper}>
                            <FollowUnfollowButtons
                                user={props.offer.advertiser}
                                offer={props.offer}
                                follow={props.follow}
                                unfollow={props.unfollow}
                                followingInProgress={props.followingInProgress}
                                getLink={props.getLink}
                            />
                        </div>

                    </div>
                </div>


                <div className={style.avatar}>
                    <OfferAvatar
                        size={128}
                        border={true}

                        user={props.offer.advertiser}
                    />

                </div>



            </div>

        )

    } else {
        return <LightLoadingPageContainer />
    }

};

export default Offer