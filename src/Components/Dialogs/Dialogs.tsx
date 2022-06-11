import React from 'react';
import styles from './Dialogs.module.css';
import {DialogItem, DialogItemType} from './DialogItem/DialogItem';
import {MessageItem, MessageItemType} from './MessageItem/MessageItem';

export type DialogsPropsType ={
    dialogsData: Array<DialogItemType>,
    messagesData: Array<MessageItemType>
}

export const Dialogs = (props: DialogsPropsType) => {

    /*let dialogsData: Array<DialogItemType> = [
        {id: v1(), name: 'Vasya'},
        {id: v1(), name: 'Kate'},
        {id: v1(), name: 'Leonid'},
        {id: v1(), name: 'Alex'}
    ]

    let messagesData: Array<MessageItemType> = [
        {id: v1(), message: "Hi"},
        {id: v1(), message: "How are you?"},
        {id: v1(), message: "Very good"},
    ]*/

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {props.dialogsData.map(item => <DialogItem name={item.name} id={item.id}/>)}
                {/*<DialogItem name="Vasya" id={1}/>*/}
                {/*<DialogItem name="Kate" id={2}/>*/}
                {/*<DialogItem name="Leonid" id={3}/>*/}
                {/*<DialogItem name="Alex" id={4}/>*/}
            </div>
            <div className={styles.messages}>
                {props.messagesData.map(item => <MessageItem id={item.id} message={item.message}/>)}
                {/*<MessageItem id={v1()} message="Hi"/>*/}
                {/*<MessageItem id={v1()} message="How are you?"/>*/}
                {/*<MessageItem id={v1()} message="Very good"/>*/}
            </div>
        </div>
    )
};