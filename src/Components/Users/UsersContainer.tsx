import React from 'react';
import {AppPropsType} from '../../Redux/ReduxStore';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {
    followUserAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleFetchingAC,
    unfollowUserAC,
    UsersType,
    UserType
} from '../../Redux/Reducers/UsersReducer';
import axios from 'axios';
import {UsersClassComponent} from './UsersClassComponent';
import {Preloader} from '../Common/Preloader/Preloader';

export type UsersContainerDataType = UsersType & MapDispatchPropsType

class UsersClassAPI extends React.Component<UsersContainerDataType, UsersType> {

    /*constructor(props: UsersContainerDataType) {
        super(props);
    }*/

    //super - переброска пропсов прототипу. Если кроме этого конструктор ничего не делает, можно не писать

    componentDidMount() {
        this.props.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleFetching(false);
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <>{this.props.isFetching && <Preloader/>}
                <UsersClassComponent
                    followUser={this.props.followUser}
                    unfollowUser={this.props.unfollowUser}
                    users={this.props.users}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}/>
            </>
        )
    }
}

type MapDispatchPropsType = {
    followUser: (userID: string) => void
    unfollowUser: (userID: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (usersCount: number) => void
    toggleFetching: (isFetching: boolean) => void
}

let mapStateToProps = (state: AppPropsType): UsersType => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
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
        toggleFetching: toggleFetchingAC
    }
))
(UsersClassAPI)