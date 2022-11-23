//imports
import {ThunkType} from './UsersReducer';
import {Dispatch} from 'redux';
import {getMyProfileThunkCreator} from './AuthReducer';
import {CommonActionsType} from '../ReduxStore';

//const(Redux-ducks principle)
const SET_INITIALIZED = 'TSN/APP/SET_INITIALIZED'

//initial state
let initialState: AppStateType = {
    initialized: false
}

//reducer
export const appReducer = (state: AppStateType = initialState, action: AppReducerActionTypes): AppStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {...state, initialized: true}
        default:
            return state
    }
}

//action creator
export const setInitialized = () => {
    return {type: SET_INITIALIZED} as const
}

//thunk creator
export const initializeApp = (): ThunkType => (dispatch: Dispatch<CommonActionsType>) => {
    let promise = dispatch(getMyProfileThunkCreator())
    Promise.all([promise]).then(()=> {
        dispatch(setInitialized())
    })
}

//types
export type AppStateType = {
    initialized: boolean
}

export type AppReducerActionTypes = setInitializedType

type setInitializedType = ReturnType<typeof setInitialized>