import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header';
import {Navbar} from './Components/Navbar/Navbar';
import {Profile} from './Components/Profile/Profile';
import {Dialogs} from './Components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper_content">
                    <Route path={'/profile'} render={()=><Profile/>}/>
                    <Route path={'/dialogs'} render={()=><Dialogs/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
