import React from 'react';
import {Profile} from './Profile';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {ProfileFromServerPropsType, setUserProfile} from '../../Redux/Reducers/ProfileReducer';
import {AppPropsType} from '../../Redux/ReduxStore';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {usersAPI} from '../../API/API';

type PathParamType = {
    userID: string
}

export type MapStateToPropsType = {
    profile: ProfileFromServerPropsType | null
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileFromServerPropsType) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

export type ProfileContainerPropsType = OwnPropsType & RouteComponentProps<PathParamType>


class ProfileClassContainer extends React.Component<ProfileContainerPropsType, {}> {

    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) {
            userID = '2'
        }
        usersAPI.getUserProfile(userID)
            .then(data => {
                this.props.setUserProfile(data)
            })
    }

    render() {
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
    connect(mapStateToProps, {setUserProfile}),
    withRouter
)(ProfileClassContainer)
