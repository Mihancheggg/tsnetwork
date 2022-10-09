import React, {lazy} from 'react';
import './App.css';
import {Navbar} from './Components/Navbar/Navbar';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {PostType} from './Components/Profile/MyPosts/Post/Post';
import {Friends} from './Components/Friends/Friends';
import {ProfileFromServerPropsType} from './Redux/Reducers/ProfileReducer';
import {HeaderContainerAPI} from './Components/Header/HeaderContainer';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {AppStateType, initializeApp} from './Redux/Reducers/AppReducer';
import {RootStateType} from './Redux/ReduxStore';
import {Preloader} from './Components/Common/Preloader/Preloader';
import {withSuspense} from './HOC/withSuspense';
//import {DialogsContainer} from './Components/Dialogs/DialogsContainer';
// import {News} from './Components/News/News';
// import {Music} from './Components/Music/Music';
// import {Settings} from './Components/Settings/Settings';
// import {UsersContainer} from './Components/Users/UsersContainer';
// import {ProfileContainerAPI} from './Components/Profile/ProfileContainer';
// import {LoginContainer} from './Components/Login/Login';
const DialogsContainer = lazy(() =>
    import('./Components/Dialogs/DialogsContainer')
        .then(({DialogsContainer}) => ({default: DialogsContainer})),
);
const ProfileContainerAPI = lazy(() =>
    import('./Components/Profile/ProfileContainer')
        .then(({ProfileContainerAPI}) => ({default: ProfileContainerAPI})),
);
const UsersContainer = lazy(() =>
    import('./Components/Users/UsersContainer')
        .then(({UsersContainer}) => ({default: UsersContainer})),
);
const News = lazy(() =>
    import('./Components/News/News')
        .then(({News}) => ({default: News})),
);
const Music = lazy(() =>
    import('./Components/Music/Music')
        .then(({Music}) => ({default: Music})),
);
const Settings = lazy(() =>
    import('./Components/Settings/Settings')
        .then(({Settings}) => ({default: Settings})),
);
const LoginContainer = lazy(() =>
    import('./Components/Login/Login')
        .then(({LoginContainer}) => ({default: LoginContainer})),
);

//component
class App extends React.Component<AppPropsType, {}> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainerAPI/>
                <Navbar/>
                <div className="app-wrapper_content">
                    <Switch>
                        {/*<Route path="/profile" component={Profile}/>
                    <Route path="/settings" component={Settings}/>*/}

                        <Route path="/profile/:userID?" render={() => {
                            return <React.Suspense fallback={<div>Loading...</div>}>
                                <ProfileContainerAPI/>
                            </React.Suspense>
                        }}/>
                        <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                        <Route path="/users" render={withSuspense(UsersContainer)}/>
                        <Route path="/news" render={withSuspense(News)}/>
                        <Route path="/music" render={withSuspense(Music)}/>
                        <Route path="/settings" render={withSuspense(Settings)}/>
                        <Route path="/login" render={withSuspense(LoginContainer)}/>
                        <Route path="/friends" render={() => <Friends/>}/>
                        <Route exact={true} path="/" render={()=> <Redirect to="/profile" />} />
                        <Route path="/*" render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootStateType): AppStateType => ({
    initialized: state.appReducer.initialized
})

export default compose<React.FC>(connect(mapStateToProps, {initializeApp}), withRouter)(App);

//types
export type ProfilePagePropsType = {
    myPostsData: Array<PostType>,
    profile: ProfileFromServerPropsType | null
    status: string
}

export type AppPropsType = AppStateType & {
    initializeApp: () => void
}
