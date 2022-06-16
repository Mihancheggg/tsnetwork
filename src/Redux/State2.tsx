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
        ],
    }
}

export let addPost = (message: string) => {
    /*let newPostState = */state2.myPostsData.push({id: v1(), message: message, likes: 0})
}