import React from 'react';
import styles from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogItemType = {
    name: string;
    id: number
}

type MessageItemType = {
    message: string;
}

const DialogItem = (props: DialogItemType) => {
    return (
        <div className={styles.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props: MessageItemType) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                <DialogItem name='Vasya' id={1}/>
                <DialogItem name='Kate' id={2}/>
                <DialogItem name='Leonid' id={3}/>
                <DialogItem name='Alex' id={4}/>
            </div>
            <div className={styles.messages}>
                <MessageItem message='Hi'/>
                <MessageItem message='How are you?'/>
                <MessageItem message='Very good'/>
            </div>
        </div>
    )
};