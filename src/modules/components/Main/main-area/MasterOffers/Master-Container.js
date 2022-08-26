
import { connect } from "react-redux"
import Master from "./Master";
import { filterOffers, follow, getLink, getOffers, setCurrentPage, unfollow } from "../../../../redux/reducers/offers/offer-reducer";
import { laraGetAuth } from "../../../../redux/reducers/auth/auth-reducer";




const mapStateToProps = (state) => {

    return {
        isAuth: state.auth.auth.isAuth,
        authUser: state.auth.authUser,
        followingInProgress: state.offers.followingInProgress,
        offers: state.offers.offers,

        //paginator:
        pageSize: state.offers.pageSize,
        totalOffersCount: state.offers.totalOffersCount,
        currentPage: state.offers.currentPage,
        portionSize: state.offers.portionSize,

    }
}





export const MasterContainer = connect(mapStateToProps, {
    setCurrentPage,
    laraGetAuth,
    getOffers,
    filterOffers,
    follow,
    unfollow,
    getLink
})(Master)

