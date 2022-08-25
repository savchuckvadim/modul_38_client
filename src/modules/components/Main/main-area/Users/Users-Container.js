import { connect } from "react-redux"
import { deleteUser, fetching, requestUsers, setCurrentPage, setTotalUsersCount, setUsers } from "../../../../redux/reducers/users/users-reducer"
import { getAuthUser, getCount, getIsFetching, getIsFollowing, getPage, getPageSize, getTotalUsersCount, getUsersSelector } from "../../../../redux/selectors/user-selectors"

import UsersContainer from "./Users-API-Container"



const mapStateToProps = (state) => {

    return {
        authUser: getAuthUser(state),
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getPage(state),
        count: getCount(state),
        isFetching: getIsFetching(state),
        followingInProgress: getIsFollowing(state),
        deletingUser: state.users.deletingUser,
        portionSize: state.users.portionSize,
     


    }
}


export default connect(mapStateToProps, {
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    fetching,
    requestUsers,
    deleteUser



})(UsersContainer)