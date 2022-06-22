import React from 'react';
import ReactDOM from 'react-dom';
import App, {AppPropsType} from './App';
import {addPost, updateNewPostText} from './Redux/State2';

export const rerenderEntireTree = (state2: AppPropsType) => {
    ReactDOM.render(<App updateNewPostText={updateNewPostText} state={state2} addPost={addPost}/>, document.getElementById('root'));
};