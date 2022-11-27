import React from 'react';
import styles from './Dialogs.module.css';
import { DialogItem, DialogItemType } from './DialogItem/DialogItem';
import { MessageItem, MessageItemType } from './MessageItem/MessageItem';
import { DialogsContainerDataType } from './DialogsContainer';
import { FormDataType, NewMessageReduxForm } from './NewMessageForm/NewMessageForm';

/*export type DialogsPageDataType = {
    //dialogsPageData: DialogsPropsType
    dialogsData: Array<DialogItemType>
    messagesData: Array<MessageItemType>
    newMessageText: string
    addMessage: () => void
    updateTextAreaValue: (text: string) => void
}*/

export type DialogsPropsType = {
    dialogsData: Array<DialogItemType>,
    messagesData: Array<MessageItemType>,
}

export const Dialogs = (props: DialogsContainerDataType) => {

    /* const onTextAreaChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
         let text = (e.currentTarget.value)
         props.updateTextAreaValue(text)
     }*/

    /*const addMessage = () => {
        props.addMessage()
    }*/

    const addNewMessage = (values: FormDataType) => {
        props.addMessage(values.newMessage)
        values.newMessage = ''
    }

    //if (!state.authReducer.isAuth) return <Redirect to={'/login'}/> - делаем в контейнере

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {props.dialogsData.map(item => <DialogItem key={item.id} img={item.img} name={item.name}
                                                           id={item.id}/>)}
                {/*<DialogItem name="Vasya" id={1}/>*/}
                {/*<DialogItem name="Kate" id={2}/>*/}
                {/*<DialogItem name="Leonid" id={3}/>*/}
                {/*<DialogItem name="Alex" id={4}/>*/}
            </div>
            <div className={styles.messages}>

                <div>
                    {props.messagesData.map(item => <MessageItem key={item.id} img={item.img}
                                                                 id={item.id}
                                                                 message={item.message}/>)}
                </div>

                <div>
                    {/*<textarea value={props.newMessageText}
                              onChange={onTextAreaChangeHandler}/>
                    <div>
                        <button onClick={addMessage}>Add message</button>
                    </div>*/}
                    <NewMessageReduxForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
};