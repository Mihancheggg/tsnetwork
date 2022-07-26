import React from 'react';
import {ReduxStoreType, RootStateType} from './Redux/ReduxStore';

/*export type ContextPropsType = {
    state: RootStateType
    dispatch: ({type}:{type: string})=> void
    getState: ()=> RootStateType
}*/

const StoreContext = React.createContext({} as ReduxStoreType)

type ProviderPropsType = {
    store: ReduxStoreType
    children: React.ReactNode
}

const Provider = (props: ProviderPropsType) => {
    return <StoreContext.Provider value={props.store}>
                {props.children}
            </StoreContext.Provider>
}
