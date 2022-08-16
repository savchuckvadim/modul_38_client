import React from 'react';
import {LightLoadingPageContainer} from '../../../Elements/Loading/Light-Loading-Page-Container'
import OffersArea from './Offers-Area/Offers-Area';

// import Post from './Posts/Post';
import ProfileInformation from './Profile-Information/Profile-Information';
import style from './Profile.module.css';
import { SendOfferContainer } from './Send-Offer/Send-Offer-Container';



export const Advertiser = (props) => {
  
   let userName = null
   let img = null
   
   
 
      if(props.visitedUser){
        userName = props.visitedUser.profile.name        
        img = null 

      }
    

let advertiser
 props.visitedUser.profile 
 ?  advertiser = <div className={style.profile__container}>
            <ProfileInformation {...props}/>
            <SendOfferContainer />
            <OffersArea offers={props.offers}
            delete={props.deleteOffer}/>
            
        </div>
: advertiser = <LightLoadingPageContainer/>

    return advertiser

};






export default Advertiser;