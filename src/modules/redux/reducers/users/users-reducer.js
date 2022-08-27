import { usersAPI } from "../../../services/api-laravel";
import { setTotalItemsCount } from "../paginator/paginator-reducer";


const SET_USERS = 'SET_USERS';
const FETCHING = 'FETCHING';
const CREATING_USER_IN_PROGRESS = 'CREATING_USER_IN_PROGRESS';
const DELETE_USER = 'DELETE_USER';
const DELETING_USER = 'DELETING_USER';

const initialState = {
    users: [],
    isFetching: false,
    followingInProgress: [],
    creatingUser: false,
    deletingUser: false,

}


//ACTION CREATORS

export const setUsers = (users) => ({ type: SET_USERS, users });
export const fetching = (bool) => ({ type: FETCHING, bool });
export const creatingNewUser = (bool) => ({ type: CREATING_USER_IN_PROGRESS, bool });
const deleteUserAC = (userId) => ({ type: DELETE_USER, userId });
const deletingNewUser = (userId) => ({ type: DELETING_USER, userId });


//THUNKS
export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(fetching(true))
    let res = await usersAPI.getUsers(currentPage, pageSize)
    const users = res.data;
    dispatch(setTotalItemsCount(res.meta.total)) //from paginator-reducer
    dispatch(setUsers(users))
    dispatch(fetching(false))

};
export const createNewUser = (name, surname, email, password, password_confirmation, role) => async (dispatch) => {
    dispatch(creatingNewUser(true));
    try {

        const res = await usersAPI.addUser(name, surname, email, password, password_confirmation, role)

        if (res.data.createdUser) {
            alert(`${res.data.createdUser.name} ${res.data.createdUser.surname} was created!`)
        } else {
            alert('error')
        }
        dispatch(creatingNewUser(false));
    } catch (err) {
        dispatch(creatingNewUser(false))
        alert(err.message);
    }


    dispatch(creatingNewUser(false));
};
export const deleteUser = (userId) => async (dispatch) => {
    dispatch(deletingNewUser(userId))
    await usersAPI.deleteUser(userId);
    dispatch(deleteUserAC(userId));
    dispatch(deletingNewUser(false))
};


//REDUCER
const usersReducer = (state = initialState, action) => {
    let result = state

    switch (action.type) {
        case SET_USERS:
            result = { ...state }
            result.users = action.users
            return result
        case FETCHING:
            result = { ...state }
            result.isFetching = action.bool
            return result
        case CREATING_USER_IN_PROGRESS:
            result = { ...state }
            result.creatingUser = action.bool
            return result
        case DELETE_USER:
            result = { ...state }
            result.users = []

            state.users.forEach(o => {
                if (o.id !== action.userId) {
                    result.users.push(o);
                }

            })
            return result
        case DELETING_USER:
            result = { ...state }
            result.deletingUser = action.userId
            return result

        default:
            return result

    }

};
export default usersReducer;