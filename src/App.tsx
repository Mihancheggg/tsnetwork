import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header';
import {Navbar} from './Components/Navbar/Navbar';
import {Profile} from './Components/Profile/Profile';
import {Dialogs, DialogsPropsType} from './Components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './Components/News/News';
import {Music} from './Components/Music/Music';
import {Settings} from './Components/Settings/Settings';
import {PostType} from './Components/Profile/MyPosts/Post/Post';
import {Friends} from './Components/Friends/Friends';
import {RootStateType} from './Redux/ReduxStore';
import {DialogsReducerActionTypes} from './Redux/Reducers/DialogsReducer';
import {ProfileReducerActionTypes} from './Redux/Reducers/ProfileReducer';
import {DialogsContainer} from './Components/Dialogs/DialogsContainer';

export type ReduxToAppPropsType = {
    state: RootStateType,
    dispatch: (action: DialogsReducerActionTypes | ProfileReducerActionTypes) => void
}

export type ProfilePagePropsType = {
    myPostsData: Array<PostType>,
    newPostText: string
}

export type AppPropsType = {
    profilePage: ProfilePagePropsType,
    dialogsPage: DialogsPropsType,
    sidebar: {}
}

const App = (props: ReduxToAppPropsType) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper_content">
                    {/*<Route path="/profile" component={Profile}/>
                    <Route path="/settings" component={Settings}/>*/}

                    <Route path="/profile" render={() => <Profile profilePage={props.state.profileReducer}
                                                                  dispatch={props.dispatch}
                    />}/>
                    <Route path="/dialogs" render={() => <DialogsContainer dialogsPageData={props.state.dialogsReducer}
                                                                  dispatch={props.dispatch}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/friends" render={() => <Friends/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
