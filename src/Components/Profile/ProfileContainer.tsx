import React from 'react';
import {Profile} from './Profile';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {getUserProfileThunkCreator, ProfileFromServerPropsType} from '../../Redux/Reducers/ProfileReducer';
import {AppPropsType} from '../../Redux/ReduxStore';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../HOC/withAuthRedirect';

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

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileClassContainer)

let mapStateToProps = (state: AppPropsType): MapStateToPropsType => {
    return {
        profile: state.profileReducer.profile
    }
}

//let withUrlDataContainerComponent = withRouter(ProfileClassContainer)

export const ProfileContainerAPI = compose<React.FC>(
    connect(mapStateToProps, {getUserProfile: getUserProfileThunkCreator}),
    withRouter
)(AuthRedirectComponent)
