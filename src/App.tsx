import React from 'react';
import './App.css';
import {Navbar} from './Components/Navbar/Navbar';
import {Route, withRouter} from 'react-router-dom';
import {News} from './Components/News/News';
import {Music} from './Components/Music/Music';
import {Settings} from './Components/Settings/Settings';
import {PostType} from './Components/Profile/MyPosts/Post/Post';
import {Friends} from './Components/Friends/Friends';
import {DialogsContainer} from './Components/Dialogs/DialogsContainer';
import {UsersContainer} from './Components/Users/UsersContainer';
import {ProfileContainerAPI} from './Components/Profile/ProfileContainer';
import {ProfileFromServerPropsType} from './Redux/Reducers/ProfileReducer';
import {HeaderContainerAPI} from './Components/Header/HeaderContainer';
import {LoginContainer} from './Components/Login/Login';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {AppStateType, initializeApp} from './Redux/Reducers/AppReducer';
import {RootStateType} from './Redux/ReduxStore';
import {Preloader} from './Components/Common/Preloader/Preloader';

/*export type ReduxToAppPropsType = {
    state: RootStateType,
    dispatch: (action: DialogsReducerActionTypes | ProfileReducerActionTypes) => void
}*/

export type ProfilePagePropsType = {
    myPostsData: Array<PostType>,
    profile: ProfileFromServerPropsType | null
    status: string
}

export type AppPropsType = AppStateType & {
    initializeApp: () => void
}

class App extends React.Component<AppPropsType,{}> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if(!this.props.initialized){
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainerAPI/>
                <Navbar/>
                <div className="app-wrapper_content">
                    {/*<Route path="/profile" component={Profile}/>
                    <Route path="/settings" component={Settings}/>*/}

                    <Route path="/profile/:userID?" render={() => <ProfileContainerAPI/>}/>
                    <Route path="/dialogs" render={() =>
                        <DialogsContainer/>}/> {/*dialogsPageData={props.state.dialogsReducer} dispatch={props.dispatch}*/}
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/friends" render={() => <Friends/>}/>
                    <Route path="/login" render={() => <LoginContainer/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootStateType): AppStateType => ({
    initialized: state.appReducer.initialized
})

export default compose<React.FC>(connect(mapStateToProps, {initializeApp}), withRouter)(App);
