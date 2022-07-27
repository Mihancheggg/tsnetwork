import React from 'react';
import {AppPropsType} from '../../Redux/ReduxStore';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';
import {Users} from './Users';
import {followUserAC, setUsersAC, unfollowUserAC, UsersType, UserType} from '../../Redux/Reducers/UsersReducer';

export type UsersContainerDataType = UsersType & MapDispatchPropsType

type MapDispatchPropsType = {
    followUser: (userID: string) => void
    unfollowUser: (userID: string) => void
    setUsers: (users: Array<UserType>) => void
}

let mapStateToProps = (state: AppPropsType): UsersType => {
    return {
        users: state.usersReducer.users
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
        }
    }
}


export const UsersContainer = compose<React.FC>(connect(mapStateToProps, mapDispatchToProps))(Users)