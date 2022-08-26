import React from 'react';
import {LightLoadingPageContainer} from '../../../Elements/Loading/Light-Loading-Page-Container'
import Title from '../../../Elements/Title/Title';
import OffersArea from './Offers-Area/Offers-Area';
import style from './Advertiser.module.css';
import { SendOfferContainer } from './Send-Offer/Send-Offer-Container';



export const Advertiser = (props) => {
  

    

let advertiser

 advertiser = <div className={style.profile__container}>
                      
            <SendOfferContainer />
            <OffersArea offers={props.offers}
            delete={props.deleteOffer}/>
            
        </div>
 

    return <>
    <Title title={`${props.authUser.name} ${props.authUser.surname}`}/>
    {advertiser}
    </>

};






export default Advertiser;