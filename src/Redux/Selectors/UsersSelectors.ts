import {RootStateType} from '../ReduxStore';
import {UserType} from '../Reducers/UsersReducer';

export const getUsers = (state: RootStateType): Array<UserType> => {
    return state.usersReducer.users
}

export const getPageSize = (state: RootStateType): number => {
    return state.usersReducer.pageSize
}

export const getTotalUsersCount = (state: RootStateType): number => {
    return state.usersReducer.totalUsersCount
}

export const getCurrentPage = (state: RootStateType): number => {
    return state.usersReducer.currentPage
}

export const getIsFetching = (state: RootStateType): boolean => {
    return state.usersReducer.isFetching
}

export const getFollowingInProgress = (state: RootStateType): Array<number> => {
    return state.usersReducer.followingInProgress
}