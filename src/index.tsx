import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import './index.css'
import {store} from './Redux/ReduxStore';
import {HashRouter} from 'react-router-dom';
//import {StoreContext} from './StoreContext';
//import {Provider} from './StoreContext';

ReactDOM.render(
    /*<StoreContext.Provider value={store}>
        <App
            /!*dispatch={store.dispatch.bind(store)}
            state={state}*!//>
    </StoreContext.Provider>*/
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
    document.getElementById('root'));

/*const rerenderEntireTree = (/!*state: RootStateType*!/) => {
    ReactDOM.render(
        /!*<StoreContext.Provider value={store}>
            <App
                /!*dispatch={store.dispatch.bind(store)}
                state={state}*!//>
        </StoreContext.Provider>*!/
        <Provider store={store}>
               <App/>
        </Provider>,
        document.getElementById('root'));
}


store.subscribe(() => {
    //let state = store.getState()
    rerenderEntireTree(/!*state*!/)
})

rerenderEntireTree(/!*store.getState()*!/)*/

