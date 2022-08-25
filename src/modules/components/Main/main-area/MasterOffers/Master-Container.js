import React from "react";
import { connect } from "react-redux"
import { Navigate, useParams } from "react-router-dom";
import { compose } from "redux";
import Master from "./Master";
import { filterOffers, follow, getLink, getOffers, unfollow } from "../../../../redux/reducers/offers/offer-reducer";
import { laraGetAuth } from "../../../../redux/reducers/auth/auth-reducer";




const mapStateToProps = (state) => {

    return {
        isAuth: state.auth.auth.isAuth,
        authUser:state.auth.authUser,
        // auth: state.auth.auth,
        followingInProgress: state.offers.followingInProgress,
        offers: state.offers.offers

    }
}



// const withRouter = WrappedComponent => props => {
//     const params = useParams();
//     // etc... other react-router-dom v6 hooks

//     return (
//         <WrappedComponent
//             {...props}
//             params={params}
//         // etc...
//         />
//     );
// };



export const  MasterContainer =  connect(mapStateToProps, {
    laraGetAuth,
    getOffers,
    filterOffers,
    follow,
    unfollow,
    getLink
})(Master)

