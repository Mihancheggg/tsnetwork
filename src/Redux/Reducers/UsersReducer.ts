import {usersAPI} from '../../API/API';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {CommonActionsType, RootStateType} from '../ReduxStore';
import {updateObjectInArray} from '../../Utils/object-helpers';

export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export type UserType = {
    id: number
    photos: {
        small: string
        large: string
    }
    followed: boolean
    name: string
    status: string
    location: {
        country: string
        city: string
    }
}

let initialState: UsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export type UsersReducerActionTypes = followUserACType
    | unfollowUserACType
    | setUserACType | setCurrentPageACType
    | setTotalUsersCountACType | toggleFetchingACType | toggleFollowingProgressACType

type followUserACType = ReturnType<typeof followUserAC>

type unfollowUserACType = ReturnType<typeof unfollowUserAC>

type setUserACType = ReturnType<typeof setUsersAC>

type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>

type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>

type toggleFetchingACType = ReturnType<typeof toggleFetchingAC>

type toggleFollowingProgressACType = ReturnType<typeof toggleFollowingProgressAC>

export const followUserAC = (userId: number) => {
    return {
        type: 'FOLLOW-USER',
        userId: userId
    } as const
}

export const unfollowUserAC = (userId: number) => {
    return {
        type: 'UNFOLLOW-USER',
        userId: userId
    } as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}

export const setCurrentPageAC = (pageNumber: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            pageNumber
        }
    } as const
}

export const setTotalUsersCountAC = (usersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        payload: {
            usersCount
        }
    } as const
}

export const toggleFetchingAC = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-FETCHING',
        payload: {
            isFetching
        }
    } as const
}

export const toggleFollowingProgressAC = (isFetching: boolean, userID: number) => {
    return {
        type: 'TOGGLE-FOLLOWING-PROGRESS',
        payload: {
            isFetching,
            userID
        }
    } as const
}

export const usersReducer = (state: UsersType = initialState, action: UsersReducerActionTypes): UsersType => {
    switch (action.type) {
        case 'FOLLOW-USER': {
            /*let newState = {
                ...state,
                users: state.users.map(el => el.id === action.userId ? ({...el, followed: true}) : el)
            }*/
            let newState = {...state, users: updateObjectInArray(state.users, action.userId, {followed: true})}
            return newState
        }
        case 'UNFOLLOW-USER': {
            /*let newState = {
                ...state,
                users: state.users.map(el => el.id === action.userId ? ({...el, followed: false}) : el)
            }*/
            let newState = {...state, users: updateObjectInArray(state.users, action.userId, {followed: false})}
            return newState
        }
        case 'SET-USERS': {
            return {...state, users: action.users}
        }
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.payload.pageNumber}
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return {...state, totalUsersCount: action.payload.usersCount}
        }
        case 'TOGGLE-FETCHING': {
            return {...state, isFetching: action.payload.isFetching}
        }
        case 'TOGGLE-FOLLOWING-PROGRESS': {
            return action.payload.isFetching
                ? {...state, followingInProgress: [...state.followingInProgress, action.payload.userID]}
                : {...state, followingInProgress: state.followingInProgress.filter(id => id !== action.payload.userID)}
        }
        default:
            return state
    }
}

export type ThunkType = ThunkAction<void, RootStateType, unknown, CommonActionsType>
export type ThunkDispatchType = ThunkDispatch<RootStateType, unknown, CommonActionsType>

export const getUsersThunkCreator = (currentPage: number, pageSize: number): ThunkType => async (dispatch: ThunkDispatchType) => {
    dispatch(setCurrentPageAC(currentPage));
    dispatch(toggleFetchingAC(true));
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleFetchingAC(false))
    dispatch(setUsersAC(data.items))
    dispatch(setTotalUsersCountAC(data.totalCount))

}

export const followUnfollowFlow = async (userID: number, dispatch: ThunkDispatchType, apiMethod: { (userID: number): Promise<any>}, action: {(userId: number): CommonActionsType}) => {
    dispatch(toggleFollowingProgressAC(true, userID))
    let data = await apiMethod(userID)
    if (data.resultCode === 0) {
        dispatch(action(userID))
    }
    dispatch(toggleFollowingProgressAC(false, userID))
}

export const followUserThunkCreator = (userID: number): ThunkType => async (dispatch: ThunkDispatchType) => {
    const apiMethod = usersAPI.followUser.bind(usersAPI)
    const action = followUserAC
    followUnfollowFlow(userID,dispatch,apiMethod,action)
}

export const unfollowUserThunkCreator = (userID: number): ThunkType => async (dispatch: ThunkDispatchType) => {
    const apiMethod = usersAPI.unfollowUser.bind(usersAPI)
    const action = unfollowUserAC
    followUnfollowFlow(userID,dispatch,apiMethod,action)
}