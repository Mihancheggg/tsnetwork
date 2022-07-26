import {combineReducers, createStore} from "redux";
import {profileReducer} from './Reducers/ProfileReducer';
import {dialogsReducer} from './Reducers/DialogsReducer';
import {sidebarReducer} from './Reducers/SidebarReducer';

let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer
})

export const store = createStore(rootReducer);
export type RootStateType =  ReturnType<typeof store.getState>
export type ReduxStoreType = typeof store;
export type AppPropsType = ReturnType<typeof rootReducer>