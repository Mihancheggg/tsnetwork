import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {ProfileFromServerPropsType, setUserProfile} from '../../Redux/Reducers/ProfileReducer';
import {AppPropsType} from '../../Redux/ReduxStore';

export type MapStateToPropsType = {
    profile: ProfileFromServerPropsType | null
}

type MapDispatchToPropsTYpe = {
    setUserProfile: (data: ProfileFromServerPropsType) => void
}

export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsTYpe


class ProfileContainer extends React.Component<ProfileContainerPropsType, {}> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                console.log(response.data)
                this.props.setUserProfile(response.data)
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

export const ProfileContainerAPI = compose<React.FC>(connect(mapStateToProps, {setUserProfile}))(ProfileContainer)
