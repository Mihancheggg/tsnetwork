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
import {DialogItemType} from './Components/Dialogs/DialogItem/DialogItem';
import {MessageItemType} from './Components/Dialogs/MessageItem/MessageItem';
import {StateType} from './Redux/state';

export type ReduxToAppPropsType = {
    state: AppPropsType,
}

export type AppPropsType = {
    myPostsData: Array<PostType>,
    dialogsPage: DialogsPropsType,
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

                    <Route path="/profile" render={() => <Profile myPostsData={props.state.myPostsData}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs dialogsPageData={props.state.dialogsPage}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
