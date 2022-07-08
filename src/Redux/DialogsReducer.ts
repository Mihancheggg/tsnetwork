import {v1} from 'uuid';
import {DialogsPropsType} from '../Components/Dialogs/Dialogs';
import {AddMessageActionType, UpdateNewMessageTextActionType} from './Store';

export const updateNewMessageTextActionCreator = (text: string): UpdateNewMessageTextActionType => {
    return {type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text};
}

export const addMessageActionCreator = (): AddMessageActionType => ({type: 'ADD-MESSAGE'})


export const dialogsReducer = (state: DialogsPropsType, action: any /*UpdateNewMessageTextActionType | AddMessageActionType*/) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newText;
            return state;
        case 'ADD-MESSAGE':
            state.messagesData.push({
                id: v1(),
                message: state.newMessageText,
                img: 'https://i.pinimg.com/736x/3c/92/34/3c9234554d0f72bc4b131ae7ee830d20--bunny-bunny-bunny-rabbits.jpg'
            })
            state.newMessageText = '';
            return state;
        default:
            return state;
    }
};