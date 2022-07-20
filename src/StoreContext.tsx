import React from 'react';
import {ReduxStoreType, RootStateType} from './Redux/ReduxStore';

/*export type ContextPropsType = {
    state: RootStateType
    dispatch: ({type}:{type: string})=> void
    getState: ()=> RootStateType
}*/

export const StoreContext = React.createContext({} as ReduxStoreType)

export type ProviderPropsType = {
    store: ReduxStoreType
    children: React.ReactNode
}

export const Provider = (props: ProviderPropsType) => {
    return <StoreContext.Provider value={props.store}>
                {props.children}
            </StoreContext.Provider>
}
