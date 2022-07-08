import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css';
import {DialogItem, DialogItemType} from './DialogItem/DialogItem';
import {MessageItem, MessageItemType} from './MessageItem/MessageItem';
import {ActionTypes} from '../../Redux/Store';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../Redux/DialogsReducer';

export type DialogsPageDataType = {
    dialogsPageData: DialogsPropsType
    dispatch: (action: ActionTypes) => void
}

export type DialogsPropsType = {
    dialogsData: Array<DialogItemType>,
    messagesData: Array<MessageItemType>,
    newMessageText: string,
}

export const Dialogs = (props: DialogsPageDataType) => {

    const onTextAreaChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = (e.currentTarget.value)
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {props.dialogsPageData.dialogsData.map(item => <DialogItem img={item.img} name={item.name}
                                                                           id={item.id}/>)}
                {/*<DialogItem name="Vasya" id={1}/>*/}
                {/*<DialogItem name="Kate" id={2}/>*/}
                {/*<DialogItem name="Leonid" id={3}/>*/}
                {/*<DialogItem name="Alex" id={4}/>*/}
            </div>
            <div className={styles.messages}>

                <div>
                    {props.dialogsPageData.messagesData.map(item => <MessageItem img={item.img}
                                                                                 id={item.id}
                                                                                 message={item.message}/>)}
                </div>

                <div>
                    <textarea value={props.dialogsPageData.newMessageText}
                              onChange={onTextAreaChangeHandler}/>
                    <div>
                        <button onClick={addMessage}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    )
};