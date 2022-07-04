import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import {store} from './Redux/StoredState';

const rerenderEntireTree = () => {
    ReactDOM.render(<App
            dispatch={store.dispatch.bind(store)}
            state={store.getState2()}/>,
        document.getElementById('root'));
};

rerenderEntireTree();

store.subscribe(rerenderEntireTree);