import React from 'react';
import {Header} from './Header';
import axios from 'axios';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../Redux/Reducers/AuthReducer';
import {AppPropsType} from '../../Redux/ReduxStore';

type MapDispatchToPropsType = {
    setAuthUserData: (userID: number, email: string, login: string) => void
}

type MapStateToPropsType = {
    login: string | null,
    isAuth: boolean
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

export class HeaderContainer extends React.Component<OwnPropsType, {}> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    /*let data = response.data*/
                    this.props.setAuthUserData(id, email, login)
                }
            })
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

export const HeaderContainerAPI = compose<React.FC>(connect(mapStateToProps, {setAuthUserData}))(HeaderContainer)