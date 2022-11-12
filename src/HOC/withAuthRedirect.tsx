import React from 'react';
import { AppPropsType } from '../Redux/ReduxStore';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export type MapStateToPropsForRedirectType = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: AppPropsType): MapStateToPropsForRedirectType => {
    return {
        isAuth: state.authReducer.isAuth
    }
}

export function withAuthRedirect<T>(Component: React.FC<T>){
    const RedirectComponent = (props: MapStateToPropsForRedirectType) => {
        const {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        // @ts-ignore
        return <Component {...restProps as T}/>
    }
    const ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedRedirectComponent
}

/*export function withAuthRedirect(Component: any) {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            let state = store.getState()
            if (!state.authReducer.isAuth) return <Redirect to={'/login'}/>
            return <Component {...this.props}/>
        }
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}*/

