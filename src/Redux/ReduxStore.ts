import {combineReducers, createStore} from "redux";
import {profileReducer} from './Reducers/ProfileReducer';
import {dialogsReducer} from './Reducers/DialogsReducer';
import {sidebarReducer} from './Reducers/SidebarReducer';

let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer
})

export const store = createStore(reducers);
export type RootStateType =  ReturnType<typeof store.getState>