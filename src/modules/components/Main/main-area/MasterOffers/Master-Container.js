import { connect } from "react-redux"
import Master from "./Master";
import { filterOffers, follow, getLink, getOffers, unfollow } from "../../../../redux/reducers/offers/offer-reducer";
import { laraGetAuth } from "../../../../redux/reducers/auth/auth-reducer";
import { setCurrentPage } from "../../../../redux/reducers/paginator/paginator-reducer";




const mapStateToProps = (state) => {

    return {
        isAuth: state.auth.auth.isAuth,
        authUser: state.auth.authUser,
        offers: state.offers.offers,
        followingInProgress: state.offers.followingInProgress,
        

        //paginator:
        pageSize: state.paginator.pageSize,
        totalItemsCount: state.paginator.totalItemsCount,
        currentPage: state.paginator.currentPage,
        portionSize: state.paginator.portionSize,
    }
}





export const MasterContainer = connect(mapStateToProps, {
    setCurrentPage,  //paginator
    laraGetAuth,
    getOffers,
    filterOffers,
    follow,
    unfollow,
    getLink
})(Master)

