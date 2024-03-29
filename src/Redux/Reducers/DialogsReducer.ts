//imports
import {v1} from 'uuid';
import {DialogsPropsType} from '../../Components/Dialogs/Dialogs';

//initial state
let initialState: DialogsPropsType = {
    dialogsData: [
        {id: v1(), name: 'Vasya', img: 'https://live.staticflickr.com/7572/26312703593_c983190d6c_b.jpg'},
        {id: v1(), name: 'Kate', img: 'https://live.staticflickr.com/7572/26312703593_c983190d6c_b.jpg'},
        {id: v1(), name: 'Leonid', img: 'https://live.staticflickr.com/7572/26312703593_c983190d6c_b.jpg'},
        {id: v1(), name: 'Alex', img: 'https://live.staticflickr.com/7572/26312703593_c983190d6c_b.jpg'}
    ],
    messagesData: [
        {
            id: v1(),
            message: 'Hi',
            img: 'https://i.pinimg.com/736x/3c/92/34/3c9234554d0f72bc4b131ae7ee830d20--bunny-bunny-bunny-rabbits.jpg'
        },
        {
            id: v1(),
            message: 'How are you?',
            img: 'https://i.pinimg.com/736x/3c/92/34/3c9234554d0f72bc4b131ae7ee830d20--bunny-bunny-bunny-rabbits.jpg'
        },
        {
            id: v1(),
            message: 'Very good',
            img: 'https://i.pinimg.com/736x/3c/92/34/3c9234554d0f72bc4b131ae7ee830d20--bunny-bunny-bunny-rabbits.jpg'
        },
    ]
};

//reducer
export const dialogsReducer = (state: DialogsPropsType = initialState, action: DialogsReducerActionTypes): DialogsPropsType => {
    switch (action.type) {
        case 'TSN/DIALOGS/ADD_MESSAGE':
            return {
                ...state, messagesData: [...state.messagesData, {
                    id: v1(),
                    /*message: state.newMessageText,*/
                    message: action.newMessage,
                    img: 'https://i.pinimg.com/736x/3c/92/34/3c9234554d0f72bc4b131ae7ee830d20--bunny-bunny-bunny-rabbits.jpg'
                }], /*newMessageText: ''*/
            };
        default:
            return state;
    }
};

//action creators
export const addMessageActionCreator = (newMessage: string) => ({type: 'TSN/DIALOGS/ADD_MESSAGE', newMessage} as const)

//types
export type DialogsReducerActionTypes = addMessageActionCreatorActionType

type addMessageActionCreatorActionType = ReturnType<typeof addMessageActionCreator>