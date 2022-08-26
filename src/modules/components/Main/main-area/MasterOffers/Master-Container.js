
import { connect } from "react-redux"
import Master from "./Master";
import { filterOffers, follow, getLink, getOffers, unfollow } from "../../../../redux/reducers/offers/offer-reducer";
import { laraGetAuth } from "../../../../redux/reducers/auth/auth-reducer";




const mapStateToProps = (state) => {

    return {
        isAuth: state.auth.auth.isAuth,
        authUser:state.auth.authUser,
        followingInProgress: state.offers.followingInProgress,
        offers: state.offers.offers,
        
        //paginator:
        pageSize:  state.offers.pageSize ,
        totalUsersCount: state.offers.totalUsersCount,
        currentPage: state.offers.currentPage,
        portionSize:  state.offers.portionSize,

    }
}




export const  MasterContainer =  connect(mapStateToProps, {
    laraGetAuth,
    getOffers,
    filterOffers,
    follow,
    unfollow,
    getLink
})(Master)

