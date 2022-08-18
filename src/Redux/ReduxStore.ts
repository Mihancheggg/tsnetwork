import {applyMiddleware, combineReducers, createStore} from 'redux';
import {profileReducer, ProfileReducerActionTypes} from './Reducers/ProfileReducer';
import {dialogsReducer, DialogsReducerActionTypes} from './Reducers/DialogsReducer';
import {sidebarReducer, SidebarReducerActionsType} from './Reducers/SidebarReducer';
import {usersReducer} from './Reducers/UsersReducer';
import {authReducer, AuthReducerActionTypes} from './Reducers/AuthReducer';
import thunkMiddleware from 'redux-thunk'

let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    usersReducer,
    sidebarReducer,
    authReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type RootStateType = ReturnType<typeof store.getState>
export type ReduxStoreType = typeof store;
export type AppPropsType = ReturnType<typeof rootReducer>
export type CommonActionsType = RootStateType
    | ProfileReducerActionTypes
    | DialogsReducerActionTypes
    | AuthReducerActionTypes
    | SidebarReducerActionsType

// @ts-ignore
window.store = store