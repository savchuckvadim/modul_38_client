
import React, { useEffect } from "react";
import Filter from "../../../Elements/Filter/Filter";
import FilterButtons from "../../../Elements/Filter/Filter-Buttons/Filter-Buttons";
import { LightLoadingPageContainer } from "../../../Elements/Loading/Light-Loading-Page-Container";
import Title from "../../../Elements/Title/Title";
import Paginator from '../../../Elements/Paginator/Paginator';
import style from './Master.module.css'
import OfferCard from "./Offer-Card/Offer-Card";


const Master = (props) => {
    const offers = () => {
        props.getOffers(props.currentPage, props.pageSize)
    };
    const filterActions = ['may', 'not my', 'all'];
    
    useEffect((props) => {
        window.scrollTo(0, 0);
        
        offers();
    }, []);


  

    let loader = <LightLoadingPageContainer />
    let users =
        <>

            <Title title={'Offers'} />
            <Filter>
                
                <FilterButtons actions={filterActions} filter={props.filterOffers} />
            </Filter>
            <div className={style.container}>
                {props.offers.length <= 0
                    ? null
                    : props.offers.map(offer =>
                        !offer.advertiser
                            ? null
                            : <OfferCard
                                key={`user-card-${offer.id}`}
                                user={offer.advertiser}
                                name={offer.advertiser.name}
                                offer={offer}
                                follow={props.follow}
                                unfollow={props.unfollow}
                                getLink={props.getLink}
                                followingInProgress={props.followingInProgress}
                                authUser={props.authUser}

                            />)}
            </div>

            <div className={style.pages}>

            <Paginator
                    totalItemsCount={props.totalUsersCount}
                    pageSize={props.pageSize}
                    currentPage={props.currentPage}
                    onPageChanged={props.onPageChanged}
                    portionSize={props.portionSize}
                   

                />
            </div>

        </>
    return (
        <>
            {props.isFetching ? loader : users}
        </>
    )


}




export default Master;