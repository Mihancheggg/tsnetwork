import React from 'react';
import {Header} from './Header';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {getMyProfileThunkCreator} from '../../Redux/Reducers/AuthReducer';
import {AppPropsType} from '../../Redux/ReduxStore';

type MapDispatchToPropsType = {
    getMyProfile: () => void
}

type MapStateToPropsType = {
    login: string | null,
    isAuth: boolean
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

export class HeaderContainer extends React.Component<OwnPropsType, {}> {

    componentDidMount() {
        this.props.getMyProfile()
        /*usersAPI.getMyProfile()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })*/
    }

    render() {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state: AppPropsType): MapStateToPropsType => {
    return {
        login: state.authReducer.login,
        isAuth: state.authReducer.isAuth
    }
}

export const HeaderContainerAPI = compose<React.FC>(connect(mapStateToProps, {getMyProfile: getMyProfileThunkCreator}))(HeaderContainer)
