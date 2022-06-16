import React from 'react';
import styles from './Dialogs.module.css';
import {DialogItem, DialogItemType} from './DialogItem/DialogItem';
import {MessageItem, MessageItemType} from './MessageItem/MessageItem';

export type DialogsPageDataType ={
    dialogsPageData: DialogsPropsType
}

export type DialogsPropsType ={
    dialogsData: Array<DialogItemType>,
    messagesData: Array<MessageItemType>
}

export const Dialogs = (props: DialogsPageDataType) => {

    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        let text = (newMessageElement.current && newMessageElement.current.value)
        alert(text)
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {props.dialogsPageData.dialogsData.map(item => <DialogItem img={item.img} name={item.name} id={item.id}/>)}
                {/*<DialogItem name="Vasya" id={1}/>*/}
                {/*<DialogItem name="Kate" id={2}/>*/}
                {/*<DialogItem name="Leonid" id={3}/>*/}
                {/*<DialogItem name="Alex" id={4}/>*/}
            </div>
            <div className={styles.messages}>
                {props.dialogsPageData.messagesData.map(item => <MessageItem img={item.img} id={item.id} message={item.message}/>)}
                {/*<MessageItem id={v1()} message="Hi"/>*/}
                {/*<MessageItem id={v1()} message="How are you?"/>*/}
                {/*<MessageItem id={v1()} message="Very good"/>*/}
            </div>
            <div>
                <textarea ref={newMessageElement}></textarea>
                <button onClick={addPost}>Add message</button>
            </div>

        </div>
    )
};