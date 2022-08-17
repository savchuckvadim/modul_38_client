import { usersAPILaravel } from "../../../services/api-laravel";



const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';


const initialState = {
    
    isFetching: false,
    followingInProgress: [],


}


const masterReducer = (state = initialState, action) => {
    let result = state

    switch (action.type) {
    

  
        default:
            return result

    }

}

// export const follow = (userId, authUser) => ({ type: FOLLOW, userId, authUser })
// export const unFollow = (userId, authUser) => ({ type: UNFOLLOW, userId, authUser })
// export const toggleFollowingInProgress = (userId, isFetching) => ({ type: FOLLOWING_IN_PROGRESS, userId, isFetching })


// export const followThunk = (userId, authUser) => async (dispatch) => {

//     dispatch(toggleFollowingInProgress(userId, true))


//     await usersAPILaravel.follow(userId)
    
//     // if (res === 0) {

//     dispatch(follow(userId, authUser))
//     // }
//     dispatch(toggleFollowingInProgress(userId, false))
// }

// export const unFollowThunk = (userId, authUser) => async (dispatch) => {
//     dispatch(toggleFollowingInProgress(userId, true))

//     let res = await usersAPILaravel.unfollow(userId)

//     if (res) {
//         if (res.data.resultCode === 1) {

//             dispatch(unFollow(userId, authUser))
//         }


//     }
//     dispatch(toggleFollowingInProgress(userId, false))

// }

export default masterReducer