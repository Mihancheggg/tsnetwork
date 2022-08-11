import React from 'react';
import {AppPropsType} from '../../Redux/ReduxStore';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {
    followUserAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleFetchingAC, toggleFollowingProgressAC,
    unfollowUserAC,
    UsersType,
    UserType
} from '../../Redux/Reducers/UsersReducer';
import {Users} from './Users';
import {Preloader} from '../Common/Preloader/Preloader';
import {usersAPI} from '../../API/API';

export type UsersContainerDataType = UsersType & MapDispatchPropsType

class UsersClassContainer extends React.Component<UsersContainerDataType, {}> {

    /*constructor(props: UsersContainerDataType) {
        super(props);
    }*/

    //super - переброска пропсов прототипу. Если кроме этого конструктор ничего не делает, можно не писать

    componentDidMount() {
        this.props.toggleFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleFetching(false);
                this.props.setUsers(data.items)
            })
    }

    render() {
        return (
            <>{this.props.isFetching && <Preloader/>}
                <Users
                    followUser={this.props.followUser}
                    unfollowUser={this.props.unfollowUser}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                    users={this.props.users}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    followingInProgress={this.props.followingInProgress}/>

            </>
        )
    }
}

type MapDispatchPropsType = {
    followUser: (userID: number) => void
    unfollowUser: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (usersCount: number) => void
    toggleFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userID: number) => void
}

let mapStateToProps = (state: AppPropsType): UsersType => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        followingInProgress: state.usersReducer.followingInProgress
    }
}

/*let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
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
        },
        toggleFetching: (isFetching: boolean) => {
            dispatch(toggleFetchingAC(isFetching))
        },
    }
}*/


export const UsersContainer = compose<React.FC>(connect(mapStateToProps, {
        followUser: followUserAC,
        unfollowUser: unfollowUserAC,
        setUsers: setUsersAC,
        setCurrentPage: setCurrentPageAC,
        setTotalUsersCount: setTotalUsersCountAC,
        toggleFetching: toggleFetchingAC,
        toggleFollowingProgress: toggleFollowingProgressAC
    }
))
(UsersClassContainer)