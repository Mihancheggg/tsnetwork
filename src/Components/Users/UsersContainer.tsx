import React from 'react';
import {AppPropsType} from '../../Redux/ReduxStore';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {
    followUserThunkCreator,
    getUsersThunkCreator,
    unfollowUserThunkCreator,
    UsersType
} from '../../Redux/Reducers/UsersReducer';
import {Users} from './Users';
import {Preloader} from '../Common/Preloader/Preloader';
import {withAuthRedirect} from '../../HOC/withAuthRedirect';
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../../Redux/Selectors/UsersSelectors';

export type UsersContainerDataType = UsersType & MapDispatchPropsType

class UsersClassContainer extends React.Component<UsersContainerDataType, {}> {

    /*constructor(props: UsersContainerDataType) {
        super(props);
    }*/

    //super - переброска пропсов прототипу. Если кроме этого конструктор ничего не делает, можно не писать

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        /*this.props.toggleFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })*/
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        /*this.props.setCurrentPage(pageNumber);
        this.props.toggleFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleFetching(false);
                this.props.setUsers(data.items)
            })*/
    }

    render() {
        return (
            <>{this.props.isFetching && <Preloader/>}
                <Users
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    followingInProgress={this.props.followingInProgress}
                    followUser={this.props.followUser}
                    unfollowUser={this.props.unfollowUser}
                    onPageChanged={this.onPageChanged}
                />

            </>
        )
    }
}

type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void
    followUser: (userID: number) => void
    unfollowUser: (userID: number) => void
}

let mapStateToProps = (state: AppPropsType): UsersType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
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

//let AuthRedirectComponent = withAuthRedirect(UsersClassContainer)

export const UsersContainer = compose<React.FC>(connect<UsersType, MapDispatchPropsType, UsersType, AppPropsType>
(mapStateToProps, {
        getUsers: getUsersThunkCreator,
        followUser: followUserThunkCreator,
        unfollowUser: unfollowUserThunkCreator,
    }
),withAuthRedirect)
(UsersClassContainer)