import React from 'react';
import styles from './MessageItem.module.css';

export type MessageItemType = {
    id: string;
    message: string;
}

export const MessageItem = (props: MessageItemType) => {
    return (
        <div className={styles.message} key={props.id}>{props.message}</div>
    )
}