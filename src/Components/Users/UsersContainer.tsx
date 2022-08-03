import React from 'react';
import {AppPropsType} from '../../Redux/ReduxStore';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';
import {UsersClass} from './UsersClass';
import {
    followUserAC,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unfollowUserAC,
    UsersType,
    UserType
} from '../../Redux/Reducers/UsersReducer';

export type UsersContainerDataType = UsersType & MapDispatchPropsType

type MapDispatchPropsType = {
    followUser: (userID: string) => void
    unfollowUser: (userID: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (usersCount: number) => void
}

let mapStateToProps = (state: AppPropsType): UsersType => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        followUser: (userID: string) => {
            dispatch(followUserAC(userID))
        },
        unfollowUser: (userID: string) => {
            dispatch(unfollowUserAC(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (usersCount: number) => {
            dispatch(setTotalUsersCountAC(usersCount))
        }
    }
}


export const UsersContainer = compose<React.FC>(connect(mapStateToProps, mapDispatchToProps))(UsersClass)