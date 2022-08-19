import React from 'react';
import {Profile} from './Profile';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {ProfileFromServerPropsType, getUserProfileThunkCreator} from '../../Redux/Reducers/ProfileReducer';
import {AppPropsType, store} from '../../Redux/ReduxStore';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';

type PathParamType = {
    userID: string
}

export type MapStateToPropsType = {
    profile: ProfileFromServerPropsType | null
}

type MapDispatchToPropsType = {
    getUserProfile: (userID: string) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

export type ProfileContainerPropsType = OwnPropsType & RouteComponentProps<PathParamType>


class ProfileClassContainer extends React.Component<ProfileContainerPropsType, {}> {

    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) {
            userID = '2'
        }
        this.props.getUserProfile(userID)
    }

    render() {

        let state = store.getState()

        if(!state.authReducer.isAuth) return <Redirect to={'/login'}/>

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state: AppPropsType): MapStateToPropsType => {
    return {
        profile: state.profileReducer.profile
    }
}

//let withUrlDataContainerComponent = withRouter(ProfileClassContainer)

export const ProfileContainerAPI = compose<React.FC>(
    connect(mapStateToProps, {getUserProfile: getUserProfileThunkCreator}),
    withRouter
)(ProfileClassContainer)
