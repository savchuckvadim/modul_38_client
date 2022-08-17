import React from "react";
import { connect } from "react-redux"
import { Navigate, useParams } from "react-router-dom";
import { compose } from "redux";
import { dislike, getDataForLoadProfilePage, getStatus, like, loadPhoto, updateStatus } from "../../../../redux/reducers/profile/profile-reducer"
import { LightLoadingPageContainer } from "../../../Elements/Loading/Light-Loading-Page-Container";
import Master from "./Master";
import { follow, getLink, getOffers, unfollow } from "../../../../redux/reducers/offers/offer-reducer";




const mapStateToProps = (state) => {

    return {
        isAuth: state.auth.auth.isAuth,
        auth: state.auth.auth,
        followingInProgress: state.offers.followingInProgress,
        offers: state.offers.offers

    }
}



const withRouter = WrappedComponent => props => {
    const params = useParams();
    // etc... other react-router-dom v6 hooks

    return (
        <WrappedComponent
            {...props}
            params={params}
        // etc...
        />
    );
};



class MasterContainer extends React.Component {

    userId = null
    isAuthUser = true
    currentUser
    photo = null



    getUserId = () => {

        if (this.props.params.userId) {

            this.userId = this.props.params.userId;
            this.isAuthUser = false

        }
        else {

            this.userId = this.props.auth.id
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

        if (this.props.params.userId && `${this.props.params.userId}` === `${this.props.auth.id}`) return <Navigate replace to={'../masterOffers'} />
        // if(!this.props.visitedUser) return <LightLoadingPageContainer/>
        return (
            
            <Master {...this.props}
                // profilePhoto={this.props.profile.photos.small}
                // isCurrentUser={this.isAuthUser}


            />
        )
    }
}




export default compose(

    connect(mapStateToProps, {

        // getProfileAndSetVisitedUser,
    
        //////
        getOffers: getOffers,
        follow,
        unfollow,
        getLink


        //    deleteOffer

    }),
    withRouter,
    // withAuthRedirect
)(MasterContainer)

// export default connect(mapStateToProps, {

//     getProfile

// })(WithUrlDataContainerComponent)