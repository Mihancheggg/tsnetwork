import React from 'react';
import {
    addMessageActionCreator,
    DialogsReducerActionTypes,
    updateNewMessageTextActionCreator
} from '../../Redux/Reducers/DialogsReducer';
import {Dialogs, DialogsPropsType} from './Dialogs';
import {StoreContext} from '../../StoreContext';
import {ReduxStoreType} from '../../Redux/ReduxStore';

export type DialogsContainerDataType = {
    dialogsPageData: DialogsPropsType
    dispatch: (action: DialogsReducerActionTypes) => void
}

export const DialogsContainer = (/*props: DialogsContainerDataType*/) => {

    /*const onTextAreaChangeHandler = (text: string) => {
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }*/

    return (
        <StoreContext.Consumer>
            {(store: ReduxStoreType) => {

                const dialogs = store.getState().dialogsReducer

                const onTextAreaChangeHandler = (text: string) => {
                    store.dispatch(updateNewMessageTextActionCreator(text))
                }

                const addMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }
                return (
                    <Dialogs //dialogsPageData={store.getState().dialogsPageData}
                        dialogsData={dialogs.dialogsData}
                        messagesData={dialogs.messagesData}
                        newMessageText={dialogs.newMessageText}
                        addMessage={addMessage}
                        updateTextAreaValue={onTextAreaChangeHandler}
                    />)
            }
            }
        </StoreContext.Consumer>
    )
};