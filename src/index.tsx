import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import {store} from './Redux/ReduxStore';
import {StoreContext} from './StoreContext';
import {Provider} from './StoreContext';

const rerenderEntireTree = (/*state: RootStateType*/) => {
    ReactDOM.render(
        /*<StoreContext.Provider value={store}>
            <App
                /!*dispatch={store.dispatch.bind(store)}
                state={state}*!//>
        </StoreContext.Provider>*/
        <Provider store={store}>
               <App/>
        </Provider>,
        document.getElementById('root'));
}


store.subscribe(() => {
    //let state = store.getState()
    rerenderEntireTree(/*state*/)
})

rerenderEntireTree(/*store.getState()*/)