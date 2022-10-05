import React from 'react';
import {UserType} from '../../Redux/Reducers/UsersReducer';
import {Redirect} from 'react-router-dom';
import {store} from '../../Redux/ReduxStore';
import {Paginator} from '../Common/Paginator/Paginator';
import {User} from './User/User';

type UsersComponentPropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followingInProgress: Array<number>
    onPageChanged: (pageNumber: number) => void
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
}

export const Users = (props: UsersComponentPropsType) => {

    let state = store.getState()

    if (!state.authReducer.isAuth) return <Redirect to={'/login'}/>

    return (
        <div>
            <Paginator portionSize={10} pageSize={props.pageSize} totalUsersCount={props.totalUsersCount} currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}/>
            {props.users.map(el => <User key={el.id} user={el} followingInProgress={props.followingInProgress}
                                         followUser={props.followUser} unfollowUser={props.unfollowUser}/>)}
        </div>
    );
};