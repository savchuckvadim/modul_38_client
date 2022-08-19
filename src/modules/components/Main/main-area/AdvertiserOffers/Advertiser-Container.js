import React from "react";
import { connect } from "react-redux"
import { Navigate, useParams } from "react-router-dom";
import { compose } from "redux";
import { deleteOffer, getOffers } from "../../../../redux/reducers/offers/offer-reducer";
import { LightLoadingPageContainer } from "../../../Elements/Loading/Light-Loading-Page-Container";
import Advertiser from "./Advertiser";




const mapStateToProps = (state) => {
 
    return {
        isAuth: state.auth.auth.isAuth,
        authUser: state.auth.authUser,
        offers:state.offers.offers

    }
}



const withRouter = WrappedComponent => props => {
    const params = useParams();
   

    return (
        <WrappedComponent
            {...props}
            params={params}
      
        />
    );
};



class AdvertiserContainer extends React.Component {

    userId = null
    // isAuthUser = true
    currentUser
    photo = null



    getUserId = (params) => {

        if (this.props.params.userId) {
            
            this.userId = this.props.params.userId;
            this.isAuthUser = false

        }
        else {
            
            this.userId = this.props.authUser.id
            this.isAuthUser = true

        }

    }

    getProfileData = () => {
        this.props.getOffers(this.userId);
      
    }
    componentDidMount() {
       
            window.scrollTo(0, 0);
         
        this.getUserId()
        this.getProfileData()

    }
    componentDidUpdate() {
        
        this.getUserId()
        this.getProfileData()

    }
    render() {
        
        if (this.props.params.userId && `${this.props.params.userId}` === `${this.props.authUser.id}`) return <Navigate replace to={'../profile'} />
        if(!this.props.authUser) return <LightLoadingPageContainer/>
        return (

            <Advertiser {...this.props}
                isCurrentUser={this.isAuthUser}

            />
        )
    }
}




export default compose(

    connect(mapStateToProps, {
       getOffers,
       deleteOffer

    }),
    withRouter,
    // withAuthRedirect
)(AdvertiserContainer)

