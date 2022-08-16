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
    

        case FOLLOW:
            result = {
                ...state
            }
            
            if (result.users.length > 0) {
                result.users = result.users.map(user => {
                    if (user.id === action.userId) {
                        user.followed = true
                        let count = 0
                        user.followers.forEach(f => {
                            if (f.id === action.authUser.id) {    //если среди массива объектов подписчиков содержится подписчик с id auth usera делает count больше нуля
                                count++
                            }

                        });
                        if (!count) { //если count = 0 значит в массиве отсутствует аутентифицированный пользователь
                            user.followers.push(action.authUser)  //пушим аутентифицированного пользователя в массив подписчиков
                        }
                        return user
                    } else {
                        return user
                    }
                })
            }

            return result

        case UNFOLLOW:
            result = {
                ...state
            }
            

            if (result.users.length > 0) {
                result.users = result.users.map(user => {
                    if (user.id === action.userId) {
                        user.followed = false
                        let count = 0
                        let indexOfAuthUser = undefined
                        user.followers.forEach((f, i) => {
                            
                            if (f.id === action.authUser.id) {    //если среди массива объектов подписчиков содержится подписчик с id auth usera делает count больше нуля
                                count++
                                indexOfAuthUser = i
                            }

                        });
                        if (count) { //если count !== 0 значит в массиве Есть! аутентифицированный пользователь

                            user.followers.splice(indexOfAuthUser, 1)  //удаляем аутентифицированного пользователя из массива подписчиков
                            
                        }
                        return user
                    } else {
                        return user
                    }
                })
            }

            return result

        case FOLLOWING_IN_PROGRESS:
            result = {
                ...state
            }
            result.followingInProgress = [...state.followingInProgress]

            action.isFetching
                ? result.followingInProgress.push(action.userId)
                : result.followingInProgress = state.followingInProgress.filter(id => id !== action.userId)

            return result


        default:
            return result

    }

}

export const follow = (userId, authUser) => ({ type: FOLLOW, userId, authUser })
export const unFollow = (userId, authUser) => ({ type: UNFOLLOW, userId, authUser })
export const toggleFollowingInProgress = (userId, isFetching) => ({ type: FOLLOWING_IN_PROGRESS, userId, isFetching })


export const followThunk = (userId, authUser) => async (dispatch) => {

    dispatch(toggleFollowingInProgress(userId, true))


    await usersAPILaravel.follow(userId)
    
    // if (res === 0) {

    dispatch(follow(userId, authUser))
    // }
    dispatch(toggleFollowingInProgress(userId, false))
}

export const unFollowThunk = (userId, authUser) => async (dispatch) => {
    dispatch(toggleFollowingInProgress(userId, true))

    let res = await usersAPILaravel.unfollow(userId)

    if (res) {
        if (res.data.resultCode === 1) {

            dispatch(unFollow(userId, authUser))
        }


    }
    dispatch(toggleFollowingInProgress(userId, false))

}

export default masterReducer