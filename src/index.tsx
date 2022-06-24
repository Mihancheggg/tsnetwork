import React from 'react';
import ReactDOM from 'react-dom';
import App, {AppPropsType} from './App';
import {addPost, state2, subscribe, updateNewPostText} from './Redux/State2';
import './index.css'

const rerenderEntireTree = (state2: AppPropsType) => {
    ReactDOM.render(<App updateNewPostText={updateNewPostText} state={state2} addPost={addPost}/>, document.getElementById('root'));
};

rerenderEntireTree(state2);

subscribe(rerenderEntireTree);