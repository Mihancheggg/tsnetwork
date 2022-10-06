import React from 'react';
import {Profile} from './Profile';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {
  getStatusThunkCreator,
  getUserProfileThunkCreator,
  ProfileFromServerPropsType, setPhotoThunkCreator, updateStatusThunkCreator
} from '../../Redux/Reducers/ProfileReducer';
import {AppPropsType} from '../../Redux/ReduxStore';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../HOC/withAuthRedirect';

type PathParamType = {
  userID: string
}

export type MapStateToPropsType = {
  profile: ProfileFromServerPropsType | null
  status: string
  authed: number | null
}

type MapDispatchToPropsType = {
  getUserProfile: (userID: string) => void
  getUserStatus: (userID: string) => void
  updateStatus: (status: string) => void
  setPhoto: (photo: any) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

export type ProfileContainerPropsType = OwnPropsType & RouteComponentProps<PathParamType>

class ProfileClassContainer extends React.Component<ProfileContainerPropsType, {}> {

  refreshProfile() {
    let userID = this.props.match.params.userID
    if (!userID) {
      userID = this.props.authed !== null ? this.props.authed.toString() : ''
      if (!userID) {
        this.props.history.push('/login')
      }
    }
    this.props.getUserProfile(userID)
    //setTimeout(()=>{
    this.props.getUserStatus(userID)
    // },500)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
    if (this.props.match.params.userID !== prevProps.match.params.userID) {
      this.refreshProfile()
    }
  }

  render() {
    return (
      <Profile isOwner={!this.props.match.params.userID} {...this.props} profile={this.props.profile}
               status={this.props.status}
               updateStatus={this.props.updateStatus}/>
    );
  }
}

let mapStateToProps = (state: AppPropsType): MapStateToPropsType => {
  return {
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    authed: state.authReducer.userID
  }
}

//let AuthRedirectComponent = withAuthRedirect(ProfileClassContainer)
//let withUrlDataContainerComponent = withRouter(ProfileClassContainer)

export const ProfileContainerAPI = compose<React.FC>(
  connect(mapStateToProps, {
    getUserProfile: getUserProfileThunkCreator,
    getUserStatus: getStatusThunkCreator,
    updateStatus: updateStatusThunkCreator,
    setPhoto: setPhotoThunkCreator
  }),
  withRouter, withAuthRedirect
)(ProfileClassContainer)
