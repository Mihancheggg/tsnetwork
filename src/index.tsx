import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import {RootStateType, store} from './Redux/ReduxStore';

const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <App
            dispatch={store.dispatch.bind(store)}
            state={state}/>,
        document.getElementById('root'));
}


store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})

rerenderEntireTree(store.getState())