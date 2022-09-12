import {ThunkType} from './UsersReducer';
import {Dispatch} from 'redux';
import {getMyProfileThunkCreator} from './AuthReducer';
import {CommonActionsType} from '../ReduxStore';

export type AppStateType = {
    initialized: boolean
}

let initialState: AppStateType = {
    initialized: false
}

export type AppReducerActionTypes = setInitializedType

type setInitializedType = ReturnType<typeof setInitialized>

export const appReducer = (state: AppStateType = initialState, action: AppReducerActionTypes): AppStateType => {
    switch (action.type) {
        case 'SET-INITIALIZED':
            return {...state, initialized: true}
        default:
            return state
    }
}

export const setInitialized = () => {
    return {type: 'SET-INITIALIZED'} as const
}

export const initializeApp = (): ThunkType => (dispatch: Dispatch<CommonActionsType>) => {
    let promise = dispatch(getMyProfileThunkCreator())
    Promise.all([promise]).then(()=> {
        dispatch(setInitialized())
    })

}