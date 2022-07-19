import React from 'react';
import {DialogItemType} from './DialogItem/DialogItem';
import {MessageItemType} from './MessageItem/MessageItem';
import {
    addMessageActionCreator,
    DialogsReducerActionTypes,
    updateNewMessageTextActionCreator
} from '../../Redux/Reducers/DialogsReducer';
import {Dialogs, DialogsPropsType} from './Dialogs';

export type DialogsContainerDataType = {
    dialogsPageData: DialogsPropsType
    dispatch: (action: DialogsReducerActionTypes) => void
}

export const DialogsContainer = (props: DialogsContainerDataType) => {

    const onTextAreaChangeHandler = (text: string) => {
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    return (
        <Dialogs dialogsPageData={props.dialogsPageData} addMessage={addMessage} updateTextAreaValue={onTextAreaChangeHandler}/>
    )
};