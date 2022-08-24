
import React, { useEffect } from "react";
import Filter from "../../../Elements/Filter/Filter";
import { LightLoadingPageContainer } from "../../../Elements/Loading/Light-Loading-Page-Container";
import Title from "../../../Elements/Title/Title";
import My from "./Filter/My";
// import Paginator from "./Paginator/Paginator";

import style from './Master.module.css'
import OfferCard from "./Offer-Card/Offer-Card";


const Master = (props) => {

window.scrollTo(0, 0);
useEffect(()=> {
    props.getOffers()
}, [])
    // let isFetching = false
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let loader = <LightLoadingPageContainer />
    let users =
        <>

            <Title title={'Offers'} />
            <Filter>
                <My filterOffers={props.filterOffers} />
            </Filter>
            <div className={style.container}>
                {props.offers.map(offer =>
                    <OfferCard
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

                {/* <Paginator 
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}

                /> */}
            </div>

        </>
    return (
        <>
            {props.isFetching ? loader : users}
        </>
    )


}




export default Master;