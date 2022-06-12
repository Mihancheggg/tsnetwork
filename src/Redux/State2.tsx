import {PostType} from '../Components/Profile/MyPosts/Post/Post';
import {MessageItemType} from '../Components/Dialogs/MessageItem/MessageItem';
import {DialogItemType} from '../Components/Dialogs/DialogItem/DialogItem';
import {v1} from 'uuid';

export let state2 = {
    myPostsData: [
        {id: v1(), message: 'Hi, how are you?', likes: 22},
        {id: v1(), message: 'Very nice!', likes: 8},
        {id: v1(), message: 'It is my second post', likes: 19},
        {id: v1(), message: 'It is my first post', likes: 15}
    ],
    dialogsPage: {
        dialogsData: [
            {id: v1(), name: 'Vasya'},
            {id: v1(), name: 'Kate'},
            {id: v1(), name: 'Leonid'},
            {id: v1(), name: 'Alex'}
        ],
        messagesData: [
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'How are you?'},
            {id: v1(), message: 'Very good'},
        ],
    }
}