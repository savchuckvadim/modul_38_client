import { connect } from "react-redux"
import { setCurrentPage, setTotalItemsCount } from "../../../../redux/reducers/paginator/paginator-reducer"
import { deleteUser, fetching, requestUsers, setUsers } from "../../../../redux/reducers/users/users-reducer"
import { getAuthUser, getIsFetching, getIsFollowing, getUsersSelector } from "../../../../redux/selectors/user-selectors"
import Users from "./Users"




const mapStateToProps = (state) => {

    return {
        authUser: getAuthUser(state),
        users: getUsersSelector(state),
        isFetching: getIsFetching(state),
        // followingInProgress: getIsFollowing(state),
        deletingUser: state.users.deletingUser,

        // paginator:
        pageSize: state.paginator.pageSize,
        totalItemsCount: state.paginator.totalItemsCount,
        currentPage: state.paginator.currentPage,
        portionSize: state.paginator.portionSize,
    }
}


export const UsersContainer =  connect(mapStateToProps, {
    setCurrentPage,
    setUsers,
    setTotalItemsCount,
    fetching,
    requestUsers,
    deleteUser

})(Users)